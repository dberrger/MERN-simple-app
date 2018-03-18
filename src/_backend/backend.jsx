var jwt = require('jsonwebtoken');
//configure backend (localStorage)
let usersDB = JSON.parse(localStorage.getItem('usersDB')) || [];


export function initBackend() {
    let fetch = window.fetch;

    window.fetch = function (url, options) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //authenticate
                if (url.endsWith("/authenticate") && options.method === "POST") {
                    let authUser = JSON.parse(options.body);
                    // authenticate(params);
                    let filteredUsers = usersDB.filter(user => {
                        return user.username === authUser.username && user.password === authUser.password;
                    });
                
                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let JWTtoken = jwt.sign({ id: user.id, username: user.username, password: user.password }, 'shhhhh');
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            // history: user.history,
                            token: JWTtoken
                        };
                        console.log(responseJson.token);
                        let decoded = jwt.verify(JWTtoken, 'shhhhh');
                        console.log(decoded);
                        
                        resolve({ ok: true, data: () => responseJson });
                        return;
                    }
                    reject('Username or password is incorrect. Try again');
                    return;

                }
                // get user history
                if (url.match(/history$/) && options.method === 'GET') {
                    // getHistory(options);
                    let token = options.headers.Authorization;
                    let validUser = checkToken(token);
                    
                    if (options.headers && validUser[0]) {                
                        // respond 200 OK with user
                
                        
                        resolve({ ok: true, data: () => validUser[0].history });
                        return;
                    }
                    reject('401 - Unauthorised');
                    return;
                }

                /******REGISTER-------------------------- */
                if (url.match(/\/register$/) && options.method === "POST") {
                    console.log("PROVET");
                    let requestUser = JSON.parse(options.body);
                    console.log(requestUser);
                    // addUser(request_params);
                    
                    let matchedUsers = usersDB.filter(
                        user => { return user.username === requestUser.username || user.email === requestUser.email }).length;
                
                    if (matchedUsers) {
                        reject("User with same email || username is alreay exist!");
                        return;
                    }
                
                    usersDB.id = usersDB.length ? Math.max(...usersDB.map(user => user.id)) + 1 : 1;
                    requestUser.id = usersDB.id;
                    requestUser.history = [];
                    usersDB.push(requestUser);
                    localStorage.setItem("usersDB", JSON.stringify(usersDB));
                
                    resolve({ status: true, data: () => ({}) });
                    return;
                }


                // if(url.match(/\/booking$/) && options.method === 'GET') {

                //     let token = options.headers.Authorization;
                //     let validUser = checkToken(token);

                //     if(options.headers && validUser[0]) {
                //         epmtyBookings = epmtyBookings();
                        

                //     }

                // }
                
                if(url.match(/\/profile$/) && options.method === 'GET') {

                    let token = options.headers.Authorization;
                    let validUser = checkToken(token);

                    if(options.headers && validUser[0]) {
                        resolve({ ok: true, data: ()=>(validUser[0])}); 
                        return;                    
                    }
                    reject("Something going wrong");
                }


                // add booking
                if (url.match(/\/add$/) && options.method === 'POST') {

                    let token = options.headers.Authorization;
                    let validUser = checkToken(token);

                    if (options.headers && validUser[0]) {                
                        let newBooking = JSON.parse(options.body);
                        
                        console.log(`new booking from backend: ${newBooking}`);
                        addBookingToHistory(newBooking, validUser[0]);

                        resolve({ ok: true, data: () => validUser.history });
                        return;
                    }
                    reject('401 - Unauthorised');
                }


                if (url.match(/\/times$/) && options.method === 'POST') {

                    let token = options.headers.Authorization;
                    let validUser = checkToken(token);

                    if (options.headers && validUser[0]) {                
                       let unavaliable = getAvaliableTimes(JSON.parse(options.body));
                       //getAvaliableDates(unavliable)
                        console.log(unavaliable);
                        
                        resolve({ ok: true, data: () => (unavaliable) });
                        return;
                    }
                    reject('401 - Unauthorised');
                }


                /**Delete booking */

                if (url.match(/\/delete$/) && options.method === 'DELETE') {

                    let token = options.headers.Authorization;
                    let validUser = checkToken(token);
                   
                    
                    if (options.headers && validUser[0]) {                
                        let delID = options.body;
                        console.log(validUser[0]);
                        console.log(usersDB);
                        let userID = usersDB.filter(user => {  return user.id === validUser[0].id})[0].id;
                            console.log(userID)
                        usersDB[userID-1].history = usersDB[userID-1].history.filter(el =>  el.id != delID)

                        localStorage.setItem("usersDB", JSON.stringify(usersDB));
                    
                        resolve({ ok: true, data: () => ({}) });
                        return;
                    }
                    reject('401 - Unauthorised');
                }
                
                // pass through any requests not handled above
                fetch(url, options).then(response => resolve(response));
            }, 600);
        });
    }

}


function addUser(requestUser) {
    console.log(requestUser);
    

}

function getHistory(options) {
   


}

function authenticate(authUser) {
    //match check
   

}

function checkToken(token) {
    
    let decoded = jwt.verify(token, 'shhhhh');
    
    let filteredUser = usersDB.filter(user => {
        return user.username === decoded.username && user.password === decoded.password;
    });

    return filteredUser;
}

function addBookingToHistory(newBooking, validUser) {
    console.log(validUser);
    
    newBooking.id = validUser.history.length ? Math.max(...validUser.history.map(booking => booking.id)) + 1 : 1;
    usersDB.forEach(user => {
        if(user.id === validUser.id) {    
            user.history.push(newBooking);
        }
    localStorage.setItem("usersDB", JSON.stringify(usersDB));
    });
}


function getUser(id) {
    
}

function getAvaliableTimes(date) {
    let avaliableTimes = getFreeDay();
   let arraysOfHistories = usersDB.map( user => {
       return user.history
   });
   let merged = [].concat.apply([], arraysOfHistories);
   if(merged.length === 0) return avaliableTimes;
   let unavaliableTimes = merged.filter( booking => {
        return booking.date.years === date.years &&
            booking.date.months === date.months &&
             booking.date.date === date.date
   }).map( booking => (booking.date.time))
    avaliableTimes = avaliableTimes.filter( ( el ) => !unavaliableTimes.includes( el ) );
    return avaliableTimes;
}

//rewrite
function getFreeDay() {
    return ['9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am',
            '12:00 am', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm',
            '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm' ]
}
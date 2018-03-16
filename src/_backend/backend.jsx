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
                        resolve({ ok: true, data: () => validUser.history });
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
                        bookingIsAvaliable(newBooking.date) 
                                ? addBookingToHistory(newBooking)
                                : reject("")
                        
                        resolve({ ok: true, data: () => validUser.history });
                        return;
                    }
                    reject('401 - Unauthorised');
                }

                /**Delete booking */

                // if (url.match(/\/delete$/) && options.method === 'POST') {

                //     let token = options.headers.Authorization;
                //     var decoded = jwt.verify(token, 'shhhhh');
                    
                //     var filteredUser = usersDB.filter(user => {
                //         return user.username === decoded.username && user.password === decoded.password;
                //     });

                //     if (options.headers && filteredUser[0]) {                
                        
                //         let deleteBooking = JSON.parse(options.body);
                //         usersDB.pop(usersDB.filter(user => {  return user.id === filteredUser[0].id})[0].history
                //                 .filter(currentBooking =>{
                //                     return deleteBooking.id === currentBooking.id
                //                 }));
                //         localStorage.setItem("usersDB", JSON.stringify(usersDB));
                    
                //         resolve({ ok: true, data: () => filteredUsers.history });
                //         return;
                //     }
                //     reject('401 - Unauthorised');
                //     return;
                // }
                
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

function addBookingToHistory(newBooking) {
    
    newBooking.id = validUser[0].history.length ? Math.max(...validUser.history.map(booking => booking.id)) + 1 : 1;
    usersDB.forEach(user => {
        if(user.id === validUser[0].id) {    
                user.history.push(newBooking);
        }
    localStorage.setItem("usersDB", JSON.stringify(usersDB));
    });
}
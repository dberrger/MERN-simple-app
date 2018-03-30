import React, {Component} from "react";

class Home extends Component {
    render() {
        return(
           <div>
    <header>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
           
          <div className="carousel-item active" style={ {backgroundImage: 'url("https://webaprod.com/wp-content/uploads/2017/01/Website-Design-Background_Torquay-1170x620.png")'}}>
            <div className="carousel-caption d-none d-md-block">
              <h3>First Slide</h3>
              <p>This is a description for the first slide.</p>
            </div>
          </div>
           
          {/* <div className="carousel-item" style={ {backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
            <div className="carousel-caption d-none d-md-block">
              <h3>Second Slide</h3>
              <p>This is a description for the second slide.</p>
            </div>
          </div>
           
          <div className="carousel-item" style={ {backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
            <div className="carousel-caption d-none d-md-block">
              <h3>Third Slide</h3>
              <p>This is a description for the third slide.</p>
            </div>
          </div> */}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>
    <div className="container">

      <h1 className="my-4">Welcome to Modern Business</h1>
      
      <h2>Portfolio Heading</h2>

      <div className="row">
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="https://c7.dq1.me/uploads/article_block/27230/article_featured_image/50568/thumb_Woman_20at_20the_20dentist_s_20chair_20during_20a_20dental_20procedure_202.jpg" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project One</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://www.creeksidefamily.dental/wp-content/uploads/2016/06/Dentist-talking-to-patient-700x400.jpg" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Two</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="https://c7.dq1.me/uploads/article_block/5381/article_featured_image/50188/thumb_Medical_20treatment_20at_20the_20dentist_20office_202.jpg" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Three</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://www.tlcdental.biz/wp-content/uploads/2017/06/Depositphotos_133093136_original-1-700x400.jpg" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Four</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://www.naperdent.com/images/people/naperville_dentist_8_700x400.jpg" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Five</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://dentalnow14.com/wp-content/uploads/2016/01/Cirugia-oral-3.jpg" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Six</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
            </div>
          </div>
        </div>
      </div>
       

       
      <div className="row">
        <div className="col-lg-6">
          <h2>Modern Business Features</h2>
          <p>The Modern Business template by Start Bootstrap includes:</p>
          <ul>
            <li>
              <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src="http://www.mehtaeyeclinic.com/images/QV-FEMTO---main-700x450.jpg" alt=""/>
        </div>
      </div>
       

      <hr/>

       
      <div className="row mb-4">
        <div className="col-md-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
        <div className="col-md-4">
          <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
        </div>
      </div>

    </div>
     

     
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
       
    </footer>
           </div>
        );
    }
}

export default Home;
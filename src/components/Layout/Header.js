import React, {Component} from 'react'
import Logo from '../../assets/img/logo-white.png'
const $ = global.$
class Header extends Component {
  componentDidMount() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (this.props.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && this.props.location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 57)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 57
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                  <img src={Logo} width="80.65" height="59.71"/>
              </a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                      data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#about">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#services">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#portfolio">Things You Should Now</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#contact">The GXX® 1™ Card</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#contact">Career</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#contact">FAQ</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link js-scroll-trigger" href="#contact">Sign Up</a>
                      </li>
                      <li className="nav-item">
                          <button type="button" className="btn btn-outline-light btn-login">Log in</button>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default Header

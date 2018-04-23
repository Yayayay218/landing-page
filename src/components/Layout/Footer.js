import React from 'react'
import Logo from '../../assets/img/logox2-black.png'

const Footer = () => (
    <section id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 text">
                    <img src={Logo} width="80.6px" height="59.7px" alt="" />
                </div>
                <div className="col-lg-4">
                    <p className="text-center">At half-past eight the door opened, the policeman appeared.</p>
                </div>
                <div className="col-lg-4">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-slack" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-dribbble" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                        <li className="list-inline-item"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default Footer

import React from 'react'

const ContactUs = () => (
    <section id="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <h2>DROP US A LINE</h2>
                    <p>You can also mail us directly to hey@mtun.com or give us a call +84 906 404 101</p>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Your Email" />
                        </div>
                        <div className="form-group">
              <textarea className="form-control" id="formGroupExampleInput3" placeholder="How can we help?" rows="5" >
                </textarea>
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </form>
                    <h5 className="mt-5">Address #1</h5>
                    <p className="text-muted">10624 19th Ave sw,
                        <br /> Seattle WA 98146
                        <br /> United States</p>
                </div>
            </div>
        </div>
    </section>
)

export default ContactUs


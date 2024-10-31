import React from 'react'
import '../css/testimonial.css'

export default function Testimonial() {

    return (
        <>
            <div className="test-container">
                <div className="test-firststep">
                    <caption>TESTIMONIAL</caption>
                    <h2 className="test-what">What Our Customers Say</h2>
                    <p className="test-discover">Discover the perfect blend of innovation and elegance</p>
                </div>

                <div className="test-secondstep">
                    <div className="test-secondstep-left">
                        <img className="quote" src="./images/quote.jpg" alt="#" />
                        <h5 className="we">We would like to express our utmost <br/>
                            satisfaction with the service <br/>
                            provide by Vedic
                        </h5>
                    </div>
                    <div className="test-secondstep-right">
                        <img className="test-img01" src="./images/testimg1.jpg" alt="#" />
                        <img className="test-img01" src="./images/testimg2.jpg" alt="#" />
                        <img className="test-img01" src="./images/testimg3.jpg" alt="#" />
                    </div>
                </div>
            </div>
        </>
    )
}

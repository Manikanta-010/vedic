import React from 'react'
import '../css/footer.css'
 
 
export default function Footer() {
    return (
        <>
            <div className="footer-container">
            <div className="footer-leftpart">
                    <img className="footer-img" src="./images/footer_img.png" alt="#" />
                    <h3>Crafting timeless spaces that echo <br />
                        your narrative and style.</h3>
                </div>
                <div className="footer-rightpart">
                    <ul className="footer-rightpart-in-leftside">
                        <li>Quick Links</li>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Portfolio</li>
                        <li>Contact US</li>
                    </ul>
                    <div className="footer-rightpart-in-rightside">
                        <ul className="in-right-data">
                            <li>PHONE</li>
                            <li>+91 7288083692</li>
                            <li>+91 9989054389</li>
                            <li>EMAIL</li>
                            <li>vedic@gmail.com</li>
                            <li>CONTACT INFO</li>
                            <li>303B, Capital Park, Madhapur, <br />
                                Telangana HYD-500081</li>
                        </ul>
                    </div>
                </div>
 
            </div>
            <div className="footer-ending-part">
                <p className="copy"> &copy; Copyright 2022, All Rights Reserved by ClarityUI  </p>
                <span className="footer-btns">
                 <button className="btn01"><i class="fa-brands fa-twitter"></i></button>
                 <button className="btn02"><i class="fa-brands fa-facebook-f"></i></button>
                 <button className="btn03"><i class="fa-brands fa-instagram"></i></button>
                 <button className="btn04"><i class="fa-brands fa-github"></i></button>
                </span>
            </div>
        </>
    )
}

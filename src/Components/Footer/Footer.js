import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
            <div class="row">
                {/* <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div> */}
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Events">Events</a></li>
                        <li><a href="/Contact">Sponser Us</a></li>
                        <li><a href="#">Aluni</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#">Email-saic@thapar.edu</a></li>
                        <li><a href="#">Address-Thapar University,Patiala</a></li>
                        {/* <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li> */}
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/SAIC.Thapar/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/@saictv7529"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/saic_tiet/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/student-alumni-interaction-cell/mycompany/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
   </footer>
      

    );
}
export default Footer;
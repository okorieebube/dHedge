import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer-section">
  <div className="footer-top pt-150 pb-5 background-img-2" style={{background: 'url("assets/img/footer-bg.png") no-repeat center top / cover'}}>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-3 mb-3 mb-lg-0">
          <div className="footer-nav-wrap text-white">
            <img src="assets/img/logo-white-1x.png" alt="footer logo" width={120} className="img-fluid mb-3" />
            <p>
              Holisticly empower premium architectures without value-added
              ideas. Seamlessly evolve cross-platform experiences.
            </p>
            <div className="social-list-wrap">
              <ul className="social-list list-inline list-unstyled">
                <li className="list-inline-item">
                  <Link to="#" target="_blank" title="Facebook"><span className="ti-facebook" /></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" target="_blank" title="Twitter"><span className="ti-twitter" /></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" target="_blank" title="Instagram"><span className="ti-instagram" /></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" target="_blank" title="printerst"><span className="ti-pinterest" /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
          <div className="footer-nav-wrap text-white">
            <h5 className="mb-3 text-white">Others Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="#">About Us</Link></li>
              <li className="mb-2"><Link to="#">Contact Us</Link></li>
              <li className="mb-2"><Link to="#">Pricing</Link></li>
              <li className="mb-2"><Link to="#">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="#">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
          <div className="footer-nav-wrap text-white">
            <h5 className="mb-3 text-white">Support</h5>
            <ul className="list-unstyled support-list">
              <li className="mb-2 d-flex align-items-center">
                <span className="ti-location-pin mr-2" />
                121 King Melbourne
                <br />Australia 3000
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="ti-mobile mr-2" />
                <Link to="tel:+61283766284"> +61 2 8376 6284</Link>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="ti-email mr-2" /><Link to="mailto:mail@example.com">
                  mail@example.com</Link>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="ti-world mr-2" /><Link to="#"> www.yourdomain.com</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-nav-wrap text-white">
            <h5 className="mb-3 text-white">Location</h5>
            <img src="assets/img/map.png" alt="location map" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*footer top end*/}
  {/*footer copyright start*/}
  <div className="footer-bottom gray-light-bg pt-4 pb-4">
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-md-6 col-lg-5">
          <p className="copyright-text pb-0 mb-0">
            Copyrights © 2020 All rights reserved by
            <Link to="#">ThemeTags</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

     );
}
 
export default Footer;
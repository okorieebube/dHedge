import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div className="main">
            {/*hero section start*/}
            <section className="hero-section hero-section-2 ptb-100">
                <div className="circles">
                <div className="point animated-point-1" />
                <div className="point animated-point-2" />
                <div className="point animated-point-3" />
                <div className="point animated-point-4" />
                <div className="point animated-point-5" />
                <div className="point animated-point-6" />
                <div className="point animated-point-7" />
                <div className="point animated-point-8" />
                <div className="point animated-point-9" />
                </div>
                <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-6">
                    <div className="hero-content-left ptb-100 text-white">
                        <h1 className="text-white">
                        <span>Best way to connect</span> with your customers
                        </h1>
                        <p className="lead">
                        Conveniently generate multifunctional markets and B2C vortals.
                        Uniquely enable inexpensive materials rather than sticky
                        products.
                        </p>
                        <Link to="#" className="btn app-store-btn">Contact with us</Link>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                    <div className="hero-animation-img">
                        <img className="img-fluid d-block animation-one" src="assets/img/hero-animation-04.svg" alt="animation" />
                        <img className="img-fluid d-none d-lg-block animation-two" src="assets/img/hero-animation-01.svg" alt="animation" width={120} />
                        <img className="img-fluid d-none d-lg-block animation-three" src="assets/img/hero-animation-02.svg" alt="animation" width={120} />
                        <img className="img-fluid d-none d-lg-block animation-four" src="assets/img/hero-animation-03.svg" alt="animation" width={230} />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*hero section end*/}
            {/*promo section start*/}
            <section className="promo-section ptb-100">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                    <div className="section-heading text-center mb-5">
                        <h2>
                        Why small business owners <br /><span>love AppCo?</span>
                        </h2>
                        <p className="lead">
                        Following reasons show advantages of adding AppCo to your lead
                        pages, demos and checkouts
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row equal">
                    <div className="col-md-4 col-lg-4">
                    <div className="
                                single-promo single-promo-hover single-promo-1
                                rounded
                                text-center
                                white-bg
                                p-5
                                h-100
                            ">
                        <div className="circle-icon mb-5">
                        <span className="ti-vector text-white" />
                        </div>
                        <h5>Clean Design</h5>
                        <p>Increase sales by showing true dynamics of your website.</p>
                    </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                    <div className="
                                single-promo single-promo-hover single-promo-1
                                rounded
                                text-center
                                white-bg
                                p-5
                                h-100
                            ">
                        <div className="circle-icon mb-5">
                        <span className="ti-lock text-white" />
                        </div>
                        <h5>Secure Data</h5>
                        <p>
                        Build your online store’s trust using Social Proof &amp; Urgency.
                        </p>
                    </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                    <div className="
                                single-promo single-promo-hover single-promo-1
                                rounded
                                text-center
                                white-bg
                                p-5
                                h-100
                            ">
                        <div className="circle-icon mb-5">
                        <span className="ti-eye text-white" />
                        </div>
                        <h5>Retina Ready</h5>
                        <p>
                        Realize importance of social proof in customer’s purchase
                        decision.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*promo section end*/}
            {/*about us section start*/}
            <section id="about" className="about-us ptb-100 gray-light-bg">
                <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                    <div className="about-content-left section-heading">
                        <h2>
                        Use your android or ios device <br />
                        <span>to manage everything.</span>
                        </h2>
                        <div className="single-feature mb-4">
                        <div className="icon-box-wrap d-flex align-items-center mb-2">
                            <div className="mr-3 icon-box">
                            <img src="assets/img/image-icon-1.png" alt="icon" className="img-fluid" />
                            </div>
                            <p className="mb-0">
                            Proactively syndicate open-source e-markets after low-risk
                            high-yield synergy. Professionally simplify visionary
                            technology.
                            </p>
                        </div>
                        </div>
                        <div className="single-feature mb-4">
                        <div className="icon-box-wrap mb-2">
                            <div className="mr-3 icon-box">
                            <img src="assets/img/image-icon-2.png" alt="icon" className="img-fluid" />
                            </div>
                            <p className="mb-0">
                            Intrinsicly aggregate cutting-edge internal or "organic"
                            sources through pandemic manufactured products.
                            Synergistically.
                            </p>
                        </div>
                        <p />
                        </div>
                        <div className="single-feature mb-4">
                        <div className="icon-box-wrap mb-2">
                            <div className="mr-3 icon-box">
                            <img src="assets/img/image-icon-3.png" alt="icon" className="img-fluid" />
                            </div>
                            <p className="mb-0">
                            Completely administrate empowered e-tailers after
                            extensive experiences. Holisticly leverage existing
                            quality networks.
                            </p>
                        </div>
                        <p />
                        </div>
                        <div className="single-feature mb-4">
                        <div className="icon-box-wrap mb-2">
                            <div className="mr-3 icon-box">
                            <img src="assets/img/image-icon-4.png" alt="icon" className="img-fluid" />
                            </div>
                            <p className="mb-0">
                            Intrinsicly incentivize functionalized metrics whereas go
                            forward networks. Collaboratively fabricate
                            clicks-and-mortar intellectual.
                            </p>
                        </div>
                        <p />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="about-content-right">
                        <img src="assets/img/image-14.png" alt="about us" className="img-fluid" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*about us section end*/}
            {/*our video promo section start*/}
            <section className="video-promo ptb-100 background-img" style={{background: 'url("img/hero-bg-1.jpg") no-repeat center center / cover'}}>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <div className="video-promo-content mt-4 text-center">
                        <Link to="https://www.youtube.com/watch?v=9No-FiEInLA" className="popup-youtube video-play-icon d-inline-block"><span className="ti-control-play" /></Link>
                        <h5 className="mt-4 text-white">Watch video overview</h5>
                        <div className="download-btn mt-5">
                        <Link to="#" className="btn google-play-btn mr-3"><span className="ti-android" /> Google
                            Play</Link>
                        <Link to="#" className="btn app-store-btn"><span className="ti-apple" /> App Store</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*our video promo section end*/}
            {/*our pricing packages section start*/}
            <section id="pricing" className="package-section gray-light-bg ptb-100">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="section-heading text-center mb-5">
                        <span className="badge badge-primary badge-pill">Our Pricing Package</span>
                        <h2>
                        Afforadble Pricing and Packages <br /><span>choose your best one</span>
                        </h2>
                        <p className="lead">
                        Monotonectally grow strategic process improvements vis-a-vis
                        integrated resources.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md">
                    <div className="card text-center single-pricing-pack">
                        <div className="pt-4">
                        <h5>Basic</h5>
                        </div>
                        <div className="pricing-img mt-4">
                        <img src="assets/img/basic.svg" alt="pricing img" className="img-fluid" />
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                        <div className="h1 text-center mb-0">
                            $<span className="price font-weight-bolder">29</span>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            <li>Push Notifications</li>
                            <li>Data Transfer</li>
                            <li>SQL Database</li>
                            <li>Search &amp; SEO Analytics</li>
                            <li>24/7 Phone Support</li>
                            <li>2 months technical support</li>
                            <li>2+ profitable keyword</li>
                        </ul>
                        <Link to="#" className="btn outline-btn mb-3" target="_blank">Purchase now</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md">
                    <div className="card popular-price text-center single-pricing-pack">
                        <div className="pt-4">
                        <h5>Standard</h5>
                        </div>
                        <div className="pricing-img mt-4">
                        <img src="assets/img/standard.svg" alt="pricing img" className="img-fluid" />
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                        <div className="h1 text-center mb-0">
                            $<span className="price font-weight-bolder">149</span>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            <li>Push Notifications</li>
                            <li>Data Transfer</li>
                            <li>SQL Database</li>
                            <li>Search &amp; SEO Analytics</li>
                            <li>24/7 Phone Support</li>
                            <li>1 Year technical support</li>
                            <li>50+ profitable keyword</li>
                        </ul>
                        <Link to="#" className="btn solid-btn mb-3" target="_blank">Purchase now</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md">
                    <div className="card text-center single-pricing-pack">
                        <div className="pt-4">
                        <h5>Unlimited</h5>
                        </div>
                        <div className="pricing-img mt-4">
                        <img src="assets/img/unlimited.svg" alt="pricing img" className="img-fluid" />
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                        <div className="h1 text-center mb-0">
                            $<span className="price font-weight-bolder">39</span>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            <li>Push Notifications</li>
                            <li>Data Transfer</li>
                            <li>SQL Database</li>
                            <li>Search &amp; SEO Analytics</li>
                            <li>24/7 Phone Support</li>
                            <li>6 months technical support</li>
                            <li>10+ profitable keyword</li>
                        </ul>
                        <Link to="#" className="btn outline-btn mb-3" target="_blank">Purchase now</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <p className="mb-2">
                    If you need custom services or Need more?
                    <Link to="#" className="color-secondary"> Contact us </Link>
                    </p>
                </div>
                </div>
            </section>
            {/*our pricing packages section end*/}
            {/*testimonial section start*/}
            <section className="testimonial-section ptb-100">
                <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                    <div className="section-heading mb-5">
                        <h2>Testimonials <br /><span>what clients say</span></h2>
                        <p className="lead">
                        Rapidiously morph transparent internal or "organic" sources
                        whereas resource sucking e-business. Conveniently innovate
                        compelling internal.
                        </p>
                        <div className="client-section-wrap d-flex flex-row align-items-center">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                            <img src="assets/img/client-1-color.png" width={85} alt="client" className="img-fluid" />
                            </li>
                            <li className="list-inline-item">
                            <img src="assets/img/client-6-color.png" width={85} alt="client" className="img-fluid" />
                            </li>
                            <li className="list-inline-item">
                            <img src="assets/img/client-3-color.png" width={85} alt="client" className="img-fluid" />
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="
                                owl-carousel owl-theme
                                client-testimonial
                                arrow-indicator
                            ">
                        <div className="item">
                        <div className="testimonial-quote-wrap">
                            <div className="media author-info mb-3">
                            <div className="author-img mr-3">
                                <img src="assets/img/client-1.jpg" alt="client" className="img-fluid rounded-circle" />
                            </div>
                            <div className="media-body">
                                <h5 className="mb-0">John Charles</h5>
                                <span>Google</span>
                            </div>
                            </div>
                            <div className="client-say">
                            <p>
                                <img src="assets/img/quote.png" alt="quote" className="img-fluid" />
                                Interactively optimize fully researched expertise
                                vis-a-vis plug-and-play relationships. Intrinsicly
                                develop viral core competencies for fully tested
                                customer service. Enthusiastically create
                                next-generation growth strategies and.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="testimonial-quote-wrap">
                            <div className="media author-info mb-3">
                            <div className="author-img mr-3">
                                <img src="assets/img/client-2.jpg" alt="client" className="img-fluid rounded-circle" />
                            </div>
                            <div className="media-body">
                                <h5 className="mb-0">Arabella Ora</h5>
                                <span>Amazon</span>
                            </div>
                            </div>
                            <div className="client-say">
                            <p>
                                <img src="assets/img/quote.png" alt="quote" className="img-fluid" />
                                Rapidiously develop user friendly growth strategies
                                after extensive initiatives. Conveniently grow
                                innovative benefits through fully tested deliverables.
                                Rapidiously utilize focused platforms through end-to-end
                                schemas.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="testimonial-quote-wrap">
                            <div className="media author-info mb-3">
                            <div className="author-img mr-3">
                                <img src="assets/img/client-1.jpg" alt="client" className="img-fluid rounded-circle" />
                            </div>
                            <div className="media-body">
                                <h5 className="mb-0">Jeremy Jere</h5>
                                <span>Themetags</span>
                            </div>
                            </div>
                            <div className="client-say">
                            <p>
                                <img src="assets/img/quote.png" alt="quote" className="img-fluid" />
                                Objectively synthesize client-centered e-tailers for
                                maintainable channels. Holisticly administrate customer
                                directed vortals whereas tactical functionalities.
                                Energistically monetize reliable imperatives through
                                client-centric best practices. Collaboratively.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="testimonial-quote-wrap">
                            <div className="media author-info mb-3">
                            <div className="author-img mr-3">
                                <img src="assets/img/client-1.jpg" alt="client" className="img-fluid rounded-circle" />
                            </div>
                            <div className="media-body">
                                <h5 className="mb-0">John Charles</h5>
                                <span>Google</span>
                            </div>
                            </div>
                            <div className="client-say">
                            <p>
                                <img src="assets/img/quote.png" alt="quote" className="img-fluid" />
                                Enthusiastically innovate B2C data without
                                clicks-and-mortar convergence. Monotonectally deliver
                                compelling testing procedures vis-a-vis B2B testing
                                procedures. Competently evisculate integrated resources
                                whereas global processes. Enthusiastically.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*testimonial section end*/}
            {/*screenshots section start*/}
            <section id="screenshots" className="screenshots-section ptb-100 primary-bg">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="section-heading text-center">
                        <h2 className="text-white">
                        App screenshots <br />
                        <span>Looks awesome</span>
                        </h2>
                        <p className="lead">
                        Credibly synthesize multimedia based networks vis-a-vis
                        top-line growth strategies. Continually leverage existing
                        worldwide interfaces
                        </p>
                    </div>
                    </div>
                </div>
                {/*start app screen carousel*/}
                <div className="screen-slider-content mt-5">
                    <div className="screenshot-frame" />
                    <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                    <img src="assets/img/01.png" className="img-fluid" alt="screenshots" />
                    <img src="assets/img/02.png" className="img-fluid" alt="screenshots" />
                    <img src="assets/img/03.png" className="img-fluid" alt="screenshots" />
                    <img src="assets/img/04.png" className="img-fluid" alt="screenshots" />
                    <img src="assets/img/05.png" className="img-fluid" alt="screenshots" />
                    <img src="assets/img/06.png" className="img-fluid" alt="screenshots" />
                    </div>
                </div>
                {/*end app screen carousel*/}
                </div>
            </section>
            {/*screenshots section end*/}
            {/*our team section start*/}
            <section id="team" className="team-member-section ptb-100 gray-light-bg">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                    <div className="section-heading text-center mb-5">
                        <h2>Our team members</h2>
                        <p className="lead">
                        Following reasons show advantages of adding AppCo to your lead
                        pages, demos and checkouts
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member position-relative">
                        <div className="team-image">
                        <img src="assets/img/team-4.jpg" alt="Team Members" className="img-fluid rounded-circle" />
                        </div>
                        <div className="
                                team-info
                                text-white
                                rounded-circle
                                d-flex
                                flex-column
                                align-items-center
                                justify-content-center
                                ">
                        <h5 className="mb-0">Edna Mason</h5>
                        <h6>Senior Designer</h6>
                        <ul className="list-inline team-social social-icon mt-4 text-white">
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-facebook" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-twitter" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-github" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-dribbble" /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member position-relative">
                        <div className="team-image">
                        <img src="assets/img/team-1.jpg" alt="Team Members" className="img-fluid rounded-circle" />
                        </div>
                        <div className="
                                team-info
                                text-white
                                rounded-circle
                                d-flex
                                flex-column
                                align-items-center
                                justify-content-center
                                ">
                        <h5 className="mb-0">Edna Mason</h5>
                        <h6>Senior Designer</h6>
                        <ul className="list-inline team-social social-icon mt-4 text-white">
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-facebook" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-twitter" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-github" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-dribbble" /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member position-relative">
                        <div className="team-image">
                        <img src="assets/img/team-2.jpg" alt="Team Members" className="img-fluid rounded-circle" />
                        </div>
                        <div className="
                                team-info
                                text-white
                                rounded-circle
                                d-flex
                                flex-column
                                align-items-center
                                justify-content-center
                                ">
                        <h5 className="mb-0">Edna Mason</h5>
                        <h6>Senior Designer</h6>
                        <ul className="list-inline team-social social-icon mt-4 text-white">
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-facebook" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-twitter" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-github" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-dribbble" /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                    <div className="single-team-member position-relative">
                        <div className="team-image">
                        <img src="assets/img/team-3.jpg" alt="Team Members" className="img-fluid rounded-circle" />
                        </div>
                        <div className="
                                team-info
                                text-white
                                rounded-circle
                                d-flex
                                flex-column
                                align-items-center
                                justify-content-center
                                ">
                        <h5 className="mb-0">Edna Mason</h5>
                        <h6>Senior Designer</h6>
                        <ul className="list-inline team-social social-icon mt-4 text-white">
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-facebook" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-twitter" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-github" /></Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#"><span className="ti-dribbble" /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*our team section end*/}
            {/*contact us section start*/}
            <section id="contact" className="contact-us gray-light-bg ptb-100">
                <div className="container">
                <div className="row">
                    <div className="col-12 pb-3 message-box d-none">
                    <div className="alert alert-danger" />
                    </div>
                    <div className="col-md-5">
                    <div className="section-heading">
                        <h3>Contact with us</h3>
                        <p>
                        It's very easy to get in touch with us. Just use the contact
                        form or pay us a visit for a coffee at the office. Dynamically
                        innovate competitive technology after an expanded array of
                        leadership.
                        </p>
                    </div>
                    <div className="footer-address">
                        <h6><strong>Head Office</strong></h6>
                        <p>121 King St, Melbourne VIC 3000, Australia</p>
                        <ul>
                        <li><span>Phone: +61 2 8376 6284</span></li>
                        <li>
                            <span>Email :
                            <Link to="mailto:hello@yourdomain.com">hello@yourdomain.com</Link></span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <form action="#" method="POST" id="contactForm" className="contact-us-form" noValidate="novalidate">
                        <h5>Reach us quickly</h5>
                        <div className="row">
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter name" required="required" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" required="required" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                            <input type="text" name="phone" defaultValue className="form-control" id="phone" placeholder="Your Phone" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                            <input type="text" name="company" defaultValue size={40} className="form-control" id="company" placeholder="Your Company" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                            <textarea name="message" id="message" className="form-control" rows={7} cols={25} placeholder="Message" defaultValue={""} />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 mt-3">
                            <button type="submit" className="btn solid-btn" id="btnContactUs">
                            Send Message
                            </button>
                        </div>
                        </div>
                    </form>
                    <p className="form-message" />
                    </div>
                </div>
                </div>
            </section>
            {/*contact us section end*/}
            {/*client section start*/}
            <section className="client-section ptb-100">
                <div className="container">
                {/*clients logo start*/}
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="section-heading text-center mb-5">
                        <h2>Trusted by companies</h2>
                        <p className="lead">
                        Rapidiously morph transparent internal or "organic" sources
                        whereas resource sucking e-business. Conveniently innovate
                        compelling internal.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12">
                    <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                        <div className="item single-client">
                        <img src="assets/img/client-5-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-1-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-6-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-3-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-4-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-5-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-7-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-2-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-1-color.png" alt="client logo" className="client-img" />
                        </div>
                        <div className="item single-client">
                        <img src="assets/img/client-3-color.png" alt="client logo" className="client-img" />
                        </div>
                    </div>
                    </div>
                </div>
                {/*clients logo end*/}
                </div>
            </section>
            {/*client section start*/}
            </div>

         );
}
 
export default Home;

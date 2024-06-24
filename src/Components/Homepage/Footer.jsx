import React from 'react';
import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="footer section" style={{ width: "100%", height: "100px" }}>
      <div className="phinstagram-logo-parent">
        <a className="phinstagram-logo" href="https://www.instagram.com/" target="_blank">
          <img className="vector-icon1" alt="" src="https://framestrapimaster.blob.core.windows.net/assets/images/Instagram_88847d8ba3_d534f2d78f_e44245455c.svg" />
        </a>
        <a className="phinstagram-logo" href="https://www.facebook.com/" target="_blank">
          <img className="vector-icon2" alt="" src="https://framestrapimaster.blob.core.windows.net/assets/images/Facebook_0ddadaef3b_ea343675c7_1d547c29f0.svg" />
        </a>
        <a className="phinstagram-logo" href="https://www.youtube.com/" target="_blank">
          <img className="vector-icon3" alt="" src="https://framestrapimaster.blob.core.windows.net/assets/images/Youtube_9cc9f992ab_ad97908e18_fcde6cdecc.svg" />
        </a>
        <a className="phinstagram-logo" href="https://twitter.com/?lang=en/" target="_blank">
          <img className="vector-icon3" alt="" src="https://framestrapimaster.blob.core.windows.net/assets/images/Twitter_44f3c5fb21_8a3f98290d_3b4928c432.svg" />
        </a>
      </div>
      <div className="footer-child" />
      <div className="popular-category">
        <div className="popular-categories">Popular Categories</div>
        <div className="fruits-vegetables-container">
          <p className="fruits-vegetables justify-text">{`Fruits & Vegetables`}</p>
          <p className="fruits-vegetables justify-text">{`Dairy & Breakfasts`}</p>
          <p className="fruits-vegetables justify-text">{`Egg, Meat & Fish`}</p>
          <p className="fruits-vegetables justify-text">{`Bath & Body`}</p>
          <p className="fruits-vegetables justify-text">{`Cold drinks & Juices`}</p>
          <p className="fruits-vegetables justify-text">{`Snacks & Munchies`}</p>
        </div>
        <div className="popular-category-child" />
      </div>
      <div className="services">
        <div className="popular-categories">Customer Services</div>
        <div className="fruits-vegetables-container">
          <p className="fruits-vegetables justify-text">About Us</p>
          <p className="fruits-vegetables justify-text">{`Terms & Conditions`}</p>
          <p className="fruits-vegetables justify-text">FAQ</p>
          <p className="fruits-vegetables justify-text">Privacy Policy</p>
          <p className="fruits-vegetables justify-text">E-waste Policy</p>
          <p className="fruits-vegetables justify-text">{`Cancellation & Return Policy`}</p>
        </div>
        <div className="services-child" />
      </div>
      <div className="contact-us">
        <div className="contact-us1">Contact Us</div>
        <div className="parent">
          <div className="div3">+254 795 616 335</div>
          <div className="whats-app">Whats App</div>
          <img className="ant-designwhats-app-outlined-icon" alt="" src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png" />
        </div>
        <div className="group">
          <div className="div4">+254 795 616 335</div>
          <div className="call-us">Call Us</div>
          <img className="ant-designwhats-app-outlined-icon" alt="" src="https://cdn.pixabay.com/photo/2017/11/10/05/05/whatsapp-2935415_1280.png" />
        </div>
      </div>
      <div className="all-rights-reserved">© 2024 GoldworthSupermarket All rights reserved</div>
      <div className="back-to-top" onClick={handleScrollToTop}> Back to the Top </div>
    </section>
  );
};

export default Footer;
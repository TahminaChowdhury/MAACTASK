import React from 'react';
import './HeroSection.css';
import tablet1 from '../../../images/tablet 1.png';
import phone1 from '../../../images/phone 1.png';

const HeroSection = () => {
  return (
    <>
      <div className="row text-center">
        {/* Heading */}
        <div className="col-12">
          <div>
            <h1 className="heading my-5">
              Analytics that transform your <br /> product inside-out
            </h1>
          </div>

          {/* Demo button div */}
          <div className="col-12 my-5">
            <div className="d-flex justify-content-center">
              <button className="demo-btn me-2">Request for Demo</button>
              <button className="download-btn ms-2">Download</button>
            </div>
          </div>

          {/* Demo image */}
          <div className="col-12 text-center">
            <div className="tablet-img-div">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

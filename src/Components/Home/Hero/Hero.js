import React from 'react';
import './Hero.css';
import tablet from '../../../images/tablet 1.png';
import phone1 from '../../../images/phone 1.png';
import img from '../../../images/Group 33984.png';
import phone2 from '../../../images/Central phone 2.png';

const HeroSection = () => {
  return (
    <>
      <div className="row hero-container">
        {/* Heading */}
        <div className="col-12 heading-section">
          <div>
            <h1 className="heading text-center">
              Analytics that transform your <br /> product inside-out
            </h1>
          </div>

          {/* Demo buttons */}
          <div className="col-12 my-5">
            <div className="d-flex justify-content-center">
              <button className="demo-btn me-2">Request for Demo</button>
              <button className="download-btn ms-2">Download</button>
            </div>
          </div>

          {/* Demo image */}
          <div className="col-12 d-flex justify-content-center">
            <div className="img-container text-center">
              <img src={tablet} alt="" />
              <div>
                <img src={phone1} className="phone-img" alt="" />
              </div>
              <div className="img-bg"></div>
            </div>
          </div>
        </div>

        {/* Product features */}
        <div className="col-12 product-features-section">
          <div className="product-features-container">
            <div className="row text-center">
              <span className="product-features-subtitle">
                Products Features
              </span>
              <h1 style={{ marginBottom: '100px' }}>
                Make more out of your data
              </h1>

              {/* Product Features */}
              <div className="col-sm-12 col-md-3">
                <div className="text-end">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h3>Real-time analytics</h3>
                  <p>
                    See product usage, sign-ins, feature <br /> metrics change
                    as users work on your.
                  </p>
                </div>
                <div className="text-end" style={{ margin: '140px 0px' }}>
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h3>Intuitive dashboard</h3>
                  <p>
                    See product usage, sign-ins, feature <br /> metrics change
                    as users work on your.
                  </p>
                </div>
                <div className="text-end">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h3>Smart suggestions</h3>
                  <p>
                    See product usage, sign-ins, feature <br /> metrics change
                    as users work on your.
                  </p>
                </div>
              </div>

              {/* Phone image */}
              <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center ">
                <div className="central-phone-bg">
                  <img src={phone2} className="img-fluid" alt="" />
                  <div className="phone-img-bg"></div>
                </div>
              </div>

              {/* Product features */}
              <div className="col-sm-12 col-md-3">
                <div className="text-start">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h3>Multiple views</h3>
                  <p className="text-start">
                    See product usage, sign-ins, feature <br /> metrics change
                    as users work on your.
                  </p>
                </div>
                <div className="text-start" style={{ margin: '140px 0px' }}>
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h3>AI-led diagnoses</h3>
                  <p className="text-start">
                    See product usage, sign-ins, feature <br /> metrics change
                    as users work on your.
                  </p>
                </div>
                <div className="text-start">
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <h3>Responsive</h3>
                  <p className="text-start">
                    See product usage, sign-ins, feature <br /> metrics change
                    as users work on your.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

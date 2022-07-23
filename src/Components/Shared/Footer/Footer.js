import React from 'react';
import './Footer.css';
import fieldX from '../../../images/FieldX.png';
import twitter from '../../../images/013-twitter.png';
import linkedIn from '../../../images/Vector (1).png';
import facebook from '../../../images/Vector.png';

const Footer = () => {
  return (
    <div className="footer-container pt-5">
      <div>
        <img src={fieldX} alt="" />
      </div>
      <div className="py-4">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />{' '}
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </p>
      </div>
      <div className="social-icon-div pb-5">
        <div>
          <img src={twitter} alt="" />
        </div>
        <div className="mx-5">
          <img src={linkedIn} alt="" />
        </div>
        <div>
          <img src={facebook} alt="" />
        </div>
      </div>
      <hr />
      <div className="py-4">
        <p>
          © All rights reserve by <span style={{ color: '#F60E0E' }}>MAAC</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

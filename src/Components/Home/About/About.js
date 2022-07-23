import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import './About.css';
import img1 from '../../../images/Pre order vs delivery 1.png';
import img2 from '../../../images/Top Selling Routes 1.png';
import img3 from '../../../images/Group 34025.png';
import img4 from '../../../images/Ellipse 1.png';
import mobile from '../../../images/monitor-mobbile.png';
import people from '../../../images/people.png';
import user from '../../../images/user.png';
import cup from '../../../images/cup.png';

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="bg-color d-flex justify-content-center align-items-center">
              <div className="images-bg d-flex justify-content-center">
                <div className="pre-order-img-div">
                  <img src={img1} alt="" />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: '120px' }}
                >
                  <div>
                    <img src={img2} alt="" />
                  </div>
                  <div>
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About info*/}
          <div className="col-sm-12 col-md-6">
            <div className="text-start about-info-div">
              <p className="about-subtitle">About us</p>
              <h1 className="about-title">
                A dedicated solution for startups and enterprises
              </h1>
              <p className="">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div
              className="d-flex justify-content-center my-5"
              style={{ borderTop: '1px solid black' }}
            >
              <div className="mt-5">
                <img src={img4} alt="" />
              </div>
              <div className="ms-5 mt-5">
                <p style={{ fontSize: '22px', fontWeight: '500' }}>
                  "Fieldx is for teams that care about their product growth."
                </p>
                <p style={{ fontSize: '22px', fontWeight: '700' }}>
                  CEO, FieldX
                </p>
              </div>
            </div>
          </div>

          {/* Countup*/}
          <div className="col-12" style={{ marginTop: '150px' }}>
            <div className="row text-center countup">
              <div className="col-3">
                <img src={mobile} alt="" />
                <h1 className="my-2">10+</h1>
                <p>Platforms Created</p>
              </div>
              <div className="col-3">
                <img src={people} alt="" />
                <h1 className="my-2">1559+</h1>
                <p>Total Users</p>
              </div>
              <div className="col-3">
                <img src={user} alt="" />
                <h1 className="my-2">10+</h1>
                <p>Total Clients</p>
              </div>
              <div className="col-3">
                <img src={cup} alt="" />
                <h1 className="my-2">300 Days</h1>
                <p>In Operations</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

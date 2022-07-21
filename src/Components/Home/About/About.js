import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import './About.css';
import img1 from '../../../images/monitor-mobbile.png';
import img2 from '../../../images/people.png';
import img3 from '../../../images/user.png';
import img4 from '../../../images/cup.png';

const About = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-sm-12 col-md-6"></div>

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
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
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
          <div className="col-12 my-5 py-5">
            <div className="row text-center countup">
              <div className="col-3">
                <img src={img1} alt="" />
                <h1 className="my-2">10+</h1>
                <p>Platforms Created</p>
              </div>
              <div className="col-3">
                <img src={img2} alt="" />
                <h1 className="my-2">1559+</h1>
                <p>Total Users</p>
              </div>
              <div className="col-3">
                <img src={img3} alt="" />
                <h1 className="my-2">10+</h1>
                <p>Total Clients</p>
              </div>
              <div className="col-3">
                <img src={img4} alt="" />
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

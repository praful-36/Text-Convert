import React from 'react';
import insta from "../img/insta.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github-logo.png"

const Footer = () => {
  return (
    <>
      <footer className="bg-body-tertiary text-center footer">
        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a href="https://www.instagram.com/prafulgosavi1" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} role="button" target="_blank" rel="noopener noreferrer" alt="insta">
              <img src={insta} alt="" width={30}/>
            </a>
            <a href="https://www.linkedin.com/in/praful-gosavi-38b012280" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} role="button" target="_blank" rel="noopener noreferrer" alt="linkedin">
              <img src={linkedin} alt="" width={30}/>
            </a>
            <a href="https://github.com/praful-36" className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} role="button" target="_blank" rel="noopener noreferrer" alt="github">
              <img src={github} alt="" width={30}/>
            </a>

          </section>

        </div>

        <div className="text-centerp-3" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
          ©2024Copyright <a className="text-body" href="/" style={{ textDecoration: 'none' }}>TextConverter</a>
        </div>

      </footer>
    </>
  );
};

export default Footer;



import React from 'react';

const About = () => {
  return (
    <div className="container mt-5 py-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="p-4 border rounded bg-light">
            <h1>About Text Converter App</h1>
            <p>
              Welcome to the Text Converter App! This app allows you to easily manipulate text in various ways. Here are the key features:
            </p>
            <ul>
              <li>Convert text to uppercase.</li>
              <li>Convert text to lowercase.</li>
              <li>Capitalize each word in the text.</li>
              <li>Convert text to sentence case.</li>
              <li>Copy the converted text with a single click.</li>
              <li>Display the number of words and characters in the text.</li>
            </ul>
            <p>
              This application was built using React, a powerful JavaScript library for building user interfaces, and Bootstrap, a popular CSS framework, to ensure a responsive and visually appealing design.
            </p>
            <p>
              Motivation: The idea behind this app was to create a simple yet effective tool that helps with everyday text manipulation tasks. Whether you are writing an email, creating a document, or just playing around with text, this app aims to make your life easier.
            </p>
            <p>
              We hope you find this app useful and enjoy using it as much as we enjoyed creating it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

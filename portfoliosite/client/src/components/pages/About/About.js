import React from "react";

const About = props => (
  <div>
    <h1>About Page</h1>
    <h2>Web development knowledge overview</h2>
    <p>
      I am a full-stack web developer currently based in Raleigh, NC.
      I work at <a href="https://www.kadro.com/" target="_blank">Kadro Solutions</a>, where I help build e-Commerce sites using the Magento 2 framework.
      There, I mostly write code in PHP and JavaScript. I need to be able to use MySQL on a regular basis.
    </p>
    <p>
      Outside of work, I have attended a web development bootcamp in Raleigh by Trilogy Education Services.
      There, I mostly learned how to write React JS apps. I became familiar with the MERN stack (Mongoose, Express, React, Node JS).
      I also learned how to use Sequelize and deploy a React JS site to Heroku.
    </p>
    <h2>Education</h2>
    <ul>
        <li>North Carolina State University</li>
        <ul>
            <li>BS. in Applied Mathematics &amp; Statistics</li>
            <li>Took several Computer Science major courses</li>
        </ul>
    </ul>
  </div>
);

export default About;

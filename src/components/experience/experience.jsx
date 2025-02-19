import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="experience-title">Experience</h2>
 

        <div className="job">
          <h4>AIR Intern</h4>
          <p>All India Radio | Oct 2020 – Dec 2020 | Hyderabad, India</p>
          <ul>
          <ul>
          <ul>
  <li>Trained in Server Administration Work which involves configuring and maintaining servers.</li>
  <li>Trained in SQL Administration which involves monitoring performance, conducting diagnostic tests, troubleshooting database issues and other upgrades.</li>
</ul>


</ul>

          </ul>
        </div>

        <div className="job">
          <h4>Master Thesis on Requirement Identification and Classification on User Feedback in Swedish from Tweets</h4>
          <p>Telia | Jan 2022 – Jan 2023 | Karlskrona, Sweden</p>
          <ul>
            <li>Built a NLP-integrated machine learning model that can identify requirements from the feedback given by users in the form of tweets. The challenge was to build a model that can understand and analyze the multilingual data with Swedish and English in it and classify. We processed a set of manually-labeled tweets in the training phase.</li>
            <li>The model also classifies the user feedback on what the application lacks and add-on features that could enhance the usage of the application.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Accenture North America Data Analytics and Visualization Job Simulation on Forage</h4>
          <p>Accenture | Sept 2024 – Oct 2024 | Hyderabad, India</p>
          <ul>
            <li>Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture.</li>
            <li>Cleaned, modeled, and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions.</li>
            <li>Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Web Dev Intern</h4>
          <p>Hezemon Solutions | March 2020 – Aug 2020 | Hyderabad, India</p>
          <ul>
            <li>Developed a project "Corporate Leave Management" using various programming languages.</li>
          </ul>
        </div>
      
    </section>
  );
};

export default Experience;

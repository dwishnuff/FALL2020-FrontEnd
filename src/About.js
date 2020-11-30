/*
  Renders information about the data
  and API calls. 

  Called in Grid.js.
*/

import React from "react";
import "./App.css";

function About() {
  return (
    <div>
      <p>Data is specific to PSU Undergraduates.</p>
      <ul>
        <li>PSU CS Grad Class by Legal Sex % -- OIRP</li>
        <li>PSU CS Grad Class by Legal Sex # -- OIRP</li>
        <li>PSU CS Grad by Ethnicity -- OIRP</li>
        <li>PSU CS Persistence -- OIRP</li>
        <li>
          PSU Ungergrads Graduated within 6 Years -- IPEDS
          <ul>
            <li>Legal Sex as a % of students who graduated within 6 years</li>
          </ul>
        </li>
      </ul>
      <p>*OIRP is data provided by PSU Office of Institutional Research and Planning</p>
      <p>*IPEDS is data pulled from the Integrated Post-Secondary Education Data System API</p>
    </div>
  );
}

export default About;

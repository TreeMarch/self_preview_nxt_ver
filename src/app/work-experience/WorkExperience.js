import React from "react";

function WorkExperience() {
  return (
    <div>
      <div className="work-experience">
        <h2 className="resume-work-experience">Work Experience</h2>
        <div className="detail-w-e">
          <div className="project">
            <div className="top-detail-project">
              <div className="role-locate">
                <p className="role">Technician - Group Project</p>
                <p className="location">Remote</p>
                <div>
                  <p className="time">Jul 2024 - Aug 2024</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="project-role">
                    <span className="company">fairy-tails - group project</span>
                    <span>(Techician)</span>
                  </p>
                </div>
                <p className="work-des">
                  Developed a full-stack project focusing on backend architecture 
                  where user story inputs are processed through the ChatGPT API. 
                  Implemented RESTful APIs, database schema design, and data 
                  management using PHP Laravel framework. Managed MySQL database 
                  operations, API integrations, and server-side logic for story 
                  generation and user content management.
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="top-detail-project">
              <div className="role-locate">
                <p className="role">Intern</p>
                <p className="location">Hanoi, Vietnam</p>
                <div>
                  <p className="time">Dec 2024 - Apr 2025</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="project-role">
                    <span className="company">
                      mitu technology joint stock company
                    </span>
                    <span>(Intern)</span>
                  </p>
                </div>
                <p className="work-des">
                  Contributed to backend development of real-world projects, 
                  working with modern server-side technologies. Developed RESTful 
                  APIs, implemented database interactions with PostgreSQL, and 
                  handled server-side logic. Gained experience in API design, 
                  database optimization, and backend architecture patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="top-detail-project">
              <div className="role-locate">
                <p className="role">Development Team Leader</p>
                <p className="location">Remote</p>
                <div>
                  <p className="time">Dec 2024 - Dec 2024</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="project-role">
                    <span className="company">l4gashn - group project</span>
                    <span>.</span>
                    <span>Development Team Leader</span>
                  </p>
                </div>
                <p className="work-des">
                  Developed the backend system for a gas station management application 
                  for Hanoi in collaboration with team members. Built RESTful APIs using 
                  Node.js and Express.js, designed PostgreSQL database schema, and 
                  implemented server-side features for CRUD operations, location-based 
                  search, and route calculation. Contributed to API endpoints for mobile 
                  and web client integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;

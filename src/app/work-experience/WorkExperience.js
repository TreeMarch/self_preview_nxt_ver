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
                <p className="role">Frontend Intern</p>
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
                    <span>.</span>
                    <span>Intern</span>
                  </p>
                </div>
                <p className="work-des">
                  Participated in real-world projects, working with modern
                  technologies such as React and TypeScript. Contributed to the
                  development of front-end features using Tailwindcss and
                  PostgreSQL.
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="top-detail-project">
              <div className="role-locate">
                <p className="role">Technician</p>
                <p className="location">Remote</p>
                <div>
                  <p className="time">Jul 2024 - Aug 2024</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="project-role">
                    <span className="company">fairy-tails - group project</span>
                    <span>.</span>
                    <span>Technician</span>
                  </p>
                </div>
                <p className="work-des">
                  Developed a web application for creating and managing stories
                  using ChatGPT. Utilized PHP Laravel, JavaScript, Bootstrap,
                  Yarn, and MySQL. Implemented features for user information
                  CRUD operations.
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
                  Led the development of a web application for managing gas
                  stations in Hanoi. Utilized Node.js, Tailwindcss, PostgreSQL,
                  and ExpressJS. Implemented features for CRUD operations,
                  search, and directions to gas stations.
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

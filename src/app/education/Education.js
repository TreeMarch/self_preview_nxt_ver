import React from "react";

const Education = () => {
  return (
    <div>
      <div className="education-section">
        <h2 className="resume-education">Education</h2>
        <div>
          <article>
            <div className="top-edu-section">
              <div className="place-time">
                <div className="edu-detail">
                  <h3>FPT Aptech</h3>
                  <div className="edu-time">2023 - Present</div>
                </div>
              </div>
            </div>
          </article>
          <div className="edu-des">ADSE Program - FullStack Programming</div>
        </div>
        <div>
          <article>
            <div className="top-edu-section">
              <div className="place-time">
                <div className="edu-detail">
                  <h3>HANOI UNIVERSITY OF MINING AND GEOLOGY</h3>
                  <div className="edu-time">2021 - Present</div>
                </div>
              </div>
            </div>
          </article>
          <div className="edu-des">
            Geographic Information Technology - GPA: 3.1/4.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

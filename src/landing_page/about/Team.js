import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-4 mt-4 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img
            src="/media/images/nitin.jpeg"
            alt="Nitin Yadav"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "280px", width: "100%" }}
          />
          <h4 className="mt-4 text-dark">Nitin Yadav</h4>
          <p>Computer Science Engineering Student</p>
        </div>

        <div className="col-12 col-md-7">
          <p>
            Nitin Yadav is a Computer Science Engineering student at Ajay Kumar
            Garg Engineering College, passionate about software development,
            problem-solving, and emerging technologies.
          </p>

          <p>
            He is building his skills in Java, Data Structures and Algorithms,
            and full-stack web development using the MERN stack. He enjoys
            turning ideas into practical applications and exploring how
            technology can solve real-world problems.
          </p>

          <p>
            His current focus is on strengthening his development skills,
            building impactful projects, and exploring the intersection of
            software engineering and Artificial Intelligence.
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/nitin-yadav-755482253/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none me-3"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nitinyadav2058-ai"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

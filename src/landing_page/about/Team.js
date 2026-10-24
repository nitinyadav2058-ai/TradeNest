import React from "react";

const Team = () => {
  return (
    <section className="container py-5">
      {/* Section Heading */}
      <div className="row justify-content-center text-center border-top pt-5 mb-5">
        <div className="col-12">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
            THE PEOPLE BEHIND THE WORK
          </span>

          <h1 className="display-5 fw-semibold text-dark mb-3">
            Meet the <span className="text-primary">People</span>
          </h1>

          <p className="text-secondary fs-5 mb-0">
            Passion, curiosity, and technology come together.
          </p>
        </div>
      </div>

      {/* Profile */}
      <div className="row justify-content-center align-items-center g-4 g-lg-5">
        {/* Profile Image */}
        <div className="col-12 col-md-5 text-center">
          <div className="bg-light rounded-4 p-4 p-md-5">
            <img
              src="/media/images/nitin.jpeg"
              alt="Nitin Yadav"
              className="img-fluid rounded-circle border border-4 border-white shadow"
              style={{
                width: "100%",
                maxWidth: "260px",
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />

            <h2 className="h3 fw-semibold text-dark mt-4 mb-2">Nitin Yadav</h2>

            <p className="text-secondary mb-3">
              Computer Science Engineering Student
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-2">
              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2">
                Java
              </span>
              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2">
                DSA
              </span>
              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2">
                MERN Stack
              </span>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="col-12 col-md-7">
          <div className="p-2 p-md-4">
            <h3 className="h4 fw-semibold text-dark mb-4">About Me</h3>

            <p className="text-secondary lh-lg mb-4">
              Nitin Yadav is a Computer Science Engineering student at Ajay
              Kumar Garg Engineering College, passionate about software
              development, problem-solving, and emerging technologies.
            </p>

            <p className="text-secondary lh-lg mb-4">
              He is building his skills in Java, Data Structures and Algorithms,
              and full-stack web development using the MERN stack. He enjoys
              turning ideas into practical applications and exploring how
              technology can solve real-world problems.
            </p>

            <p className="text-secondary lh-lg mb-4">
              His current focus is on strengthening his development skills,
              building impactful projects, and exploring the intersection of
              software engineering and Artificial Intelligence.
            </p>

            {/* Social Links */}
            <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/nitin-yadav-755482253/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/nitinyadav2058-ai"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark px-4 py-2 rounded-pill"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

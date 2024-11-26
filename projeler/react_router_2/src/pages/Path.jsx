import React from "react";
import Courses from "../components/Courses";
import { Outlet, useNavigate } from "react-router-dom";

const Path = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-3">
      <h1 className="display-3">
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>
      <p className="display-6 fs-5 text-danger fw-3">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div className="d-flex gap-3 justify-content-center">
        <button onClick={() => navigate("")} className="btn btn-success w-50">
          FS
        </button>
        <button
          onClick={() => navigate("/paths/aws")}
          className="btn btn-warning w-50"
        >
          AWS
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Path;

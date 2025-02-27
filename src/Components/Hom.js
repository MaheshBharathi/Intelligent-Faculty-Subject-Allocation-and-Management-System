import React from "react";
import "./Hom.css";
import { Link, Outlet } from "react-router-dom";
function Hom() {
  return (
    <div>
      <div className="hom1">
        <h1 className="ho1">
          Intelligent Faculty Subject Allogation in Management System
        </h1>
      </div>
      <div className="u">
        <div className="hom4">
          <nav>
            <Link to="/aboutus">About Us</Link>
          </nav>
        </div>
        <div className="hom5">
          <nav>
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </div>
        <div className="hom6">
          <nav>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </div>
        <div className="hom7">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div className="hom8">
          <nav>
            <Link to="/coursedetails">Course Details</Link>
          </nav>
        </div>
        <div className="hom9">
          <nav>
            <Link to="/me">ME</Link>
          </nav>
        </div>
        <div className="hom10">
          <nav>
            <Link to="/mtech">MTech</Link>
          </nav>
        </div>
        <div className="hom11">
          <nav>
            <Link to="/phd">Phd</Link>
          </nav>
        </div>
      </div>
      <Outlet />

      <div className="hom2">
        <div className="hom3">
          <h1 className="ho1">Description</h1>
          <h3 className="ho2">
            The Faculty Subject Allocation System automates the process of
            assigning subjects to faculty members based on their expertise,
            availability, and maximum teaching capacity.
          </h3>
          <h3 className="ho2">
            In this system educational administrator allocate different subjects
            to the teacher and teacher check that allotment by their employee id
            and Name.
          </h3>
          {/* <h3 className="ho2">
            The Intelligent Faculty Subject Allocation and Management System
            optimizes subject assignments by analyzing faculty qualifications,
            preferences, and department needs.
          </h3> */}
        </div>
      </div>
    </div>
  );
}
export default Hom;

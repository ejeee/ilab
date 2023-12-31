import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 loginform">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  <span>Email or username</span>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <span>Password</span>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-dark w-100">Login</button>
                </div>
              </div>
              <div className="success-data">
                <div className="text-center d-flex flex-column">
                  <i className='bx bxs-badge-check'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
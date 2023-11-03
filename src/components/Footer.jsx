import ilab from "../components/img/logo-ilab.png";
import facebook from "../components/img/logo-facebook.png";
import twitter from "../components/img/logo-twitter.png";
import instagram from "../components/img/logo-instagram.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
            <div className="col mb-3">
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <img
                  src={ilab}
                  alt="iLab"
                  style={{ marginTop: "3rem", marginLeft: "3rem" }}
                />
              </a>
              <p
                className="d-inline"
                style={{ marginLeft: "2rem", opacity: 0.5 }}
              >
                {" "}
                &copy; 2023 Marchanda B
              </p>
            </div>
            {/* Spacing */}
            <div className="col mb-3"></div>
            {/* Spacing End */}
            <div className="col mb-3">
              <h5 className="mb-3" style={{ opacity: 0.25 }}>
                Service
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Email Marketing
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Campaigns
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Branding
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Offline
                  </a>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5 className="mb-3" style={{ opacity: 0.25 }}>
                About
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Our Story
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Benefits
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary fw-bold"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5 style={{ opacity: 0.25 }}>Follow Us</h5>
              <div className="row">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <img
                      src={facebook}
                      alt="Facebook"
                      width="16"
                      style={{ margin: "14px" }}
                    />{" "}
                    Facebook{" "}
                    <a
                      href="#"
                      className="nav-link p-0 text-body-secondary fw-semibold"
                    ></a>
                  </li>
                  <li className="nav-item mb-2">
                    <img
                      src={twitter}
                      alt="Twitter"
                      width="23"
                      style={{ margin: "11px" }}
                    />{" "}
                    Twitter{" "}
                    <a
                      href="#"
                      className="nav-link p-0 text-body-secondary fw-semibold"
                    ></a>
                  </li>
                  <li className="nav-item mb-2">
                    <img
                      src={instagram}
                      alt="Instagram"
                      width="23"
                      style={{ margin: "11px" }}
                    />{" "}
                    Instagram{" "}
                    <a
                      href="#"
                      className="nav-link p-0 text-body-secondary fw-semibold"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default Footer;

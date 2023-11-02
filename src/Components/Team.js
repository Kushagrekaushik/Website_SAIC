import React from "react";
import AGPImage from "./AG(P).jpg";
import SAPImage from "./SA(P).jpg";
import JNPImage from "./JN(VP).jpg";
import MSPImage from "./MS(VP).jpg";
import ARPImage from "./AR(VP).jpg";
import MNS from "./MNS.jpg";
import "./team.css";

function Team(props) {
  return (
    <div style={{
      background: "linear-gradient(45deg, transparent 50%, #110011 98%), linear-gradient(-45deg, transparent 50%, #FF0000 80%)",
    }} >
      <h1
        style={{
          marginLeft: "20px",
          paddingTop: "40px",
          color: "red",
          fontFamily: "cursive",
          textAlign: "center", 
        }}
      >
        <span style={{color:"black",fontWeight:"bolder"}}>Team</span> SAIC
        <br />
      </h1>
      <div className="container">
        <div className="row justify-content-center">
       
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="container">
              <div className="card-wrapper">
                <div className="card">
                <div className="card-image" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={MNS}
                      alt="Mansi Mam"
                    />
                  </div>
                  <div className="details">
                    <h2>
                      Mansi Bhargava
                      <br></br>
                      <span className="job-title">Faculty    <a href="https://www.linkedin.com/in/mansi-bhargava-34341128/">
                    <i className="fa-brands fa-linkedin"></i>   
                  </a></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <div className="container">
              <div className="card-wrapper">
                <div className="card">
                <div className="card-image" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={AGPImage}
                      alt="AG"
                    />
                  </div>
                  <div className="details">
                    <h2>
                      Aditya Garg
                      <br></br>
                      <span className="job-title">President  <a href="https://www.linkedin.com/in/aditya-garg-3262a320a/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="container">
              <div className="card-wrapper">
                <div className="card">
                <div className="card-image" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={SAPImage}
                      alt="SA"
                    />
                  </div>
                  <div className="details">
                    <h2>
                      Saksham
                      <br></br>
                      <span className="job-title">President  <a href="https://www.linkedin.com/in/saksham-arora-88b107147/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="container">
              <div className="card-wrapper">
                <div className="card">
                <div className="card-image" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={ARPImage}
                      alt="Arushi"
                    />
                  </div>
                  <div className="details">
                    <h2>
                        Arushi
                      <br></br>
                      <span className="job-title">Vice-President<a href="https://www.linkedin.com/in/arushi-898a82211/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="container">
              <div className="card-wrapper">
                <div className="card">
                <div className="card-image" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={JNPImage}
                      alt="JAtin NArula"
                    />
                  </div>
                  <div className="details">
                    <h2>
                      Jatin Narula
                      <br></br>
                      <span className="job-title">Vice-President  <a href="https://www.linkedin.com/in/jatin-narula-0aa677202/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-center">
          <div className="container">
              <div className="card-wrapper">
                <div className="card">
                <div className="card-image" style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={MSPImage}
                      alt="Manav"
                    />
                  </div>
                  <div className="details">
                    <h2>
                        Manav
                      <br></br>
                      <span className="job-title">Vice-President <a href="https://www.linkedin.com/in/manav-singla-2521051a8/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a></span>
                    </h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Team;

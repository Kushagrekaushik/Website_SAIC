import React from "react";
import AGPImage from "../images/Team/AG(P).jpg";
import SAPImage from "../images/Team/SA(P).jpg";
import JNPImage from "../images/Team/JN(VP).jpg";
import MSPImage from "../images/Team/MS(VP).jpg";
import ARPImage from "../images/Team/AR(VP).jpg";
import MNS from "../images/Team/MNS.jpg";
import "./team.css";

const Team = () => {
  return (
      <div className="body-team">
          <div className="box-team">
              <div className="card-team">
                  <div className="imgBx">
                      <img src="https://imagizer.imageshack.com/img923/8481/t97CRa.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Director</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                      {/* <img src={AGPImage} alt="Images" /> */}
                      <img src="https://imagizer.imageshack.com/img922/165/Xl5sEC.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Director</span></h2>
                  </div>
              </div>

              <div className="card-team">
                  <div className="imgBx">
                  <img src="https://imagizer.imageshack.com/img923/6327/v6akp2.jpg" alt="Images" />
                  {/* <img src={SAPImage} alt="Images" /> */}
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Producer</span></h2>
                  </div>
              </div>

              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={JNPImage} alt="Images" />
                   */}
                   <img src="https://imagizer.imageshack.com/img922/6380/xu2j2F.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Actor</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={MSPImage} alt="Images" />
                   */}
                   <img src="https://imagizer.imageshack.com/img924/2820/McRjdR.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Actor</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={ARPImage} alt="Images" /> */}
                  <img src="https://imagizer.imageshack.com/img923/1272/xiQOsp.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Actor</span></h2>
                  </div>
              </div>


          </div>
      </div>
  );
}
export default Team;
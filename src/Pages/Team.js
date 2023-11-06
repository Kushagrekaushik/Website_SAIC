import React from "react";
import "./team.css";

const Team = () => {
  return (
      <div className="body-team">
          <div className="box-team">
              <div className="card-team">
                  <div className="imgBx">
                      <img src="https://imagizer.imageshack.com/img923/603/iBJBoV.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>Mansi Bhargava<br /><span>Faculty Advisor</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                      {/* <img src={AGPImage} alt="Images" /> */}
                      <img src="https://imagizer.imageshack.com/img924/7956/CjgnSx.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>Aditya Garg<br /><span>President</span></h2>
                  </div>
              </div>

              <div className="card-team">
                  <div className="imgBx">
                  <img src="https://imagizer.imageshack.com/img923/2889/nHXwpR.jpg" alt="Images" />
                  {/* <img src={SAPImage} alt="Images" /> */}
                  </div>
                  <div className="details">
                      <h2>Saksham Arora<br /><span>President</span></h2>
                  </div>
              </div>

              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={JNPImage} alt="Images" />
                   */}
                   <img src="https://imagizer.imageshack.com/img923/4315/dVfRio.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>Jatin Narula<br /><span>Vice-President</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={MSPImage} alt="Images" />
                   */}
                   <img src="https://imagizer.imageshack.com/img922/4326/PZ6vxq.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>Arushi<br /><span>Vice-President</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={ARPImage} alt="Images" /> */}
                  {/* <img src="https://imagizer.imageshack.com/img923/1272/xiQOsp.jpg" alt="Images" /> */}
                  <img src="https://imagizer.imageshack.com/img922/7936/CTjH4S.png" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>Manav Singla <br /><span>Vice-President</span></h2>
                  </div>
              </div>


          </div>
      </div>
  );
}
export default Team;
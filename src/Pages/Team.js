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
                      <h2>SomeOne Famous<br /><span>Director</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                      {/* <img src={AGPImage} alt="Images" /> */}
                      <img src="https://imagizer.imageshack.com/img924/7956/CjgnSx.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Director</span></h2>
                  </div>
              </div>

              <div className="card-team">
                  <div className="imgBx">
                  <img src="https://imagizer.imageshack.com/img923/2889/nHXwpR.jpg" alt="Images" />
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
                   <img src="https://imagizer.imageshack.com/img922/4326/PZ6vxq.jpg" alt="Images" />
                  </div>
                  <div className="details">
                      <h2>SomeOne Famous<br /><span>Actor</span></h2>
                  </div>
              </div>
              <div className="card-team">
                  <div className="imgBx">
                  {/* <img src={ARPImage} alt="Images" /> */}
                  {/* <img src="https://imagizer.imageshack.com/img923/1272/xiQOsp.jpg" alt="Images" /> */}
                  <img src="https://imagizer.imageshack.com/img924/8309/CzqTPP.jpg" alt="Images" />
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
import React from "react";
import videoSource from './images1/video.mp4';
import "./App1.css";
function Whysaic(props) {
  return (
    <div>
    <marquee style={{  fontSize: "18px",color:"red",background:"gray",height:"auto"}}>
          ALL LATEST Update
    </marquee>
    <div style={{marginTop:"-150px"}}>
      <video style={{height:"940px",width:"100%"}} autoPlay loop controls playsInline>
          <source src={videoSource} type="video/mp4" style={{width:"200px"}} />
      </video>
    </div>
    <div style={{background:"linear-gradient(80deg,white,black)"}}>
    <br></br>
    <br></br>
          
          <div className="container">
  <div className="card mx-auto text-center" style={{ width: "auto", backgroundColor: "#D4D4D4",marginTop:"800px" }}>
    <div className="card-body">
      <p className="card-text" style={{ fontSize: "16px", color: "#E3242B" }}>
              The Student Alumni Interaction Cell serves as a liaison between
                the alumni and the students and works vigorously to provide the
                alumni-in-making with a glimpse of what may lie ahead in their
                professional lives. SAIC functions with a vision to develop a
                dynamic student alumni community committed for establishing
                connections and strengthening ties between students and alumni,
                facilitating TIET’s mission of providing top quality education
                and opportunities and investing in its future. We hope to
                inspire lifelong loyalty and pride between the current and
                future alumni by strengthening their continued relationship with
                the alma mater in every way. Our mission is to "enrich the lives
                of alumni and engage them as volunteers, advocates, and
                contributors who strengthen the University". To this end, we run
                and manage communications, events, and programs to maximize
                alumni involvement, develop volunteer opportunities, and
                stimulate philanthropic and advocacy support.
      </p>
    </div>
    <div className="card-footer text-muted"><h3 style={{ fontWeight: "bolder" }}>About SAIC</h3></div>
  </div>
</div>

      <div style={{ paddingTop: "520px" }}>
        <h1
          className="headings insitehead pt-4 pb-0 mb-0"
          style={{ color: "white", backgroundColor: "#222 ",textAlign:"center" }}
          id="secondvphp"
        >
          WHY <b className="under"> SAIC </b> TIET
        </h1>
        <div className="secondvp pt-1">
          <div className="seccontainer pt-2">
            <div className="secbox" id="secbox">
              <div className="seccontent">
                <img src={require("./team.svg").default} alt="" />
                <h3>Teamwork: Achieve More Together!</h3>
                <p>
                  Unleash the power of teamwork and collaboration to accomplish
                  extraordinary results together.
                </p>
              </div>
            </div>
            <div className="secbox px-3 py-3" id="secbox">
              <div className="seccontent">
                <img src={require("./growth.svg").default} alt=" " />
                <h3>The Growth Support Center </h3>
                <p>
                  Master the art of turning ideas into reality with expert
                  guidance and proactive strategies{" "}
                </p>
              </div>
            </div>

            <div className="secbox  px-3 py-3" id="secbox">
              <div className="seccontent">
                <img src={require("./leader.svg").default} alt="" />
                <h3>Campus Leaders</h3>
                <p>
                  An opportunity to boost your career path with excellent
                  working experience and insights.{" "}
                </p>
              </div>
            </div>

            <div className="secbox  px-3 py-3" id="secbox">
              <div className="seccontent">
                <img src={require("./hack.svg").default} alt="logo" />
                <h3>Hack your Growth</h3>
                <p>
                  {" "}
                  Unlock exponential growth with strategic innovation and
                  collaboration at SAIC.
                </p>
              </div>
            </div>

            <div className="secbox  px-3 py-3" id="secbox">
              <div className="seccontent">
                <img src={require("./network.svg").default} alt="" />
                <h3>Networking</h3>
                <p>
                  Scale professionally by gaining access to a huge corporate
                  network comprising of various well-accomplished students and
                  alumni.
                </p>
              </div>
            </div>

            <div className="secbox  px-3 py-3" id="secbox">
              <div className="seccontent">
                <img src={require("./decision.svg").default} alt="logo" />
                <h3>Discernment</h3>
                <p>
                  {" "}
                  Learn to lead change and excel in critical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Whysaic;

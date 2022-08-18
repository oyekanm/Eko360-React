import React from "react";

function About() {
  return (
    <section>
      <div className="container">
        <div className=" About__div">
          <p className="About__text">About LBS</p>
        </div>
      </div>
      <div className="About__section">
        <div className="container">
          <div className="row About-vision">
            <div className="col-lg-6 col-md-6 About__info">
              <p className="info__title">Vision</p>
              <p className="info__text">
                Ensuring a digitalized, efficient and timely statistical system
                for planning, mission policy formulation and decision making.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 About__info">
              <p className="info__title">Mission</p>
              <p className="info__text">
                To continually be the one-stop shop for qualitative, reliable
                and robust data for the development of the state.
              </p>
            </div>
          </div>
          <div>
            <p className="team--name">Meet Our Team</p>
            <div className="row About--team-div">
              <div className="col-lg-4 col-md-4  About__team">
                <div className="team--member team--member-1">
                  <img
                    src={require("../assets/img/img1 1.png")}
                    alt=""
                    className="team--img"
                  />
                </div>
                <p className="team--name">Mr. Samuel Egube</p>
                <p className="team--office">
                  <span>The Honourable Commissioner,</span>
                  Ministry of Economic Planning and Budget
                </p>
              </div>
              <div className="col-lg-4 col-md-4  About__team">
                <div className="team--member team--member-2">
                  <img
                    src={require("../assets/img/img2 1.png")}
                    alt=""
                    className="team--img"
                  />
                </div>
                <p className="team--name">Mrs. Liadi Adetutu Abiola</p>
                <p className="team--office">
                  <span>The Permanent Secretary,</span>
                  Ministry of Economic Planning and Budget,
                </p>
              </div>
              <div className="col-lg-4 col-md-4  About__team">
                <div className="team--member team--member-3">
                  <img
                    src={require("../assets/img/img3 1.png")}
                    alt=""
                    className="team--img"
                  />
                </div>
                <p className="team--name">Mr. Bashiru Temitayo Oseni-Ope</p>
                <p className="team--office">
                  <span>Director,</span>
                  Lagos Bureau of Statistics,
                </p>
              </div>
            </div>
          </div>
          <div className="Functions" id="functions">
            <p className="team--name Functions__head">
              THE CORE FUNCTIONS OF THE LAGOS BUREAU OF STATISTICS ARE
            </p>
            <div className="Functions--div">
              <div className="Functions__div">
                <div>
                  <span className="Functions__span anime"></span>
                  <span className="Functions__span "></span>
                </div>
                <p className="Functions__text">
                  Provide advisory role to the State and Local Government on
                  statistical matters.
                </p>
              </div>
              <div className="Functions__div">
                <div>
                  <span className="Functions__span anime"></span>
                  <span className="Functions__span "></span>
                </div>
                <p className="Functions__text">
                  Research and conduct statistical surveys on the socio-economic
                  activities in the state.
                </p>
              </div>
              <div className="Functions__div">
                <div>
                  <span className="Functions__span anime"></span>
                  <span className="Functions__span "></span>
                </div>
                <p className="Functions__text">
                  Maintain a comprehensive data bank on the results of the
                  generational coordination of statistical activities in the
                  state.
                </p>
              </div>
              <div className="Functions__div">
                <div>
                  <span className="Functions__span anime"></span>
                  <span className="Functions__span "></span>
                </div>
                <p className="Functions__text">
                  Maintain liaison with the three tiers of government (federal,
                  state and local government) and multinational organizations on
                  the issues pertaining to statistics, research, development,
                  publications and dissemination of statistical data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

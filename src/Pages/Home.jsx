import React from "react";

function Home() {
  return (
    <>
      <header>
        <div className="Portal--bg ">
          <div className="container Portal__div">
            <p className="Portal__title">
              Welcome to Lagos Bureau of Statistics Open Data Portal
            </p>
            <p className="Portal__text">What data are you looking for?</p>
            <form className="Form__">
              <input
                type="text"
                placeholder="Search for information"
                className="Form__input"
              />
              <div className="Form__button">
                <a href="" className="Form__link">
                  Search
                </a>
              </div>
            </form>
          </div>
        </div>
      </header>
      <section>
        <div className="Dataset">
          <div className="container Dataset__div ">
            <p className="Home__title">Latest DataSets</p>
            <p className="Home__text">
              These shows the latest datasets from health, education and
              Economic affairs. Click “download dataset” to get the
              corresponding data associated with each dataset
            </p>
            <div className="Dataset__info">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">
                      Statistics Of Crop Production In Lagos State
                    </p>
                    <div className="data-height">
                      <p className="Dataset__info--text">
                        The dataset has detailed categories and types of crops
                        produced in Lagos State as recorded by the Ministry of
                        Agriculture.
                      </p>
                      <p className="Dataset__info--text text">
                        Dataset segregates information based on - Year, Category
                        of Crop, Types of Crop, Production Hectare in thousand,
                        and Production in Tons.
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/file_download_black_24dp 1.png")}
                          className="download"
                        />
                        Download Dataset
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">
                      Primary Health Facilities
                    </p>
                    <div className="data-height">
                      <p className="Dataset__info--text">
                        The dataset details number of functional primary health
                        centers classNameified by ward/LGA across the local
                        council development area under the Ministry of Health in
                        2019.
                      </p>
                      <p className="Dataset__info--text text">
                        Dataset segregates information based on - LCDA, Local
                        Government Areas, and the PHCs.
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/file_download_black_24dp 1.png")}
                          className="download"
                        />
                        Download Dataset
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">
                      Electricity Consumption Of Lagos State Under Independent
                      Power
                    </p>
                    <div className="data-height">
                      <p className="Dataset__info--text">
                        The dataset contains Lagos State Electricity Consumption
                        data in 2019, classNameified by Independent Power
                        Producers.
                      </p>
                      <p className="Dataset__info--text text">
                        Dataset segregates information based on -Year,
                        Independent Power Producers and Capacity Installed.
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/file_download_black_24dp 1.png")}
                          className="download"
                        />
                        Download Dataset
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">
                      Overview Of Health Facilities
                    </p>
                    <div className="data-height">
                      <p className="Dataset__info--text">
                        The dataset has detailed categories and types of crops
                        produced in Lagos State as recorded by the Ministry of
                        Agriculture.
                      </p>
                      <p className="Dataset__info--text text">
                        Dataset segregates information based on - Year, Category
                        of Crop, Types of Crop, Production Hectare in thousand,
                        and Production in Tons.
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/file_download_black_24dp 1.png")}
                          className="download"
                        />
                        Download Dataset
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">
                      Statistics Of Primary And Secondary School Enrolment
                    </p>
                    <div className="data-height">
                      <p className="Dataset__info--text">
                        The dataset details number of functional primary health
                        centers classified by ward/LGA across the local council
                        development area under the Ministry of Health in 2019.
                      </p>
                      <p className="Dataset__info--text text">
                        Dataset segregates information based on - LCDA, Local
                        Government Areas, and the PHCs.
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/file_download_black_24dp 1.png")}
                          className="download"
                        />
                        Download Dataset
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">
                      Statistics Of Mass Education Enrolment
                    </p>
                    <div className="data-height">
                      <p className="Dataset__info--text">
                        The dataset contains the number of mass education
                        centers (basic/vocational learning) in local government
                        areas in Lagos State.
                      </p>
                      <p className="Dataset__info--text text">
                        Dataset segregates information based on -Year, LGA, No.
                        of Centers, Gender, No. of Enrolment, No. Examined, No.
                        of Dropouts and Completed Candidates.
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/file_download_black_24dp 1.png")}
                          className="download"
                        />
                        Download Dataset
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-dataset">
              <a href="#" className="view-link">
                View all datasets
              </a>
            </div>
          </div>
        </div>
        <div className="Analysis">
          <div className="container Analysis__div">
            <p className="Home__title">Interactive analysis</p>
            <p className="Home__text">
              This is an interactive dashboard that visualizes different
              analysis and insights on various Lagos State data across health,
              education and economic affairs sectors.
            </p>
            <div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">Economic Affairs</p>
                    <div className="analysis-height">
                      <p className="Dataset__info--text">
                        This interactive dashboard lets you explore data
                        patterns and trends of Nigeria's economic affairs
                        sector, spanning transportation, agriculture, commerce,
                        and infrastructure ministries. The dataset covers
                        various parameters like - accidents, vehicles, offences,
                        agriculture, infrastructure, and power. The dataset
                        covers the period 2010 to 2019.
                      </p>
                      <p className="Dataset__info--text text">
                        Click on a map area to get detailed data on any
                        particular Local Government Area (LGA).
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/view_list_black_24dp 1.png")}
                          className="download"
                        />
                        View Dashboard
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">Health Sector</p>
                    <div className="analysis-height">
                      <p className="Dataset__info--text">
                        This interactive dashboard lets you explore data
                        patterns and trends of Nigeria's health sector, covering
                        various parameters like Consultancy clinical cases,
                        In-patient/Outpatient attendance, maternal health, child
                        health, blood/HIV indicator, and clinical workforce. The
                        dataset covers the period 2010 to 2019.
                      </p>
                      <p className="Dataset__info--text text">
                        Click on a map area to get detailed data on any
                        particular Local Government Area (LGA).
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/view_list_black_24dp 1.png")}
                          className="download"
                        />
                        View Dashboard
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 Dataset__info__div">
                  <div className="Dataset__img"></div>
                  <div className="Dataset__info--div">
                    <p className="Dataset__info--title">Education</p>
                    <div className="analysis-height">
                      <p className="Dataset__info--text">
                        This interactive dashboard lets you explore data
                        patterns and trends of Nigeria's education sector,
                        covering General school statistics, Primary/Junior
                        secondary/Senior secondary school, Government Technical
                        colleges, Tertiary institutions, awards, scholarships,
                        and Infrastructure details. The datasets cover the years
                        2009/10 to 2018/19.
                      </p>
                      <p className="Dataset__info--text text">
                        Click on a map area to get detailed data on any
                        particular Local Government Area (LGA).
                      </p>
                    </div>
                    <div className="Dataset--button">
                      <a href="#" className="Dataset__link">
                        <img
                          src={require("../assets/img/view_list_black_24dp 1.png")}
                          className="download"
                        />
                        View Dashboard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-dataset">
              <a href="#" className="view-link">
                View all analysis
              </a>
            </div>
          </div>
        </div>
        <div className="Budget">
          <div className="container ">
            <p className="Home__title">
              Year 2022 lagos state comprehensive budget
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 Budget--div">
                <div>
                  <img
                    src={require("../assets/img/Group 104.png")}
                    className="Budget--img"
                  />
                </div>
                <div className="Budget--list text--right">
                  <p className="random--title">Energy</p>
                  <p className="random--text">Revenue(CRF): ₦296,044,800 </p>
                  <p className="random--text">Personnel Cost: ₦358,621,298​</p>
                  <p className="random--text">Overhead Cost: ₦297,513,69</p>
                  <p className="random--text">
                    Capital Expenditure: ₦12,479,586,517
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 Budget--div">
                <div className="Budget--list text--left">
                  <p className="random--title">Finance</p>
                  <p className="random--text">Revenue(CRF): ₦711,661,250,363</p>
                  <p className="random--text">Personnel Cost: ₦675,565,092</p>
                  <p className="random--text">
                    Overhead Cost: ₦65,717,362,636​
                  </p>
                  <p className="random--text">
                    Capital Expenditure: ₦5,289,558,205​
                  </p>
                </div>
                <div>
                  <img
                    src={require("../assets/img/Group 7147.png")}
                    className="Budget--img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 Budget--div">
                <div>
                  <img
                    src={require("../assets/img/Group 7148.png")}
                    className="Budget--img"
                  />
                </div>
                <div className="Budget--list text--right">
                  <p className="random--title">Education</p>
                  <p className="random--text">Revenue(CRF): ₦1,939,052,500 </p>
                  <p className="random--text">
                    Personnel Cost: ₦51,838,388,115​
                  </p>
                  <p className="random--text">Overhead Cost: ₦8,309,131,195​</p>
                  <p className="random--text">
                    Capital Expenditure: ₦43,289,977,511
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 Budget--div">
                <div className="Budget--list text--left">
                  <p className="random--title">Transportation</p>
                  <p className="random--text">Revenue(CRF): ₦14,291,479,526 </p>
                  <p className="random--text">Personnel Cost: ₦7,299,039,353</p>
                  <p className="random--text">Overhead Cost: ₦772,417,702</p>
                  <p className="random--text">
                    Capital Expenditure: ₦72,930,444,701
                  </p>
                </div>
                <div>
                  <img
                    src={require("../assets/img/Group 7149.png")}
                    className="Budget--img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 Budget--div">
                <div>
                  <img
                    src={require("../assets/img/Group 7150.png")}
                    className="Budget--img"
                  />
                </div>
                <div className="Budget--list text--right">
                  <p className="random--title">Health</p>
                  <p className="random--text">Revenue(CRF): ₦1,186,646,498</p>
                  <p className="random--text">
                    Personnel Cost: ₦41,081,371,144​
                  </p>
                  <p className="random--text">Overhead Cost: ₦12,304,739,633</p>
                  <p className="random--text">Expenditure: ₦32,459,987,831</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 Budget--div">
                <div className="Budget--list text--left">
                  <p className="random--title">Agriculture</p>
                  <p className="random--text">Revenue(CRF):₦5,385,000,000 </p>
                  <p className="random--text">Personnel Cost:₦1,343,111,247</p>
                  <p className="random--text">Overhead Cost:₦220,754,487​</p>
                  <p className="random--text">
                    Capital Expenditure: ₦10,151,401,188
                  </p>
                </div>
                <div>
                  <img
                    src={require("../assets/img/Group 7151.png")}
                    className="Budget--img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Charts">
          <div className="container ">
            <p className="Home__title">Share datasets</p>
            <p className="Home__text">
              Do you have datasets you would like to share with the public?
              Please click the button below to upload your data.
            </p>
            <div>
              <img
                src={require("../assets/img/Group 7443.png")}
                alt=""
                className="Charts-img"
              />
            </div>
            <div className="view-dataset">
              <a href="#" className="view-link">
                Upload Now
              </a>
            </div>
          </div>
        </div>
        <div className="Weather">
          <div className="container">
            <p className="Weather__title">Lagos,Nigeria</p>
            <div className="row">
              <div className="col-lg-2 col-md-6 Weather__div">
                <p className="Weather--deg">
                  16<sup>o</sup>C
                </p>
                <p className="Weather--text">Today, 9AM</p>
                <p className="Weather__text">Moderate rain</p>
              </div>
              <div className="col-lg-2 col-md-6 Weather__div">
                <p className="Weather--deg">
                  16<sup>o</sup>C
                </p>
                <p className="Weather--text">Today, 9AM</p>
                <p className="Weather__text">Moderate rain</p>
              </div>
              <div className="col-lg-2 col-md-6 Weather__div">
                <p className="Weather--deg">
                  16<sup>o</sup>C
                </p>
                <p className="Weather--text">Today, 9AM</p>
                <p className="Weather__text">Moderate rain</p>
              </div>
              <div className="col-lg-2 col-md-6 Weather__div">
                <p className="Weather--deg">
                  16<sup>o</sup>C
                </p>
                <p className="Weather--text">Today, 9AM</p>
                <p className="Weather__text">Moderate rain</p>
              </div>
              <div className="col-lg-2 col-md-6 Weather__div">
                <p className="Weather--deg">
                  16<sup>o</sup>C
                </p>
                <p className="Weather--text">Today, 9AM</p>
                <p className="Weather__text">Moderate rain</p>
              </div>
              <div className="col-lg-2 col-md-6 Weather__div">
                <p className="Weather--deg">
                  16<sup>o</sup>C
                </p>
                <p className="Weather--text">Today, 9AM</p>
                <p className="Weather__text">Moderate rain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

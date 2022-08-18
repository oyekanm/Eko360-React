import React from "react";

function DatasetsPage() {
  return (
    <section>
      <div className="container">
        <div className="About__div">
          <p className="About__text">Latest Datasets</p>
        </div>
      </div>

      <div className="container Publications">
        <div className="Dataset">
          <div className="container Dataset__div ">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default DatasetsPage;

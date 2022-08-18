import React from "react";

function Faqs() {
  // <strong>(Home &gt; Explore &gt; Slice and Dice).</strong>
  return (
    <section>
      <div className="container">
        <div className="container About__div">
          <p className="About__text">Frequently Asked Questions</p>
        </div>
      </div>
      <div className="privacybg">
        <div className="container">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <p className="Privacy__title">What is eko360 portal?</p>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    The eko360 web portal is the Lagos Bureau of Statistics web
                    application. It provides information on Lagos State. A user
                    can search and retrieve available data in multiple formats
                    that show insights, analytics, trends, etc. A user can also
                    upload data to the web portal.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <p className="Privacy__title">
                    Who is eligible to use eko360 portal?
                  </p>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    The portal is open to the public, and anyone can access
                    available data.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <p className="Privacy__title">
                    Do I need to register or sign up to use this portal?
                  </p>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    No, the portal is open to the general use of the public.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <p className="Privacy__title">
                    What type of data is available on this portal?
                  </p>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    A user can find data on economic affairs, health, education,
                    and other statistical data relating to Lagos State.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <p className="Privacy__title">
                    Can I download files from the web portal?
                  </p>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    Yes. You can download data files from the website portal
                    available to the general public.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <p className="Privacy__title">
                    What format is the data on the website available to
                    download?
                  </p>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    You can download available data in different forms that may
                    be available on the portal, such as MS Excel (.xlsx), PDF,
                    JPEG, and MS Word (.docx) formats.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <p className="Privacy__title">
                    How safe is it to download files from the eko360 web portal?
                  </p>
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    The eko360 web portal uses the highest level of web
                    security. Files available on the portal are safe and secure.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  <p className="Privacy__title">
                    {" "}
                    May I redistribute the reports after I have downloaded them?{" "}
                  </p>
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    Yes, you are free to use information from the portal,
                    provided that the source is acknowledged. Utilization for
                    commercial purposes requires compliance with the terms of
                    use on all data downloaded on this platform..
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  <p className="Privacy__title">
                    Do I have to pay to obtain statistical information?
                  </p>
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    No. Obtaining statistical data on the website is entirely
                    free of charge. You can email the Lagos Bureau of Statistics
                    team concerning any special data request.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  <p className="Privacy__title">
                    How often is statistical information/data updated?
                  </p>
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    There are regular updates to the information on the portal.
                    Statistical data gets automatically updated through a
                    defined in-house procedure, with updates to each indicator
                    after the quality assurance and control process.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEleven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  <p className="Privacy__title">
                    Can I use the data published on this website for a report or
                    publication?
                  </p>
                </button>
              </h2>
              <div
                id="collapseEleven"
                className="accordion-collapse collapse"
                aria-labelledby="headingEleven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    Yes. You can use data for reporting or publishing, but it is
                    strictly prohibited to modify any figures.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwelve">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  <p className="Privacy__title">
                    How are suggestions treated?​
                  </p>
                </button>
              </h2>
              <div
                id="collapseTwelve"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwelve"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    We consider suggestions to improve the quality of our data
                    portal services. Hence, all suggestions are welcome, and we
                    shall try to use them to enhance the service it addresses.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThirteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThirteen"
                  aria-expanded="false"
                  aria-controls="collapseThirteen"
                >
                  <p className="Privacy__title">
                    How do I give suggestions/comments?
                  </p>
                </button>
              </h2>
              <div
                id="collapseThirteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingThirteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    There is a <strong>'Contact'</strong> tab on the web portal,
                    where users can drop their suggestions/comments.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFourteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourteen"
                  aria-expanded="false"
                  aria-controls="collapseFourteen"
                >
                  <p className="Privacy__title">How do I download data?</p>
                </button>
              </h2>
              <div
                id="collapseFourteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    Search for the data you want to download, click on the
                    download tab, and the data will get downloaded.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFifteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFifteen"
                  aria-expanded="false"
                  aria-controls="collapseFifteen"
                >
                  <p className="Privacy__title">
                    How do I create a table builder (Slice and Dice)?
                  </p>
                </button>
              </h2>
              <div
                id="collapseFifteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingFifteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="Privacy__text">
                    Navigate to interactivity on the home page{" "}
                    <strong>(Home &gt; Explore &gt; Slice and Dice)</strong> .
                    Click on Slice and Dice. An interactive page will be
                    displayed to click on any preferred indicators for your
                    report. Using the print button, you can download the report
                    either as a pdf or .xlsx file.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;

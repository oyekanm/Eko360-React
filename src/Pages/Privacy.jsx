import React from "react";

function Privacy() {
  return (
    <section>
      <div className="container">
        <div className=" About__div">
          <p className="About__text">Privacy Policy</p>
        </div>
      </div>
      <div className="privacybg">
        <div className="container">
          <ul className="nav nav-tabs nav-border" id="nav-tab" role="tablist">
            <li className="">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Privacy
              </button>
            </li>
            <li className="">
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Cookies Policy
              </button>
            </li>
          </ul>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
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
                      <p className="Privacy__title">
                        What is this Privacy policy for?
                      </p>
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
                        This privacy policy (“Policy”) will help you understand
                        how the eko360 project (“We”, “Us”, “Our”) uses and
                        protects the personal data you provide us when you visit
                        and use the eko360 website. We value your Personal Data
                        and we are committed to protecting your privacy whenever
                        you interact with us. Please read this Policy to
                        understand our policies, processes and procedures
                        regarding the processing of your personal data.
                      </p>
                      <p className="Privacy__text text">
                        By this Policy, We explain to you how your Personal Data
                        is collected, used, managed and transferred by us and
                        also explain how you can update your Personal Data with
                        us and exercise your rights in respect of the Personal
                        Data provided to us.
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
                        When do we collect your personal data
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
                        From our website, personal data can be collected through
                        the following ways:
                      </p>
                      <p className="Privacy__text text">
                        . Cookies: We may also automatically collect some
                        technical information when you visit our website such as
                        your IP address, and information about your visit, such
                        as the pages that you viewed. This information helps us
                        understand customer interests and helps us improve our
                        website. When you visit our site, the pages that you
                        look at, and a short text file called a cookie, are
                        downloaded to your computer. By visiting and using our
                        website, you agree to our use of cookies in line with
                        our Cookies policy. For more details about Cookies,
                        please read our Cookies Policy available through this
                        link.
                      </p>
                      <p className="Privacy__text text">
                        . Through the various products and services rendered by
                        the eko360 Project: We render several services which
                        necessitates the provision of personal data by the Data
                        Subjects i.e. names, addresses, phone numbers etc.
                      </p>
                      <p className="Privacy__text text">
                        . When you request for further information about our
                        product or fill a form.
                      </p>
                      <p className="Privacy__text text">
                        . When you subscribe to newsletters on our website.
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
                        What is the main purpose of processing your data
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
                        We may process your Personal Data to communicate with
                        you (including sending marketing or promotional
                        materials to you) and to provide you with further
                        information about our services and products and how we
                        can serve you better. We may also process your Personal
                        Data to comply with provisions of applicable laws.
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
                        How long do we store your data?
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
                        The storing of your data will depend of the purpose of
                        the processing:
                      </p>
                      <p className="Privacy__text text">
                        (1) if we process it for sending you commercial or
                        promotional communications, we will store it until your
                        objection.
                      </p>
                      <p className="Privacy__text text">
                        (2) if we use your data to analyze and manage your
                        requests, questions and consultations, we will process
                        and store your data as long as it takes us to answer
                        your request, question and/or consultation.
                      </p>
                      <p className="Privacy__text text">
                        In all scenarios, once the storage period has concluded,
                        the data will be stored dully blocked for the period
                        legally required for the compliance of any contractual
                        and/or legal obligations.
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
                        What is the legal basis for protecting your data?
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
                        Where processing of Personal Data is based on consent,
                        We shall obtain the requisite consent at the time of
                        collection of the Personal Data. In this regard, you
                        consent to the processing of your Personal Data when you
                        access our platforms, or use our services, content,
                        features, technologies or functions offered on our
                        website or other digital platforms. You can withdraw
                        your consent at any time but such withdrawal will not
                        affect the lawfulness of processing based on consent
                        given before its withdrawal.
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
                        Who do we share your data with?
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
                        We respect your privacy and we limit disclosure of your
                        Personal Data to third parties. We do not sell, give or
                        trade any Personal Data that We obtain from you to any
                        third party for data-mining or marketing purposes.
                        However, We may share your Personal Data with service
                        providers engaged by us to provide services subject to
                        appropriate data security and protection. We may also
                        share your information where there is a regulatory or
                        statutory obligation to disclose such Personal Data in
                        accordance with provisions of applicable laws.
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
                        What are your rights when you provide us with your data?
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
                        eko360 collects Personal Data only for the purposes
                        identified in this Policy and such information cannot be
                        reused for another purpose that is incompatible with the
                        original purpose.
                      </p>
                      <p className="Privacy__text text">
                        You can exercise the following rights with respect to
                        your Personal Data:
                      </p>
                      <p className="Privacy__text text">
                        a) request for and access your Personal Data collected
                        and stored;
                      </p>
                      <p className="Privacy__text text">
                        b) withdraw consent at any time. For example, you can
                        withdraw your consent to receipt of our marketing or
                        promotional materials or unsubscribe to our newsletters;
                      </p>
                      <p className="Privacy__text text">
                        c) object to automated decision making;
                      </p>
                      <p className="Privacy__text text">
                        d) request rectification and modification of Personal
                        Data kept by eko360;
                      </p>
                      <p className="Privacy__text text">
                        e) request for deletion of your Personal Data;
                      </p>
                      <p className="Privacy__text text">
                        f) be informed of and entitled to provide consent prior
                        to the processing of Personal Data for purposes other
                        than that for which the Personal Data were collected;
                      </p>
                      <p className="Privacy__text text">
                        g) request that we restricts processing of your Personal
                        Data; and
                      </p>
                      <p className="Privacy__text text">
                        h) request for information regarding any specific
                        processing of your personal data.
                      </p>
                      <p className="Privacy__text text">
                        If you had given your consent for any specific purpose,
                        you may withdraw that consent whenever you wish, without
                        affecting the lawfulness of the processing based on the
                        consent prior to withdrawal. If you haven't obtained
                        satisfaction in the exercise of your rights, you may
                        file a complaint with the competent data protection
                        authority..
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
                      <p className="Privacy__title">Updates</p>
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
                        We will only use your personal data as set out in this
                        Privacy Policy which is in force at the time, we collect
                        your information. If any revision or update is done that
                        affects the processing of your personal data, we will
                        inform you.
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
                        Security and Retention of your personal data
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
                        Your Personal Data is kept private and we make every
                        effort to keep your Personal Data secure, including
                        restricting access to your Personal Data with us on a
                        need to know basis. We require our staff and any third
                        parties who carry out any work on our behalf to comply
                        with appropriate security standards to protect your
                        Personal Data.
                      </p>
                      <p className="Privacy__text text">
                        We take appropriate measures to ensure that your
                        Personal Data is only processed for the minimum period
                        necessary in line with the purposes set out in this
                        Policy or as required by applicable laws, until a time
                        it is no longer required or has no use. Once your
                        Personal Data is no longer required, we destroy it in a
                        safe and secure manner.
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
                        Changes to our privacy policy
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
                        Due to constant changes in technology and regulatory
                        requirements, we may need to change our privacy policies
                        or update this Policy from time to time. You will always
                        be able to find the most recent version of our updated
                        privacy policy on this site.
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
                        Contact and Communication
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
                        If you would like further information on this Policy, or
                        to contact our Data Protection Officer, you may contact
                        us at , Lagos, Nigeria or at
                        <a
                          href="mailto:dpo@insertemailaddress"
                          className="Privacy-mail"
                        >
                          dpo@insertemailaddress.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <p className="Privacy__text">
                This Cookies Policy (Policy) explains how we use cookies and the
                choices you have. Except as otherwise stated in this Policy, our
                Privacy Policy will apply to our processing of data that we
                collect via cookies. You can access our Privacy Policy via this
                link
              </p>
              <p className="Privacy__text text">
                By using our website (by clicking, navigating or scrolling), you
                are consenting to our use of cookies in accordance with this
                Policy. If you do not agree to our use of cookies, you can
                prevent the installation of cookies through the settings of your
                browser or not use our website at all. However, if you disable
                the use of cookies, this might cause some parts of this website
                not to function properly for you and it may impact your user
                experience on this site.
              </p>
              <div>
                <p className="Privacy__title">What are Cookies?</p>
                <p className="Privacy__text text">
                  Cookies are messages or small files that are placed on your
                  web browser when you visit an internet site. Cookies are
                  useful and do a lot of different things, including allowing a
                  website to recognize a user's device, improving online
                  experience etc.
                </p>
              </div>
              <div>
                <p className="Privacy__title">How and Why do we Use Cookies?</p>
                <p className="Privacy__text">
                  We use cookies when you access our websites to make the site
                  work better and to help us understand how you use our site.
                  They are strictly used to monitor pages you find useful and
                  which you do not so that we can provide a better experience
                  for you.
                </p>
                <p className="Privacy__text text">
                  Cookies enable us to understand the information we receive
                  about you, including information about your use of other
                  websites and apps. The data we collect by using cookies is
                  used to customize our website to your needs.
                </p>
                <p className="Privacy__text text">
                  Cookies help us provide, protect and improve our services, by
                  personalizing, tailoring and measuring the services we provide
                  for satisfactory and safe experience. We also use them to help
                  authentication of user, assess performance and functionality
                  of our services and analytical research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;

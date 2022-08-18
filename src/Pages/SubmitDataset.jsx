import React from "react";

function SubmitDataset() {
  return (
    <section className="Contact">
      <div className="container Contact__div">
        <p className="Contact__title">Upload Dataset</p>
        <p className="Contact__text">
          Do you have datasets you would like to share with the public? Please
          fill out the form below to submit the dataset which will be reviewed
          before being made available to the public.
        </p>
        <form action="#" className="Contact__form">
          <input
            type="text"
            placeholder="Your Full Name"
            className="Contact__input"
          />
          <input
            type="text"
            placeholder="Dataset Name"
            className="Contact__input"
          />
          <select type="file" placeholder="File" className="Contact__input">
            <option>File</option>
          </select>
          <textarea
            placeholder="Description"
            className="Contact__input message-area"
          />
          <input type="text" placeholder="Title" className="Contact__input" />
          <input type="email" placeholder="Email" className="Contact__input" />
          <div className="Contact__checkbox">
            <input type="checkbox" />
            <div className="Contact__input-div">
              <span>
                I confirm that all the information that I have provided is
                genuine and valid.
              </span>
              <p>
                <a href="#" className="submit--link">
                  Licensed: CC BY 4.0
                </a>
              </p>
            </div>
          </div>

          <div className="Contact__item">
            <a href="#" className="Contact__link">
              Send
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SubmitDataset;

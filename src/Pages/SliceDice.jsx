import React from "react";

function SliceDice() {
  return (
    <>
      <header>
        <div className="Interactive ">
          <div className="container Interactive__div">
            <p className="Interactive__title">Slice & Dice</p>
            <p className="Interactive__text">
              This facilitates access to data tables from health, education and
              economic affairs to provide a comprehensive statistical view of
              Lagos from these 3 sectors. Users can use these charts to make
              various inferences, deductions and download the dataset in PDF or
              Excel format.
            </p>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <p className="Interaction__text slice-text">
            To interact with the Slice and Dice functionality; Select a Sector
            or Organization, select a topic of choice from the displayed topics,
            check the data variable(s) of interest and select a year to
            visualize or visualize all the years by default.
          </p>
        </div>
      </section>
    </>
  );
}

export default SliceDice;

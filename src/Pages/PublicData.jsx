import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data";

function PublicData() {
  console.log(Data);

  return (
    <section>
      <div className="container">
        <div className=" About__div">
          <p className="About__text">Public Data</p>
        </div>
      </div>

      <div className="Public">
        <div className="container ">
          <div className="row">
            <div className="col-lg-1 col-md-1  "></div>
            {Data.map((item) => {
              const { name, text, id } = item;
              return (
                <div
                  key={id}
                  className="col-lg-3 col-md-3 col-sm-6 Public__div"
                >
                  <Link to={`/public-data/${id}`} className="Public__link">
                    <div className="Public--data">
                      <img
                        src={require("../assets/img/bar-chart.svg").default}
                        alt=" "
                        className="Public__img"
                      />
                    </div>
                    <div className="Public--paragraphs">
                      <div className="Public__title">{name}</div>
                      <div className="Public__text">{text}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PublicData;

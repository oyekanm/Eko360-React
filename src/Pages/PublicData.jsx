import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data";

function PublicData() {
  const [product, setProduct] = useState(Data);
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
            <div className="col-lg-3 col-md-3 col-sm-6 Public__div">
              {product.map((item) => {
                const { name, text, id } = item;
                return (
                  <>
                    <div className="Public--data">
                      <Link to={`/public-data/${id}`}>
                        <img
                          src={require("../assets/img/bar-chart.svg").default}
                          alt=" "
                          className="Public__img"
                        />
                      </Link>
                    </div>
                    <div className="Public--paragraphs">
                      <Link to={`/public-data/${id}`} className="Public__link">
                        <div className="Public__title">{name}</div>
                        <div className="Public__text">{text}</div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PublicData;

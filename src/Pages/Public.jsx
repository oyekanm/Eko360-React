import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";
import Error from "./Error";

function Public() {
  const { productId } = useParams;
  const item = Data.find((products) => products.id === productId);
  // const { name, button, text } = item;
  if (!item) return <Error />;
  return (
    <section>
      <div className=" About__Data">
        <p className="About__text">{item.name}</p>
      </div>
      <div className="container public-dataset">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 ">
            <div className="Dataset--button">
              <Link to="" className="Dataset__link">
                <img
                  src={require("../assets/img/file_download_black_24dp 1.png")}
                  className="download"
                />
                {item.button}
              </Link>
            </div>
            <p className="public-dataset__text mt-5">{item.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Public;

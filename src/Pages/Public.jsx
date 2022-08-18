import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";

function Public() {
  const { id } = useParams;
  // const [product, setProduct] = useState(Data);
  const item = Data.find((item) => item.id === id);
  const { name, button, text } = item;
  return (
    <>
      <section>
        <div class=" About__Data">
          <p class="About__text">{name}</p>
        </div>
      </section>
      <div class="container public-dataset">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 ">
            <div class="Dataset--button">
              <a href="#" class="Dataset__link">
                <img
                  src={require("../assets/img/file_download_black_24dp 1.png")}
                  class="download"
                />
                {button}
              </a>
            </div>
            <p class="public-dataset__text mt-5">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Public;

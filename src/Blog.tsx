import React from "react";
import Content from "./content";

const Blog = () => {
  return (
    <div className="my-custom-font playfair-display">
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis my-custom-font playfair-display">
          Ode to Imtiaz Ali
        </h1>
        <div className="mt-4 my-custom-font">
          <i>Sofia Noor Rafa</i>
        </div>
        <div className="container ">
          <div className="px-4 py-5 my-5">
            <img
              src="src\images.jpeg"
              className="img-fluid my-custom-class border rounded-3 shadow-lg mb-4"
              alt="Example image"
              loading="lazy"
            />
            <div className="mt-4 my-custom-font">
          <i>Imtiaz Ali, photo credit: Dry Tickets</i>
        </div>
          </div>
          <div className="overflow-hidden">
            <div className="container px-5 mt-4 pt-3"></div>
          </div>
          <div className="col-lg-6 mx-auto">
            <div className="lead mb-4 my-custom-font mt-4">
              <Content />
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog

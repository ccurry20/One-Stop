import React from "react";
import Banner from "./Banner";
import Article from "./Articles/Article";
import ArticleTwo from "./Articles/ArticleTwo";
import ArticleThree from "./Articles/ArticleThree";

const Welcome = () => {
  return (
    <div>
      <Banner
        //backgroundImage="url(images/model2.jpg)"
        title="Latest Gig Posts"
        subtitle="Check out the latest listings"
      />

      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            <hr />
            <ArticleTwo />
            <hr />
            <ArticleThree />
            <nav className="flexbox mt-50 mb-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer
              </a>
              <a className="btn btn-white" href="#">
                Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;

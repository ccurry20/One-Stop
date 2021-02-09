import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40 bg-black-400">
        <h3>
          <a href="blog-single.html">NEXT BEST RAP / R&B ARTISTS NEEDED</a>
        </h3>
        <div className="link-color-default fs-12">
          <a href="#">
            <time>Jan 13, 2021</time>
          </a>
        </div>
      </header>
      <a href="blog-single.html">
        <img className="rounded" src="images/rapper-blog.jpg" alt="..." />
      </a>
      <div className="card-block">
        <p className="text-justify">
          Searching for the next best artists to sign to Major Label and open up
          for Major Rap artists. Must have large social media following and
          great street creds. Submit bio or videos to New Hollywood Productions.
        </p>
        <p className="text-center mt-40">
          <Link
            className="btn btn-primary btn-round"
            to="/article/some-title-slug"
          >
            Read more
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Article;

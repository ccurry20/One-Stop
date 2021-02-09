import React from "react";
import { Link } from "react-router-dom";

const ArticleTwo = () => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40 bg-black-400">
        <h3>
          <a href="blog-single.html">
            CASTING EXPERIENCED ACTRESS / MODEL FOR TV COMMERCIAL
          </a>
        </h3>
        <div className="link-color-default fs-12">
          <a href="#">
            <time>Jan 24, 2021</time>
          </a>
        </div>
      </header>
      <a href="blog-single.html">
        <img className="rounded" src="images/actress-blog.jpg" alt="..." />
      </a>
      <div className="card-block">
        <p className="text-justify">
          We are casting for a very mature, sporty female spokesperson ages 23-
          32 FOR A NEW TV INFOMERCIAL …. THIS IS TO ADVERTISE OUR FALL NFL TOURS
          TO CANADIAN FANS. THIS CASTING IS OPEN TO SPOKESMODELS THAT HAVE 1-2
          YEAS OF CONSISTENT WORK DONE ON CAMERA ( please do not apply if you
          have not done at least 8- 10 commercials .) if you have a great resume
          and can send in copy of your work on dvd. PLEASE CALL FIRST FOR A
          PHONE INTERVIEW 6 PM – 10 MT TIME @ 306-580-4250 ASK FOE DENNIS .
          SALARY FOR THIS 2 DAY FILMING IS $18OO CDN PLUS ALL TRAVEL EXPENSES
          PAID. SERIOUS , WORKING MODELS CAN APPLY BY DEADLINE DATE OF JUNE 20 /
          2016 WE NEED A GREAT SPOKESPERSON FOR THIS ROLE! IS IT YOU? CALL FOR
          INTERVIEW TODAY!
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

export default ArticleTwo;

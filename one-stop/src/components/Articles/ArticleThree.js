import React from "react";
import { Link } from "react-router-dom";

const ArticleThree = () => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40 bg-black-400">
        <h3>
          <a href="blog-single.html">
            COSMETICS BRAND CASTING MODELS / DANCERS IN LOS ANGELES
          </a>
        </h3>
        <div className="link-color-default fs-12">
          <a href="#">
            <time>Feb 1, 2021</time>
          </a>
        </div>
      </header>
      <a href="blog-single.html">
        <img className="rounded" src="images/model-blog.jpg" alt="..." />
      </a>
      <div className="card-block">
        <p className="text-justify">
          Hello gals! Let me start of by telling you a little bit about our
          company, who we are and what we are looking for. We are an emerging
          FUN, colorful, and exciting cosmetic brand that will be launching in
          June of 2016. We will be doing a fun online video commercial for our
          brand as well as a photo shoot with some still shots in the middle of
          May. The photographer that we are using is an amazing photographer who
          has a strong portfolio of previous large companies he has worked for.
          We are looking for 5-6 female models who have a dance and/or model
          background. Models we are looking for should NOT be signed with a
          dance/modeling company in the state of California. Models will
          required to sign a NDA (Non-Disclosure Agreement) due to the fact that
          we have not launched yet. Models and dancers must have a portfolio or
          some strong photo shots of previous work you have done. If you are
          interested and feel that you meet the qualifications please email me
          back including your stats, head shots, and a short description about
          yourself and your style. Please remember that we are a FUN cosmetic
          line looking for energetic and upbeat personalities, and your
          uniqueness is what sets you apart. We look forward to hearing from you
          and learning about what makes you shine! Please submit
          to:jose.rodriguez@mponplaycosmetics.com
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

export default ArticleThree;

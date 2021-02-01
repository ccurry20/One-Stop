import React from "react";
import BlogMain from "../BlogMain";
import Footer from "../Footer";
import "../../App.css";
import { Button } from "../Button";
import CreateArticle from "../CreateArticle";

function Search() {
  return (
    <>
      <Button
        // className="btns"
        // buttonStyle="btn--outline"
        // buttonSize="btn--large"
        link={CreateArticle}
      >
        CREATE LISTING
      </Button>
      <BlogMain />
      <Footer />
    </>
  );
}

export default Search;

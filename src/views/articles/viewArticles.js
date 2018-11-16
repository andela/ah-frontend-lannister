import React from "react";
import NavBar from "../../components/navigation/navBar";
import "../../assets/articleAssets/demo2.scss";
import PropTypes from "prop-types";
import { roundofftime } from "./roundOffTime";

const dateFormat = require("dateformat");
const ViewAllArticles = ({ results }) => {
  const showArticles = results.map(article => (
    <div className="article-column" key={article.slug}>
      <a href={`/view-article/${article.slug}`} rel="bookmark">
        <img id="article_img" src={article.image} alt="" />
      </a>
      <div className="entry-info">
        <br />
        <header className="entry-header">
          <h3 className="entry-title">
            <a href={`/view-article/${article.slug}`} rel="bookmark" >
              {article.title}
            </a>
          </h3>
        </header>
        <div className="entry-meta">
          <h5 className="entry-description">
            <span>{article.description}</span>
          </h5>
          <div>
            <a className="categories" href="/">
              {article.category_title}
            </a>
          </div>
          <h5 className="entry-author">
            <a href="/" title="" rel="">
              {article.author}
            </a>
          </h5>
          <time className="entry-date">
            {dateFormat(article.created_at, "d/mmm/yyyy")}
          </time>
          <br />
          <time>{dateFormat(roundofftime(article), "M")} min read</time>
        </div>
        <br />
      </div>
    </div>
  ));

  return (
    <div>
      <NavBar />
      <div className="pic-container">
        {showArticles}
      </div>
    </div>
  );
};
ViewAllArticles.propTypes = {
  results: PropTypes.array
};
export default ViewAllArticles;

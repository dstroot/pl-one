import React, { useEffect } from "react";
import "./styles.scss";

const News = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • News`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>News!</h1>
    </div>
  );
};

export default News;

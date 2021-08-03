import React, { memo, useContext } from "react";
import { GlobalData } from "../../context/GlobalData";

const SecondCol = () => {
  const data = useContext(GlobalData);
  return (
    <div className="blog-header blog-is-sticky">
      <div className="blog-article header-article">
        <div className="blog-big__title-white">
          <span className="white">APP</span>
        </div>
        <div className="blog-tagline-white"> FOR APPS</div>
      </div>
      <div className="blog-article page-number">NO. {data.length}</div>
      <div className="blog-number-white">OF REVIEWS AS PER TODAY</div>
    </div>
  );
};
export default memo(SecondCol);

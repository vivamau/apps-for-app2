import React, { memo } from "react";
import MapChart from "../MapChart/MapChart";
const AppContainer = (props) => {
  return (
    <div className="blog-header">
      <div className="blog-article header-article">
        <div className="blog-big__title">{props.application.glassID}</div>
        <div className="blog-tagline">
          REVIEW {props.index + 1} OF {props.num}
        </div>
        <div className="blog-menu small-title date">
          Last update: {props.application.dateUpdate}
        </div>
      </div>
      <div className="blog-article">
        <h2>{props.application.projectName}</h2>
        <div className="blog-detail">
          <span>Technical focal point: {props.application.techFPName}</span>
          <span>Status {props.application.status}</span>
        </div>
        <p>
          Blonde received widespread acclaim, with critics praising Ocean's
          introspective lyrics and the album's unconventional
        </p>
        <MapChart />

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-corner-down-right"
            viewBox="0 0 24 24"
          >
            <path d="M15 10l5 5-5 5" />
            <path d="M4 4v7a4 4 0 004 4h12" />
          </svg>
          See More
        </a>
      </div>
    </div>
  );
};
export default memo(AppContainer);

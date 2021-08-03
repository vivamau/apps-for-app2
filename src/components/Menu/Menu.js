import React, { memo, useState } from "react";
import { GlobalData } from "../../context/GlobalData";

const Menu = () => {
  const [DataFilter, setDataFilter] = useState("test");
  console.log(3333333, DataFilter);
  const handleDataFilter = (event) => {
    //<input
    //type="text"
    //placeholder="Filter"
    //onChange={handleDataFilter}
    //></input>
    event.persist();
    setDataFilter(() => event.target.value);
    console.log(4444444, DataFilter);
  };

  return (
    <div className="blog-part is-menu">
      <a href="#" className="blog-menu">
        Reviews
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width=".7"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-arrow-up-right"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      <a href="#" className="blog-menu">
        Dashboard
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width=".7"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-arrow-up-right"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      <a href="#" className="blog-menu">
        Matrix
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width=".7"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-arrow-up-right"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      <a href="#" className="blog-menu">
        About
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width=".7"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-arrow-up-right"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
    </div>
  );
};
export default memo(Menu);

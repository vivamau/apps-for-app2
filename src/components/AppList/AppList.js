import React, { memo, useContext } from "react";
import AppContainer from "../AppContainer/AppContainer";

import { GlobalData } from "../../context/GlobalData";

const AppList = () => {
  const data = useContext(GlobalData);
  const listApps = data.map((application, i) => (
    <AppContainer
      application={application}
      key={i}
      index={i}
      num={data.length}
    />
  ));
  return <div className="blog-header-container">{listApps}</div>;
};
export default memo(AppList);

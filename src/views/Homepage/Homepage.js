import React, { useEffect, useState } from "react";
import AppList from "../../components/AppList/AppList";
import Menu from "../../components/Menu/Menu";
import PendingReviews from "../../components/PendingReviews/PendingReviews";
import SecondCol from "../../components/SecondCol/SecondCol";
import { GlobalData } from "../../context/GlobalData";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`/data/index.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.sort((a, b) =>
            a.glassID < b.glassID ? 1 : b.glassID < a.glassID ? -1 : 0
          )
        );
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div>wait...</div>
  ) : (
    <div className="blog">
      <GlobalData.Provider value={data}>
        <Menu />
        <SecondCol />
        <AppList />
        <PendingReviews />
      </GlobalData.Provider>
    </div>
  );
};

export default Homepage;

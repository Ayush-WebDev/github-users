import React from "react";
import Charts from "./Charts";
import PieChart from "./PieChart";
import { useGlobalContext } from "../context";
import BarChart from "./BarChart";
import DoughnutChart from "./Doughnut";
import VerticalBarChart from "./VerticalBar";
const Repos = () => {
  const { languageData, arrLang, arrStars, userRepos, arrRepos, arrForks } =
    useGlobalContext();
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr,1.75fr] gap-10">
      <Charts
        title={"Languages"}
        chart={
          <PieChart
            data={arrLang}
            chartType={"pie3d"}
            caption={"Most used languages"}
          />
        }
      />
      <Charts title={"Most popular"} chart={<BarChart data={arrRepos} />} />
      <Charts
        title={"Stats per language"}
        chart={<DoughnutChart data={arrStars} />}
      />
      <Charts
        title={"Most Forked"}
        chart={<VerticalBarChart data={arrForks} />}
      />
    </div>
  );
};

export default Repos;

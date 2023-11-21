import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const DoughnutChart = ({ data, caption, subCaption }) => {
  const chartConfigs = {
    type: "doughnut3d", // The chart type
    width: "100%", // Width of the chart

    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "",
        subCaption: "",
        pieRadius: "60%",
        doughtnutRadius: "50%",
        theme: "fusion",
        startingAngle: "0",
      },
      // Chart Data
      data: data,
    },
  };
  return (
    <>
      <ReactFC {...chartConfigs} />
    </>
  );
};

export default DoughnutChart;

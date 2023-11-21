import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const BarChart = ({ data, caption, subCaption }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart

    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "",
        xAxisNameFontSize: "16px",
        labelFontSize: "12px",
        subCaption: "",
        xAxisName: "Stars",
        yAxisName: "Repos",
        numberPrefix: "",
        theme: "fusion",
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

export default BarChart;


import React from "react";
import Chart from "react-apexcharts";

export default function ChartViewer(props) {
  console.log("hey there",props);
  let a;
  
  React.useEffect(() => {
  }, []);
  const series = [
    {
      name: "series-1",
      data: props.data.map((a) => a.totalcount),
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], 
        opacity: 0.5,
      },
    },
    xaxis: {
      type: "category", 
    },

    yaxis: {
      categories: props.data.length ? props.data.map((a) => a.txCount) : [],
    },
  };
  return (
    <>
      <div>
       
        <Chart
          options={options}
        
          series={series}
          type="line"
          
        />
      </div>
    </>
  );
}
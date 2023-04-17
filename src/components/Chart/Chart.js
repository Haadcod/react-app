import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import ExpensesChart from "../Expenses/ExpensesChart";

const Chart = (props) => {
  const datapointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalmaximun = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalmaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

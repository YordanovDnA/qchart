import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import { PropTypes } from "prop-types";

const CustomChartJs = ({
  title: propsTitle,
  type: propsType,
  labels: propsLabels,
  data: propsData,
  min: propsMin,
  max: propsMax,
  controls: propsControls,
}) => {
  const chart = useRef();
  const [title] = useState(() => (propsTitle ? propsTitle : "Custom title"));
  const [type, setType] = useState(() => (propsType ? propsType : "line"));
  const [labels] = useState(() =>
    propsLabels
      ? propsLabels
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Nov",
          "Dec",
        ]
  );
  const [data] = useState(() =>
    propsData
      ? propsData
      : [1540, 1820, 2200, 1700, 1880, 1900, 2500, 2705, 2000, 1650, 2560, 2910]
  );
  const [min] = useState(() => (propsMin ? propsMin : undefined));
  const [max] = useState(() => (propsMax ? propsMax : undefined));
  const [controls] = useState(() => (propsControls ? propsControls : true));

  const ctx = useRef();

  useEffect(() => {
    chart.current = new Chart(ctx.current, {
      type,
      data: {
        labels,
        datasets: [
          {
            label: title,
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              time: {
                unit: "date",
              },
              gridLines: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min,
                max,
                maxTicksLimit: 5,
              },
              gridLines: {
                color: "rgba(0, 0, 0, .125)",
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, []);

  useEffect(() => {
    chart.current.config.type = type;
    chart.current.update();
  }, [type]);

  return (
    <React.Fragment>
      <div className=" m-1 card mb-4">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h5>
              <i className="fas fa-chart-line mr-1"></i>
              {title}
            </h5>
            {/* Render the controls if controls is true in the state */}
            {controls && (
              <div className="row">
                {/* Render select button for the chart type */}
                <select
                  onChange={(event) => setType(event.currentTarget.value)}
                  name="chartType"
                >
                  <option value="line">Line</option>
                  <option value="bar">Bar</option>
                  <option value="pie">Pie</option>
                  <option value="radar">Radar</option>
                  <option value="doughnut">Doughnut</option>
                </select>
              </div>
            )}
          </div>
        </div>
        {/* The actual chart */}
        <div className="card-body">
          <canvas ref={ctx} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomChartJs;

CustomChartJs.propTypes = {
  // Type of the chart: "line"(By default), "bar", "pie", "radar", "doughnut"
  type: PropTypes.oneOf(["line", "bar", "pie", "radar", "doughnut"]),
  // Title is the lable/name of the chart/data
  title: PropTypes.string,
  //Lables are the names underneath
  labels: PropTypes.arrayOf(PropTypes.string),
  //Data is an array of numbers represents each month(by default) or label of lables if provided.
  data: PropTypes.arrayOf(PropTypes.number),
  min: PropTypes.number,
  max: PropTypes.number,
};

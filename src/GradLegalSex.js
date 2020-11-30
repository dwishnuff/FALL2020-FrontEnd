/*
	Create a chart of graduation class 
	makeup by Legal Sex.  

	Uses props passing data from the apiData.js
	file when the component is called in the
	Grid.js file.

	This graph renders either a percentage 
	makeup chart or a chart of counts based
	on how it is called.  It is called twice
	in Grid.js in order to render both views
	of the data. 
*/

import React from "react";
import { Bar } from "react-chartjs-2";
import { applyColors } from "./apis/apiData";

export { GradLegalSex };

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 12,
  },
};

const options = (isPercent) => {
  let opts = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
    tooltips: {
      mode: "label",
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  //set max height to 100 if chart is in percentage
  if (isPercent) {
    opts.scales.yAxes[0].ticks.max = 100;
  }

  return opts;
};

const colors = [
  { backgroundColor: "rgb(252, 70, 26)" },
  { backgroundColor: "rgb(249, 153, 0)" },
  { backgroundColor: "rgb(192,192,192)" },
];

function GradLegalSex(props) {
  const data = applyColors(props.data, colors);

  return <Bar data={data} legend={legend} options={options(props.isPercent)} />;
}

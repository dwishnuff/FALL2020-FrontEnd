import React from "react";
import { Bar } from "react-chartjs-2";
import { applyColors } from "./apis/apiData";

export { GradLegalSex };

const legend = {
	display: true,
	position: "bottom",
	labels: {
		fontColor: "#323130",
		fontSize: 14,
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

	if (isPercent) {
		opts.scales.yAxes[0].ticks.max = 100;
	}
	return opts;
};

const colors = [
	{ backgroundColor: "rgb(249, 153, 0)" },
	{ backgroundColor: "rgb(192,192,192)" },
	{ backgroundColor: "rgb(252, 70, 26)" },
];

function GradLegalSex(props) {
	const data = applyColors(props.data, colors);

	return (
		<Bar data={data} legend={legend} options={options(props.isPercent)} />
	);
}

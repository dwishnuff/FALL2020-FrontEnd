import React from "react";
import { Bar } from "react-chartjs-2";

export { GradLegalSex };

const legend = {
	display: true,
	position: "bottom",
	labels: {
		fontColor: "#323130",
		fontSize: 14,
	},
};

const options = {
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

const colors = [
	{ backgroundColor: "rgb(249, 153, 0)" },
	{ backgroundColor: "rgb(192,192,192)" },
	{ backgroundColor: "rgb(252, 70, 26)" },
];

function GradLegalSex(props) {
	const data = props.data;
	data.datasets = data.datasets.map((obj) => {
		obj.fill = false;
		obj.backgroundColor = "rgb(255, 99, 132)";
		return obj;
	});

	return (
		// A react-chart hyper-responsively and continuously fills the available
		// space of its parent element automatically
		<div
			style={{
				width: "100%",
				height: "100%",
			}}
		>
			<Bar data={data} legend={legend} options={options} />
		</div>
	);
}

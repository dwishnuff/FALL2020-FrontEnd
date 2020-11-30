import React from "react";
import { Bar } from "react-chartjs-2";
import { applyColors } from "./apis/apiData";

const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
        mode: 'label',
    },
    responsive: true,
    maintainAspectRatio: false,
  }

const styling = [
    {
      type: "line",
      label: "Overall Starting Cohort",
      borderColor: "rgb(37, 45, 72)",
      borderWidth: 2,
      fill: false,
    },
    {
      type: "bar",
      label: "Overall Persisted",
      backgroundColor: "rgba(37, 45, 72, 0.8)",
    },
    {
      type: "line",
      label: "Female Starting Cohort",
      borderColor: "rgb(252, 70, 26)",
      borderWidth: 2,
      fill: false,
    },
    {
      type: "bar",
      label: "Female Persisted",
      backgroundColor: "rgba(252, 70, 26, 0.8)",
    },
    {
      type: "line",
      label: "Male Starting Cohort",
      borderColor: "rgb(249, 153, 0)",
      borderWidth: 2,
      fill: false,
    },
    {
      type: "bar",
      label: "Male Persisted",
      backgroundColor: "rgba(249, 153, 0, 0.8)",
    },
];

function Persistence(props) {
  let data = applyColors(props.data, styling);
  return <Bar data={data} legend={legend} options={options}/>;
}

export default Persistence;//MultiType;


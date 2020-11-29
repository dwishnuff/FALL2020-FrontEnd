import React from "react";
import { Bar } from "react-chartjs-2";
import "./GenderGrad.css";
import chartdata from "./data/grad_demographics.json";

const newdata = chartdata;

const data = {
  labels: newdata.years,
  datasets: [
    {
      label: "Male",
      data: newdata.legal_sex.Male,
      backgroundColor: "rgb(249, 153, 0)",
    },
    {
      label: "Legal Sex Unknown",
      data: newdata.legal_sex.Unknown,
      backgroundColor: "rgb(192,192,192)",
    },
    {
      label: "Female",
      data: newdata.legal_sex.Female,
      backgroundColor: "rgb(252, 70, 26)",
    },
  ],
};

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

const StackedBar = () => <Bar data={data} legend={legend} options={options} />;

export default StackedBar;

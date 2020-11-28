import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [2015, 2016, 2017, 2018, 2019],
  datasets: [
    {
      type: "line",
      label: "Overall Starting Cohort",
      borderColor: "rgb(0, 0, 0)",
      borderWidth: 2,
      fill: false,
      data: [361, 313, 382, 355, 315],
    },
    {
      type: "line",
      label: "Female Starting Cohort",
      borderColor: "rgb(252, 70, 26)",
      borderWidth: 2,
      fill: false,
      data: [59, 54, 65, 70, 58],
    },
    {
      type: "line",
      label: "Male Starting Cohort",
      borderColor: "rgb(249, 153, 0)",
      borderWidth: 2,
      fill: false,
      data: [294,254,312,280,252],
    },
    {
        type: "bar",
        label: "Overall Persisted",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        data: [124,153,211,243,0],
      },
    {
      type: "bar",
      label: "Female Persisted",
      backgroundColor: "rgb(252, 70, 26)",
      data: [18, 15, 35, 39, 0],
    },
    {
      type: "bar",
      label: "Male Persisted",
      backgroundColor: "rgb(249, 153, 0)",
      data: [103, 137, 173, 202, 0],
    },
  ],
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
    }
  }

const MultiType = () => <Bar data={data} options={options}/>;

export default MultiType;

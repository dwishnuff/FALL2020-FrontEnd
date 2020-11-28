import React from "react";
import { Bar } from "react-chartjs-2";
import chartdata from "./data/retention.json";

const newdata = chartdata;

const data = {
  labels: newdata.years.slice(1).slice(-5), //get the last 5 years of data with slice
  datasets: [
    {
      type: "line",
      label: "Overall Starting Cohort",
      borderColor: "rgb(37, 45, 72)",
      borderWidth: 2,
      fill: false,
      data: newdata.cohort_start_size.total.slice(1).slice(-5),
    },
    {
      type: "line",
      label: "Female Starting Cohort",
      borderColor: "rgb(252, 70, 26)",
      borderWidth: 2,
      fill: false,
      data: newdata.cohort_start_size.legal_sex.female.slice(1).slice(-5),
    },
    {
      type: "line",
      label: "Male Starting Cohort",
      borderColor: "rgb(249, 153, 0)",
      borderWidth: 2,
      fill: false,
      data: newdata.cohort_start_size.legal_sex.male.slice(1).slice(-5),
    },
    {
        type: "bar",
        label: "Overall Persisted",
        backgroundColor: "rgba(37, 45, 72, 0.8)",
        data: newdata.grad_or_persisted_cs.total.slice(1).slice(-5),
      },
    {
      type: "bar",
      label: "Female Persisted",
      backgroundColor: "rgba(252, 70, 26, 0.8)",
      data: newdata.grad_or_persisted_cs.legal_sex.female.slice(1).slice(-5),
    },
    {
      type: "bar",
      label: "Male Persisted",
      backgroundColor: "rgba(249, 153, 0, 0.8)",
      data: newdata.grad_or_persisted_cs.legal_sex.male.slice(1).slice(-5),
    },
  ],
};

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
    }
  }

const MultiType = () => <Bar data={data} legend={legend} options={options}/>;

export default MultiType;


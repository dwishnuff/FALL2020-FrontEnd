import React from 'react'
import { Line } from 'react-chartjs-2'
import chartdata from "./data/grad_demographics.json"

const newdata = chartdata;

const data = {
    labels: newdata.years,
    datasets: [
      {
        label: 'Asian',
        data: newdata.race_ethnicity.Asian,
        fill: false,
        backgroundColor: 'rgb(37, 45, 72)',
        borderColor: 'rgba(37, 45, 72, 0.5)',
      },
      {
        label: 'Black or African American',
        data: newdata.race_ethnicity.Black,
        fill: false,
        backgroundColor: 'rgb(249, 153, 0)',
        borderColor: 'rgba(249, 153, 0.5)',
      },
      {
        label: 'Hispanic or Latino',
        data: newdata.race_ethnicity.Hispanic,
        fill: false,
        backgroundColor: 'rgb(242, 119, 117)',
        borderColor: 'rgba(242, 119, 117, 0.5)',
      },
      {
        label: 'International',
        data: newdata.race_ethnicity.International,
        fill: false,
        backgroundColor: 'rgb(0, 109, 140)',
        borderColor: 'rgba(0, 109, 140, 0.5)',
      },
      {
        label: 'Two or More Races',
        data: newdata.race_ethnicity.Two,
        fill: false,
        backgroundColor: 'rgb(252, 70, 26)',
        borderColor: 'rgba(252, 70, 26, 0.5)',
      },
      {
        label: 'Unknown',
        data: newdata.race_ethnicity.Unknown,
        fill: false,
        backgroundColor: 'rgb(192,192,192)',
        borderColor: 'rgba(192,192,192, 0.5)',
      },
      {
        label: 'White',
        data: newdata.race_ethnicity.White,
        fill: false,
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
      }
    ],
  }
  
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
  
  const LineChart = () => (
    
      <Line data={data} legend={legend} options={options} />
    
  )
  
  export default LineChart
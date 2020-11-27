import React from 'react'
import { Bar } from 'react-chartjs-2'
import './GenderGrad.css'

 
const data = {
    labels: ['2015', '2016', '2017', '2018', '2019'],
    datasets: [
    
      {
        label: 'Male',
        data: [86, 95, 98, 130, 155],
        backgroundColor: 'rgb(249, 153, 0)',
      },
      {
        label: 'Legal Sex Unknown',
        data: [1, 2, 2, 1, 2],
        backgroundColor: 'rgb(192,192,192)',
      },
      {
        label: 'Female',
        data: [10, 19, 12, 15, 22],
        backgroundColor: 'rgb(252, 70, 26)' ,
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
  }
  
  const StackedBar = () => (
    
      
      <Bar data={data} legend={legend} options={options} />
   
  )
  
  export default StackedBar
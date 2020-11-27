import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
    labels: ['2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Asian',
        data: [11, 18, 18, 13, 24],
        fill: false,
        backgroundColor: 'rgb(37, 45, 72)',
        borderColor: 'rgba(37, 45, 72, 0.5)',
      },
      {
        label: 'Black or African American',
        data: [1, 4, 2, 1, 1],
        fill: false,
        backgroundColor: 'rgb(249, 153, 0)',
        borderColor: 'rgba(249, 153, 0.5)',
      },
      {
        label: 'Hispanic or Latino',
        data: [4, 8, 6, 15, 6],
        fill: false,
        backgroundColor: 'rgb(242, 119, 117)',
        borderColor: 'rgba(242, 119, 117, 0.5)',
      },
      {
        label: 'International',
        data: [6,4,7,18,17],
        fill: false,
        backgroundColor: 'rgb(0, 109, 140)',
        borderColor: 'rgba(0, 109, 140, 0.5)',
      },
      {
        label: 'Two or More Races',
        data: [2,4,6,10,10],
        fill: false,
        backgroundColor: 'rgb(252, 70, 26)',
        borderColor: 'rgba(252, 70, 26, 0.5)',
      },
      {
        label: 'Unknown',
        data: [7,8,9,12,9],
        fill: false,
        backgroundColor: 'rgb(192,192,192)',
        borderColor: 'rgba(192,192,192, 0.5)',
      },
      {
        label: 'White',
        data: [66,70,64,77,112],
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
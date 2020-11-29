import React from 'react'
import { Chart } from 'react-charts'
import { Line } from 'react-chartjs-2'

export { Benchmark, Benchmark2 };

function Benchmark() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
  return lineChart;
}

function Benchmark2(props) {
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
  }

  const data = props.data;
  data.datasets = data.datasets.map((obj) => {obj.fill = false; obj.backgroundColor = 'rgb(255, 99, 132)'; return obj});

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
}
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = props => {
  return (
    <Line
      {...props}
      datasetIdKey="id"
      data={{
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
          {
            id: 1,
            label: '',
            data: [5, 6, 7],
          },
          {
            id: 2,
            label: '',
            data: [3, 2, 1],
          },
        ],
      }}
    />
  );
};

export default LineChart;

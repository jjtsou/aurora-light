import { formatNumber } from './formatNumber';

const callback = (value) => formatNumber(value);

export const getChartConfig = (data) => ({
  data: {
    datasets: [
      {
        label: 'Price Chart',
        data,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointRadius: 0,
        borderWidth: 1,
      },
    ],
  },
  options: {
    lineHeightAnnotation: {
      always: true,
    },
    animation: {
      duration: 1700,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          distribution: 'linear',
        },
      ],
      yAxes: [
        {
          ticks: {
            callback,
          },
        },
      ],
    },
  },
});

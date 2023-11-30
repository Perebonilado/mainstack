import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

ChartJS.defaults.color = "#000";
ChartJS.defaults.borderColor = "#DBDEE5";
ChartJS.defaults.elements.point.pointStyle = false
ChartJS.defaults.elements.line.borderCapStyle = "round"
ChartJS.defaults.elements.line.borderWidth = 1
ChartJS.defaults.font.size = 12;

export const options: any = {
  responsive: true,
  scaleShowLabels: false,
  maintainAspectRatio: false,
  type: "line",
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        width: 0,
      },
    },
  },
  plugins: {
    legend: {
      position: "right",
      display: false,
    },

    title: {
      display: false,
      text: "",
    },
  },
  layout: {
    padding: 10,
  },
};

interface Props {
  chartData?: number[];
  labels: string[];
}

const TransactionsChart: FC<Props> = ({ labels, chartData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "USD",
        data: chartData,
        fill: false,
        borderColor: "#FF5403",
        tension: 600,
      },
    ],
  };

  return <Line options={options} data={data} width={"30%"} />;
};

export default TransactionsChart;

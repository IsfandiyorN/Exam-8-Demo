export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Statistic",
      data: [79, 140, 193, 175, 127, 154, 22],
      fill: true,
      tension: 0.7,
      backgroundColor: "rgba(14,165,233,0.4)",
      borderColor: "rgba(14,165,233,1)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

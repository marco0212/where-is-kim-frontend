import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";

export default function BarChart() {
  const chart = useRef(null);
  const records = [{ name: "Jeong", times: 6 }];

  useEffect(() => {
    const ctx = chart.current.getContext("2d");
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const data = [1, 6, 0, 6, 7];
    const backgroundColor = data.map(() => randomColor());

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderColor: "#666",
            borderWidth: 3,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }, [records]);

  return <canvas id="bar" ref={chart} />;
}

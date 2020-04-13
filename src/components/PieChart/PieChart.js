import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";

export default function PieChart({ records = [] }) {
  const chart = useRef(null);

  useEffect(() => {
    const ctx = chart.current.getContext("2d");
    const labels = records.map((record) => record.name);
    const data = records.map((record) => record.times);
    const backgroundColor = records.map(() => randomColor());

    new Chart(ctx, {
      type: "pie",
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
        legend: {
          display: false,
        },
      },
    });
  }, [records]);

  return <canvas id="pie" ref={chart} />;
}

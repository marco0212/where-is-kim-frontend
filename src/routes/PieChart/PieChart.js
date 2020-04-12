import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";
import styled from "styled-components";

export default function PieChart() {
  const chart = useRef(null);
  const records = [{ name: "Jeong", times: 6 }];

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

  return <Canvas id="myChart" ref={chart} />;
}

const Canvas = styled.canvas`
  flex: 1;
  max-width: 60%;
`;

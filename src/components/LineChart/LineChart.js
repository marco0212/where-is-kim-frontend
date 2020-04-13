import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";
import styled from "styled-components";

export default function LineChart() {
  const chart = useRef(null);

  useEffect(() => {
    const ctx = chart.current.getContext("2d");
    ctx.height = 300;
    const data = [1, 6, 0, 6, 7];

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            borderColor: randomColor(),
            fill: 0,
            lineTension: 0,
            data,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
          ],
        },
        labels: false,
      },
    });
  }, []);

  return (
    <Wrapper>
      <canvas id="line" ref={chart} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 200px;
`;

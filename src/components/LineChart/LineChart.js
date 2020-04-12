import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";
import styled from "styled-components";

export default function LineChart() {
  const chart = useRef(null);
  const records = [{ name: "Jeong", times: 6 }];

  useEffect(() => {
    const ctx = chart.current.getContext("2d");
    ctx.height = 300;
    const data = [1, 6, 0, 6, 7];

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            borderColor: randomColor(),
            fill: 0,
            lineTension: 0,
            data: [1, 5, 2],
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
              },
            },
          ],
        },
        labels: false,
      },
    });
  }, [records]);

  return (
    <Wrapper>
      <Canvas id="line" ref={chart} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 200px;
`;
const Canvas = styled.canvas`
  height: 300px;
`;
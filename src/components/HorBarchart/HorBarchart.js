import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";
import styled from "styled-components";

export default function HorBarchart({ records }) {
  const chart = useRef(null);
  const data = records.map((record) => record.workingTime);
  const labels = records.map((record) => record.username);
  const backgroundColor = data.map(() =>
    randomColor({
      luminosity: "bright",
      format: "rgba",
      alpha: 0.5,
    })
  );

  useEffect(() => {
    const ctx = chart.current.getContext("2d");
    ctx.height = 300;

    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels,
        datasets: [
          {
            backgroundColor,
            borderColor: "#666",
            borderWidth: 3,
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
          xAxes: [
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
  }, [data, labels, backgroundColor]);

  return (
    <Wrapper>
      <canvas id="line" ref={chart} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 200px;
`;

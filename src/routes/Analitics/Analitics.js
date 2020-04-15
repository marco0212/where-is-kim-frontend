import React from "react";
import styled from "styled-components";
import { Box } from "../Dashboard/Dashboard";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/Container";
import HorBarchart from "../../components/HorBarchart/Container";

export default function Analitics({ latingNumberPerEmployee, latePerDays }) {
  return (
    <Wrapper>
      <TopBox>
        <h3>금주 팀원 별 근무시간</h3>
        <HorBarchart />
      </TopBox>
      <Box>
        <h3>요일 별 지각 횟수</h3>
        <BarChart records={latePerDays} />
      </Box>
      <Box>
        <h3>직원 별 지각 횟수</h3>
        <PieChart records={latingNumberPerEmployee} />
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  min-height: 100%;
`;
const TopBox = styled(Box)`
  grid-column: 1/3;
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import { ButtonWrap } from "../../components/LoginForm/LoginForm";
import { workOnAPI, workOffAPI } from "../../api";

const kakao = window.kakao;

export default function Record({ teamName, teamLocation, userId, teamId }) {
  const { latitude, longitude } = teamLocation;
  let map;
  console.log(teamName);

  function checkUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: teamName,
      });
      marker.setMap(map);
    });
  }

  async function workOn() {
    const response = await workOnAPI(teamId, userId);
    const result = await response.json();
  }

  async function workOff() {
    const response = await workOffAPI(teamId, userId);
    const result = await response.json();
  }
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 4,
    };
    map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      title: teamName,
    });

    marker.setMap(map);
  }, [latitude, longitude]);

  return (
    <Wrapper>
      <Map id="map" />
      <RecordButtonWrap>
        <button onClick={checkUserLocation}>내 위치 확인하기</button>
        <button onClick={workOn}>출근 기록 요청하기</button>
        <button onClick={workOff}>퇴근 기록 요청하기</button>
      </RecordButtonWrap>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding: 15px 30px 0;
`;
const Map = styled.div`
  flex: 1;
`;
const RecordButtonWrap = styled(ButtonWrap)``;
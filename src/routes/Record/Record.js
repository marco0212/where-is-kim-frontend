import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ButtonWrap } from "../../components/LoginForm/LoginForm";

const kakao = window.kakao;

export default function Record({
  userId,
  teamId,
  teamName,
  teamLocation,
  isWorking,
  isWorkDone,
  workOn,
  workOff,
  isLoading,
}) {
  const { latitude, longitude } = teamLocation;
  const map = useRef();

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 4,
    };
    map.current = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      title: teamName,
    });

    marker.setMap(map.current);
  }, [latitude, longitude, teamName]);

  function checkUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: teamName,
      });

      marker.setMap(map.current);
    });
  }

  return (
    <Wrapper>
      <Map id="map" />
      <RecordButtonWrap>
        <button onClick={checkUserLocation}>내 위치 확인하기</button>
        {isWorkDone ? (
          <button disabled={true}>{isLoading ? "Loading" : "근무 완료"}</button>
        ) : isWorking ? (
          <button onClick={workOff.bind(null, teamId, userId)}>
            {isLoading ? "Loading" : "퇴근 기록 요청하기"}
          </button>
        ) : (
          <button onClick={workOn.bind(null, teamId, userId)}>
            {isLoading ? "Loading" : "출근 기록 요청하기"}
          </button>
        )}
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

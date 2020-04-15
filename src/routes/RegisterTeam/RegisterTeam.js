import React from "react";
import FormField from "../../components/FormField/FormField";
import { Link } from "react-router-dom";
import { ButtonWrap } from "../../components/LoginForm/LoginForm";
import { Wrapper } from "../Signup/Signup";

export default function RegisterTeam({
  onSubmit,
  teamName,
  latitude,
  longitude,
  workOnTime,
  workOffTime,
  fileInput,
}) {
  return (
    <Wrapper>
      <div>
        <h3>RESISTER TEAM</h3>
        <form onSubmit={onSubmit}>
          <FormField
            title="Team Name"
            type="text"
            controller={teamName}
            placeholder="Type your team name"
          />
          <FormField
            title="Latitude"
            type="text"
            controller={latitude}
            placeholder="Type team address (latitude)"
          />
          <FormField
            title="Longitude"
            type="text"
            controller={longitude}
            placeholder="Type team address (longitude)"
          />
          <FormField title="Work on Time" type="time" controller={workOnTime} />
          <FormField
            title="Work off Time"
            type="time"
            controller={workOffTime}
          />
          <legend style={{ fontSize: "16px", margin: "21px 0 10px" }}>
            Team Profile Picture
          </legend>
          <input type="file" ref={fileInput} />
          <ButtonWrap>
            <button>Resigter</button>
            <Link to="/">Back</Link>
          </ButtonWrap>
        </form>
      </div>
    </Wrapper>
  );
}

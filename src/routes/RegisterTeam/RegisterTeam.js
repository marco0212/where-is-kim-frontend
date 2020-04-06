import React from "react";
import FormField from "../../components/FormField";
import { Link } from "react-router-dom";
import { ButtonWrap } from "../../components/LoginForm/LoginForm";
import { Wrapper } from "../Signup/Signup";

export default function RegisterTeam({
  onSubmit,
  teamName,
  location,
  workOnTime,
  workOffTime,
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
            title="Location"
            type="text"
            controller={location}
            placeholder="Type team address"
          />
          <FormField title="Work on Time" type="time" controller={workOnTime} />
          <FormField
            title="Work off Time"
            type="time"
            controller={workOffTime}
          />
          <ButtonWrap>
            <button>Resigter</button>
            <Link to="/">Back</Link>
          </ButtonWrap>
        </form>
      </div>
    </Wrapper>
  );
}

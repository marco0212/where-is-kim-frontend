import React from "react";
import FormField from "../../components/FormField";
import styled from "styled-components";

export default function Participants({ email, onSubmit }) {
  return (
    <>
      <h3>Invite Team mate</h3>
      <Form onSubmit={onSubmit}>
        <FormField
          type="email"
          placeholder="Type the email of the invitees"
          controller={email}
        />
        <Button>Send</Button>
      </Form>
      <h3>Permissions</h3>
      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Level</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jeong</td>
            <td>
              <select>
                <option>admin</option>
                <option>normal</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button>Save</Button>
    </>
  );
}

const Form = styled.form`
  display: flex;
  margin-bottom: 30px;
  & > fieldset {
    flex: 1;
    & input {
      width: 100%;
    }
    margin-right: 15px;
  }
`;
const Table = styled.table`
  width: 100%;
  font-size: 16px;
  margin-bottom: 21px;
  & thead {
    background-color: #956496;
    color: #fff;
  }
  & td {
    padding: 10px 15px;
    border: 1px solid #ebebeb;
    &:first-child {
      width: 70%;
    }

    & select {
      width: 100%;
    }
  }
`;
const Button = styled.button`
  border: 0;
  vertical-align: top;
  line-height: 35px;
  color: #fff;
  background-color: #956496;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  padding: 0 30px;
`;

import styled from "styled-components";

const NotesSectionWrapper = styled.section`
  background: #F5F5F5;
  padding: 0 16px;
  font-size: 20px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      font-size: 16px;
      background: none;
      border: none;
    }
  }

`
export {NotesSectionWrapper}
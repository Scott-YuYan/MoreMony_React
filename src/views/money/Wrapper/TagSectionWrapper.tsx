import styled from "styled-components";

const TagSectionWrapper = styled.section`
  background-color: #FFF;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;

  > ol {

    margin: 0px -12px;

    > li {
      display: inline-block;
      background: #D9D9D9;
      border-radius: 18px;
      padding: 3px 18px;
      margin: 8px 12px;
      font-size: 14px;
      &.selected {
        background: #9b9b9b;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 12px;
  }
`

export {TagSectionWrapper}
import styled from "styled-components";

const LabelWrapper = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 12px;
    margin-right: 12px;

    > a {
      padding: 12px 16px 12px 12px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
  }
`
export default LabelWrapper;
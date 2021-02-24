import styled from "styled-components";
import React from "react";

const LabelWrapper = styled.ol`
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
`
type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FunctionComponent<Props> = (props) => {
    const {label,children, ...res} = props;//需要将label和children除外
    return (
        <LabelWrapper>
            <span>{props.label}</span>
            <input{...res}/>
        </LabelWrapper>
    );
}

export default Input;
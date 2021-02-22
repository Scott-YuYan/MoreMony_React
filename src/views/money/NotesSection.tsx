import styled from "styled-components";
import React, {useRef, useState} from "react";

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

const NotesSection: React.FunctionComponent = () => {
    const [note, setNote] = useState<string>('');
    //用useRef获取内容
    const refInput = useRef<HTMLInputElement>(null);
    const getInputValue = () => {
        if (refInput.current !== null) {
            console.log(refInput.current.value);
            setNote(refInput.current.value);
        }
    }
    return (
        <NotesSectionWrapper>
            <label>
                <span>备注</span>
                {/*受控组件*/}
                {/*<input type="text" placeholder="在这里添加备注" value={note}*/}
                {/*       onChange={(event) => {*/}
                {/*           console.log(event.target.value);*/}
                {/*           setNote(event.target.value);*/}
                {/*       }}/>*/}
                {/*非受控组件，不关注输入的过程*/}
                <input type="text" placeholder="在这里添加备注" defaultValue={note}
                       onBlur={getInputValue} ref={refInput}
                />
            </label>
        </NotesSectionWrapper>
    );
}

export default NotesSection;
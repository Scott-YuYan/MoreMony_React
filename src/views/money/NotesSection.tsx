import React, {useRef, useState} from "react";
import {NotesSectionWrapper} from "./Wrapper/NotesSectionWrapper";

type Props= {
    value: string;
    onchange: (note:string) => void;
}

const NotesSection: React.FunctionComponent<Props> = (props) => {
    //用useRef获取内容
    const refInput = useRef<HTMLInputElement>(null);
    const getInputValue = () => {
        if (refInput.current !== null) {
            props.onchange(refInput.current.value);
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
                <input type="text" placeholder="在这里添加备注" defaultValue={props.value}
                       onBlur={getInputValue} ref={refInput}
                />
            </label>
        </NotesSectionWrapper>
    );
}

export default NotesSection;
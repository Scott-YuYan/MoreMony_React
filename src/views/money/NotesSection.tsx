import React, {ChangeEventHandler, useRef, useState} from "react";
import {NotesSectionWrapper} from "./Wrapper/NotesSectionWrapper";
import Input from "components/Input";

type Props = {
    value: string;
    onchange: (note: string) => void;
}

const NotesSection: React.FunctionComponent<Props> = (props) => {
    //用useRef获取内容
    const refInput = useRef<HTMLInputElement>();
    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (refInput.current !== null) {
            props.onchange(event.target.value);
        }
    }
    return (
        <NotesSectionWrapper>
            {/*<label>*/}
            {/*非受控组件，不关注输入的过程*/}
            {/*    <input type="text" placeholder="在这里添加备注" defaultValue={props.value}*/}
            {/*           onBlur={onChange} ref={refInput}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*受控组件*/}
            <Input label='备注' type='text' placeholder="在这里添加备注" value={props.value}
                   onChange={onChange}/>
        </NotesSectionWrapper>
    );
}

export default NotesSection;
import React, {useState} from "react";
import {NumberPadSectionWrapper} from "./Wrapper/NumberPadSectionWrapper";

type Props = {
    value: number;
    onchange: (amount: number) => void;
    onOk?: () => void;//表示onOk函数为可选
}

const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    let output = props.value.toString();
    const setOutput = (output: string) => {
        let value;
        if (output.length <= 0) {
            value = 0
        } else if (output.length >= 16) {
            value = parseFloat(output.slice(0, 16));
        } else {
            value = parseFloat(output);
        }
        props.onchange(value);
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text !== null) {
            switch (text) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (output === '0') {
                        setOutput(text);
                    } else {
                        setOutput(output + text)
                    }
                    break;
                case '.':
                    if (output.indexOf('.') >= 0) {
                        return;
                    } else {
                        setOutput(output + text);
                    }
                    break;
                case '删除':
                    if (output.length <= 1) {
                        setOutput('0');
                    } else {
                        setOutput(output.slice(0, -1))
                    }
                    break;
                case '清空':
                    setOutput('0')
                    break;
                case 'OK':
                    if (props.onOk) {
                        props.onOk();
                    }
                    //todo
                    break;
            }
        }
    }
    return (
        <NumberPadSectionWrapper>
            <div className='output'>
                {output}
            </div>
            <div className='pad clearfix' onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='ok'>OK</button>
                <button className='zero'>0</button>
                <button>.</button>
            </div>
        </NumberPadSectionWrapper>
    );
}
export default NumberPadSection;
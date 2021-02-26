import React, {useState} from "react";
import {CategorySectionWrapper} from "./Wrapper/CategorySectionWrapper";
import styled from "styled-components";

type Props = {
    value: '-' | '+';
    onchange: (value: '-' | '+') => void;
}



const CategorySection: React.FunctionComponent<Props> = (props) => {
    const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
    const categoryMap = {'-': '支出', '+': '收入'}
    return (
            <CategorySectionWrapper>
                <ul>
                    {categoryList.map(c =>
                        <li key={c} className={props.value === c ? 'selected' : ''} onClick={() => {
                            props.onchange(c);
                        }}>
                            {categoryMap[c]}
                        </li>
                    )}
                </ul>
            </CategorySectionWrapper>
    );
};

export default CategorySection;
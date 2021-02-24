import Layout from "../components/Layout";
import React, {useState} from "react";
import Icons from "../components/Icons";
import WhiteSpace from "../components/WhiteSpace";
import Center from "../components/Center";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import LabelWrapper from "./money/Wrapper/LabelWrapper";
import useStage from "../hooks/useStage";

function Label() {
    const {tagIds, addTags} = useStage();
    return (
        <Layout>
            <LabelWrapper>
                {tagIds.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/label/' + tag.id}>
                            <span className='oneLine'>{tag.name}</span>
                            <Icons name={'right'}/>
                        </Link>
                    </li>
                )}
            </LabelWrapper>
            <WhiteSpace/>
            <WhiteSpace/>
            <WhiteSpace/>
            <Center>
                <Button onClick={addTags}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Label;
import Layout from "../components/Layout";
import React from "react";
import useState from "useStage";
import Icons from "../components/Icons";
import WhiteSpace from "../components/WhiteSpace";
import Center from "../components/Center";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import LabelWrapper from "./money/Wrapper/LabelWrapper";

function Label() {
    const {tagIds, addTags} = useState();
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
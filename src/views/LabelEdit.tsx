import React from "react";
import useTags from "../useStage";
import {
    useParams
} from "react-router-dom";
import Layout from "../components/Layout";
import Icons from "../components/Icons";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";
import {NotesSectionWrapper} from "./money/Wrapper/NotesSectionWrapper";
import Center from "../components/Center";
import WhiteSpace from "../components/WhiteSpace";

type Params = {
    id: string;
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 0;
`

const LabelEdit: React.FunctionComponent = (props) => {
    const {findTagsById} = useTags();
    let {id} = useParams<Params>();
    const tag = findTagsById(parseInt(id));
    return (
        <Layout>
            <Link to={'/label'}>
                <Topbar>
                    <Icons name={'left'}/>
                    <span>编辑标签</span>
                    <Icons name={''}/>
                </Topbar>
            </Link>
            <NotesSectionWrapper>
                <label>
                    <span>标签名：</span>
                    <input type='text' placeholder="输入标签名"/>
                </label>
            </NotesSectionWrapper>
            <WhiteSpace/>
            <WhiteSpace/>
            <WhiteSpace/>
            <WhiteSpace/>
            <WhiteSpace/>
            <WhiteSpace/>
            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};

export default LabelEdit;
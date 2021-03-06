import React from "react";
import useTags from "../hooks/useStage";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Icons from "../components/Icons";
import Button from "../components/Button";
import styled from "styled-components";
import Center from "../components/Center";
import WhiteSpace from "../components/WhiteSpace";
import Input from "../components/Input";

type Params = {
    id: string;
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 0;
  background-color: white;
`

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`

const BackButton = () => {
    window.history.back();
}

const LabelEdit: React.FunctionComponent = (props) => {
    const {findTagsById, updateTags, deleteTags} = useTags();
    let {id} = useParams<Params>();
    const tag = findTagsById(parseInt(id));
    if (tag) {
        return (
            <Layout>
                <Topbar>
                    <Icons name={'left'} onClick={BackButton}/>
                    <span>编辑标签</span>
                    <Icons name={''}/>
                </Topbar>
                <InputWrapper>
                    <Input label='标签名' type="text" placeholder="请输入标签名" value={tag.name}
                           onChange={(event) => {
                               updateTags(tag.id, {name: event.target.value})
                           }}
                    />
                </InputWrapper>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Center>
                    <Button onClick={() => {
                        deleteTags(tag.id)
                    }}>删除标签</Button>
                </Center>
            </Layout>
        );
    } else {
        return <Center>标签不存在</Center>
    }
};

export default LabelEdit;
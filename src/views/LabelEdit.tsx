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

const LabelEdit: React.FunctionComponent = (props) => {
    const {findTagsById, updateTags, deleteTags} = useTags();
    let {id} = useParams<Params>();
    console.log(id);
    const tag = findTagsById(parseInt(id));
    if (tag) {
        return (
            <Layout>
                <Link to={'/label'}>
                    <Topbar>
                        <Icons name={'left'}/>
                        <span>编辑标签</span>
                        <Icons name={''}/>
                    </Topbar>
                </Link>
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
        return <div>标签不存在</div>
    }
};

export default LabelEdit;
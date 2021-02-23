import Layout from "../components/Layout";
import React from "react";
import useState from "useStage";
import styled from "styled-components";
import Icons from "../components/Icons";
import WhiteSpace from "../components/WhiteSpace";
import Center from "../components/Center";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const LabelWrapper = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 12px;
    margin-right: 12px;

    > a {
      padding: 12px 16px 12px 12px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
  }
`

function Label() {
    const {tagIds, setTags} = useState();
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
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Label;
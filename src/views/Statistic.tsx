import React, {useState} from "react";
import CategorySection from "./money/CategorySection";
import Layout from "../components/Layout";
import {useRecords} from "../hooks/useRecord";
import useStage from "../hooks/useStage";
import styled from "styled-components";

const StaticWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 18px;
  > .note {
    margin-right: auto;
    margin-left: 20px;
    color: #999;
  }
`

function Statistic() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {getTagName} = useStage();
    const {records, setRecord} = useRecords();
    return (
        <Layout>
            <CategorySection value={category} onchange={(category) => {
                setCategory(category);
            }}/>
            <div>
                {records.map((record) => {
                    return (<StaticWrapper>
                        <div className='updateAt'>
                            {record.updateAt}
                        </div>

                        <div className="tags">
                            {record.tagIds.map((id) =>
                                <span>{getTagName(id)}</span>)
                            }
                        </div>
                        <div className="note">
                            {record.note}
                        </div>
                        <div className="amount">
                            ￥{record.amount}
                        </div>
                    </StaticWrapper>)
                })}
            </div>
        </Layout>
    );
}

export default Statistic;
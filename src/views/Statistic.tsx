import React, {ReactNode, useState} from "react";
import CategorySection from "./money/CategorySection";
import Layout from "../components/Layout";
import {RecordItem, useRecords} from "../hooks/useRecord";
import useStage from "../hooks/useStage";
import styled from "styled-components";
import dayjs from "dayjs";
import Center from "../components/Center";

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

const StaticHeader = styled.div`
  line-height: 18px;
  padding: 10px 16px;
  font-size: 18px;
`


function Statistic() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {getTagName} = useStage();
    const {records, setRecord} = useRecords();
    const recordsHash: { [K: string]: RecordItem[] } = {}
    const selectedRecord = records.filter((record) => record.category === category)

    selectedRecord.map((record) => {
        console.log("before" + record.createAt)
        const key = dayjs(record.createAt).format("YYYY-MM-DD");
        console.log("after" + key)
        if (!(key in recordsHash)) {
            recordsHash[key] = [];
        }
        recordsHash[key].push(record);
    })
    //对象转换为数组
    const sortedArray = Object.entries(recordsHash).sort((a, b) => {
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        else return 0;
    });

    return (
        <Layout>
            <CategorySection value={category} onchange={(category) => {
                setCategory(category);
            }}/>
            {
                //析构写法
                sortedArray.map(([date, records]) =>
                    <div key={date}>
                        <StaticHeader>
                            {date}
                        </StaticHeader>
                        <div>
                            {records.map((record) => {
                                return (<StaticWrapper key={record.createAt}>
                                    <div className="tags oneLine">
                                        {record.tagIds
                                            .map(id => <span key={id}>{getTagName(id)}</span>)
                                            .reduce((result, span, index, array) =>
                                                    result.concat(index < array.length-1 ? [span, ","] : [span])
                                                , [] as ReactNode[])
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
                    </div>
                )
            }
        </Layout>
    );
}

export default Statistic;
import React, {useState} from "react";
import CategorySection from "./money/CategorySection";
import Layout from "../components/Layout";
import {useRecords} from "../hooks/useRecord";
import useStage from "../hooks/useStage";


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
                    return <div>
                        {record.tagIds.map((id) =>
                            <span>{getTagName(id)}</span>)
                        }
                        {record.amount}
                        {record.updateAt}
                    </div>
                })}
            </div>
        </Layout>
    );
}

export default Statistic;
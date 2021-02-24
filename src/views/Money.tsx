import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import TagsSection from "./money/TagsSection";
import NotesSection from "./money/NotesSection";
import CategorySection from "./money/CategorySection";
import NumberPadSection from "./money/NumberPadSection";
import {useRecords} from "../hooks/useRecord";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+';

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0,
}


function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const onchange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected, ...obj
        })
    };
    const {records, addRecord, setRecord} = useRecords();
    const onSubmit = () => {
        if (addRecord(selected)) {
            alert("保存成功!");
            setSelected(defaultFormData);
        }
    }
    return (
        <MyLayout>
            {JSON.stringify(records)}
            <TagsSection value={selected.tagIds} onchange={(tagIds) =>
                onchange({tagIds: tagIds})}/>
            <NotesSection value={selected.note} onchange={(note) =>
                onchange({note: note})}/>
            <CategorySection value={selected.category} onchange={(category) => {
                onchange({category: category})
            }}/>
            <NumberPadSection value={selected.amount} onchange={(amount) => {
                onchange({amount: amount})
            }}
                              onOk={() => {
                                  onSubmit();
                              }}
            />
        </MyLayout>
    );
}

export default Money;
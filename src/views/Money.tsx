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

function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    const onchange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected, ...obj
        })
    };
    const {records, addRecord} = useRecords();
    const onSubmit = () => {
        addRecord(selected)
    }
    return (
        <MyLayout>
            {selected.tagIds.join(',')}
            {selected.note}
            {selected.category}
            {selected.amount}
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
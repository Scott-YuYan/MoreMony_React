import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import TagsSection from "./money/TagsSection";
import NotesSection from "./money/NotesSection";
import CategorySection from "./money/CategorySection";
import NumberPadSection from "./money/NumberPadSection";
import {type} from "os";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+';

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    return (
        <MyLayout>
            {selected.tags.join(',')}
            {selected.note}
            {selected.category}
            {selected.amount}
            <TagsSection value={selected.tags} onchange={
                (tags) => setSelected({
                    ...selected, tags: tags
                })
            }/>
            <NotesSection value={selected.note} onchange={
                (note) => {
                    setSelected({
                        ...selected, note: note
                    })
                }
            }/>
            <CategorySection value={selected.category} onchange={(category) => {
                setSelected({
                        ...selected, category: category
                    }
                )
            }}
            />
            <NumberPadSection value={selected.amount}
                              onchange={(amount: number) => {
                                  setSelected({
                                      ...selected, amount: amount
                                  })
                              }}
                              onOk={() => {
                              }}
            />
        </MyLayout>
    );
}

export default Money;
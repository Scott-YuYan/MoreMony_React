import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import getLocalTime from "../lib/getLocalTime";
import dayjs from "dayjs";

 export type RecordItem = {
    tagIds: number[],
    note: string,
    category: "+" | "-",
    amount: number,
    createAt: string //ISO时间
    updateAt: string
}

type PartOfItem = Omit<RecordItem, 'createAt' | 'updateAt'> //TypeScript提供的函数，用以去掉某个类型中的某个属性

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    const addRecord = (partOfRecord: PartOfItem) => {

        if (partOfRecord.tagIds.length < 1) {
            alert("请选择标签");
            return false;
        }

        if (partOfRecord.amount <= 0) {
            return false;
        }

        const record = {
            ...partOfRecord,
            createAt: dayjs(getLocalTime()).format('YYYY-MM-DD'),
            updateAt: dayjs(getLocalTime()).format('YYYY-MM-DD'),
        }
        setRecords([...records, record]);
        return true;
    }

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem("records") || '[]'));
    }, [])

    const setRecord = useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records]);
    return {records, addRecord, setRecord}
}
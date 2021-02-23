import {useState} from "react";
import createId from "lib/createId";

const initState = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]

const useTags = () => {//封装一个自定义的Hook接口
    const [tags, setTags] = useState<{ id: number; name: string }[]>(initState);
    return {
        tagIds: tags,
        setTags: setTags
    }
}
export default useTags;
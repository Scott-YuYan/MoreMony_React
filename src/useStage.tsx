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
    const findTagsById = (id: number) => {
        return tags.filter((tag) => tag.id === id)[0];
    }
    const findTagIndexById = (id: number) => {
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                return i;
            }
        }
        return -1;
    };

    const updateTags = (id: number, obj: { name: string }) => {
        setTags(tags.map(
            tag => (tag.id === id) ? {id: id, name: obj.name} : tag
        ));
    };

    const deleteTags = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    return {
        tagIds: tags,
        setTags: setTags,
        findTagsById: findTagsById,
        findTagIndexById: findTagIndexById,
        updateTags: updateTags,
        deleteTags: deleteTags
    }
}
export default useTags;
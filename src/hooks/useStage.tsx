import {useEffect, useState} from "react";
import createId from "lib/createId";
import {useUpdate} from "./useUpdate";

const useStage = () => {//封装一个自定义的Hook接口
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localStorageTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localStorageTags.length === 0) {
            localStorageTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'}
            ];
        }
        setTags(localStorageTags);
    }, [])//如果deps什么都不写，则会在第一次渲染时执行

    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])

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

    const addTags = () => {
        const newTagName = window.prompt("请选择需要添加的标签");
        if (newTagName !== null && newTagName !== '') {
            setTags([...tags, {id: createId(), name: newTagName}])
        }
    };

    const getTagName = (id: number) => {
        const tag = tags.filter(tag => tag.id === id)[0];
        if (tag){
            return tag.name
        }else {
            return ''
        }
    };

    return {
        tagIds: tags,
        setTags: setTags,
        findTagsById: findTagsById,
        findTagIndexById: findTagIndexById,
        updateTags: updateTags,
        deleteTags: deleteTags,
        addTags: addTags,
        getTagName: getTagName
    }
}
export default useStage;

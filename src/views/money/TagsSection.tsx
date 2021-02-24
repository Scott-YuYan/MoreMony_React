import React from "react";
import useState from 'hooks/useStage';
import {TagSectionWrapper} from "./Wrapper/TagSectionWrapper";
import createId from "lib/createId";

type Props = {
    value: number[];
    onchange: (selected: number[]) => void
}

const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tagIds, setTags} = useState();
    const selectedTags = props.value;
    const addTags = () => {
        const newTagName = window.prompt("请选择需要添加的标签");
        if (newTagName !== null) {
            setTags([...tagIds, {id: createId(), name: newTagName}])
        }
    };
    const onToggleTag = (tagId: number) => {
        if (selectedTags.indexOf(tagId) >= 0) {
            //如果tag被选中，则取消该选中，需要将其他选中被选中的标签加到选中的数组中
            props.onchange(selectedTags.filter(t => (t !== tagId)));
        } else {
            props.onchange([...selectedTags, tagId]);
        }
    };

    const selectedStyle = (tagId: number) => {
        return selectedTags.indexOf(tagId) >= 0 ? 'selected' : '';
    }
    return (
        <TagSectionWrapper>
            <ol>{tagIds.map((tag) =>
                <li key={tag.id} onClick={() => {
                    onToggleTag(tag.id)
                }} className={selectedStyle(tag.id)}>{tag.name}</li>
            )
            }
            </ol>
            <button onClick={addTags}>增加标签</button>
        </TagSectionWrapper>
    );
};


export default TagsSection;
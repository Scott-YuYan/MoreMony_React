import React from "react";
import useState from 'useStage';
import {TagSectionWrapper} from "./Wrapper/TagSectionWrapper";

type Props = {
    value: string[];
    onchange: (selected: string[]) => void
}

const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags,setTags} = useState();
    const selectedTags = props.value;
    const addTags = () => {
        const newTagName = window.prompt("请选择需要添加的标签");
        if (newTagName !== null) {
            setTags([...tags, newTagName])
        }
    };
    const onToggleTag = (tag: string) => {
        if (selectedTags.indexOf(tag) >= 0) {
            //如果tag被选中，则取消该选中，需要将其他选中被选中的标签加到选中的数组中
            props.onchange(selectedTags.filter(t => (t !== tag)));
        } else {
            props.onchange([...selectedTags, tag]);
        }
    };

    const selectedStyle = (tag:string)=>{
        return selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
    }
    return (
        <TagSectionWrapper>
            <ol>{tags.map((tag) =>
                <li key={tag} onClick={() => {
                    onToggleTag(tag)
                }} className={selectedStyle(tag)}>{tag}</li>
            )
            }
            </ol>
            <button onClick={addTags}>增加标签</button>
        </TagSectionWrapper>
    );
};


export default TagsSection;
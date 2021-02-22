import styled from "styled-components";
import React, {useState} from "react";

const TagSectionWrapper = styled.section`
  background-color: #FFF;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;

  > ol {

    margin: 0px -12px;

    > li {
      display: inline-block;
      background: #D9D9D9;
      border-radius: 18px;
      padding: 3px 18px;
      margin: 8px 12px;
      font-size: 14px;
      &.selected {
        background: #9b9b9b;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 12px;
  }
`

const TagsSection: React.FunctionComponent = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const addTags = () => {
        const newTagName = window.prompt("请选择需要添加的标签");
        if (newTagName !== null) {
            setTags([...tags, newTagName])
        }
    };
    const onToggleTag = (tag: string) => {
        if (selectedTags.indexOf(tag) >= 0) {
            //如果tag被选中，则取消该选中，需要将其他选中被选中的标签加到选中的数组中
            setSelectedTags(selectedTags.filter(t => (t !== tag)));
        } else {
            setSelectedTags([...selectedTags, tag]);
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
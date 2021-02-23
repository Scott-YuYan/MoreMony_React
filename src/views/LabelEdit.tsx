import React from "react";
import useTags from "../useStage";
import {
    useParams
} from "react-router-dom";

type Params = {
    id: string;
}

const LabelEdit: React.FunctionComponent = (props) => {
    const {findTagsById} = useTags();
    let {id} = useParams<Params>();
    const tag = findTagsById(parseInt(id));
    return (
        <h1>{tag.name}</h1>
    );
};

export default LabelEdit;
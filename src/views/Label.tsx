import Layout from "../components/Layout";
import React from "react";
import useState from "../useStage";

function Label() {
    const {tags, setTags} = useState();
    return (
        <Layout>
            {
                <ol>
                    {tags.map(tag =>
                        <li key={tag}>{tag}</li>
                    )}
                </ol>
            }
        </Layout>
    );
}

export default Label;
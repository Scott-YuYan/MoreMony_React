import Layout from "../components/Layout";
import React from "react";
import useState from "../useStage";

function Label() {
    const {tags,setTags} = useState();
    return (
        <Layout>
            <h2>标签</h2>
        </Layout>
    );
}

export default Label;
import React from "react";
import {Link} from "gatsby";

const postPreviewStyle = {
    border: "1px solid #afafaf",
    padding: "1.5rem 0.5rem",
    borderRadius: "5px",
    margin: "1rem 0",
}

const PostPreview = ({ title, author, topic }) => {
    return (
        <div style={postPreviewStyle}>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>Topic: {topic}</p>
            <Link to = {`/${title}`}>Read Post</Link> {/*add this line*/}
        </div>
    )
}

export default PostPreview;

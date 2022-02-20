import React, { useState } from 'react'
import { connect } from "react-redux";
import { addComment } from "../../redux/post/post.actions"

const CommentForm = ({ addComment, postId }) => {
    const [text, setText] = useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addComment(postId, { text })
            setText("")
        }}>
            <textarea name="text" placeholder="Comment..." value={text} onChange={(e) => setText(e.target.value)} className="comment-form-textarea" required ></textarea>
            <button type="submit" class="upload-btn">Post</button>
        </form>
    )
}

export default connect(null, { addComment })(CommentForm)
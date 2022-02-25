import React, { useState } from 'react'
import { connect } from "react-redux";
import { addComment } from "../../redux/post/post.actions"

const CommentForm = ({ addComment, postId }) => {
    const [text, setText] = useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addComment(postId, text)
            setText("")
        }} className="d-flex flex-column gap-3 mb-2">
            <textarea name="text" rows="4" placeholder="Comment..." value={text} onChange={(e) => setText(e.target.value)} className="comment-form-textarea" required ></textarea>
            <button type="submit" class="upload-btn">Post</button>
        </form>
    )
}

export default connect(null, { addComment })(CommentForm)
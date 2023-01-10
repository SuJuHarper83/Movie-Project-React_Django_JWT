import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { axios } from "axios";
import { useState } from "react";

const AddComment = (props) => {

    const [user, token] = useAuth();
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            let NewCommentObject = {
                name: name,
                comment: comment,
            };

            async function response() {
                await axios.post("api/movie/", NewCommentObject, {headers: {Authorization: "Bearer " + token}});
            props.NewPostProperty(NewCommentObject)
            
            useNavigate ("/");
                }
            console.log(NewCommentObject);
            } catch (error) {
            console.log(error.message);
        }
    }

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="name" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <label>Post</label>
            <input type="comment" value={comment} onChange={(event) => setComment(event.target.value)} />
            <button type="post" className="button">Post</button>
        </div>
    </form>
    );

}

export default AddComment

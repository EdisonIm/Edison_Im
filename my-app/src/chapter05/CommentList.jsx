import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "남태호",
        comment: "안녕하세요. 고통 담당자입니다.",        
    },
    {
        name: "전정호",
        comment: "와이어프레임 재미있어요~!",
    },
    {
        name: "임병성",
        comment: "제가 개발을 하고 있어요!!!",
    },
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />                    
                );
            })}            
        </div>
    );
}

export default CommentList;

import { PLACEHOLDER } from "../images"
// import like from "./like.svg"
import { ReactComponent as Like } from "./like.svg";
import { ReactComponent as Edit } from "./edit.svg"
import { ReactComponent as Delete } from "./trash.svg"
// import { useState } from "react";
import './POST.css';

export const POST = ({
    liked = false,
    title,
    description,
    image = PLACEHOLDER,
    likePost,
    deletePost,
    selectPost,
}) => {

    const customFilling = liked ? 'crimson' : 'black';

    return (
        <div className="postBlock">
            <div className="postBodyPart">
                <div className="postBlockImage">
                    <img src={image ? image : PLACEHOLDER} alt="" width="250px" className="postBlockImageImg" />
                </div>
                <div className="postBlockTitle">{title}</div>
                <div className="postDescription">
                    {description.length > 80 ? (
                        <>
                            {`${description.slice(0, 81)}...`}
                            <button className="postBlockElse" >Подробнее</button>
                        </>
                    ): description}
                </div>
            </div>
            <div className="postActions">
                <button onClick={likePost} className="likebtn">
                    {/* <img src={like} className="like" fill={customFilling}/> */}
                    <Like className="actionIcon" fill={customFilling}/>
                </button>
                <div className="editNDelete">
                    <button onClick={selectPost} className="editBtn">
                        <Edit className="actionIcon end" />                        
                    </button>
                    <button onClick={deletePost} className="deleteBtn">
                        <Delete className="actionIcon end" />
                    </button>
                </div>         
            </div>

        </div>
    )
}
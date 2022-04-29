import { PLACEHOLDER } from "./images"
// import like from "./like.svg"
import { ReactComponent as Like } from "./like.svg";
import { useState } from "react";
import './POST.css';

export const POST = ({ liked = false, title, description, image = PLACEHOLDER}) => {

    const [isLiked, setIsLiked] = useState(liked)

    const customFilling = isLiked ? 'crimson' : 'black';

    return (
        <div className="postBlock">
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
            <button onClick={() => setIsLiked(!isLiked)} className="likebtn">
                {/* <img src={like} className="like" fill={customFilling}/> */}
                <Like className="like" fill={customFilling}/>
            </button>
        </div>
    )
}
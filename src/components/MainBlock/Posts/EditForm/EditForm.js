// import React from 'react'
import "./EditForm.css"

import React, { useState } from 'react'
import { ReactComponent as Cancel } from '../postsAllHeader/AddForm/cancel.svg'
import { setPostsToLocalStorage } from '../../../../utils/helpers'
import WHITE_BEAR from "../../SideBar/User/white_bear.jpg"

export const EditForm = ({ setShowEditForm, blogPosts, setBlogPosts, selectedPost}) => {

    const [postTitle, setPostTitle] = useState(selectedPost?.title);
    const [postDesc, setPostDesc] = useState(selectedPost?.description);

    const handlePostTitleChange = (e) => {
        setPostTitle(e.target.value)
    }
    const handlePostDescChange = (e) => {
        setPostDesc(e.target.value)
    }

    const changePost = (e) => {
        e.preventDefault();
        const changedPost = {
            // id: selectedPost.id,
            // title: postTitle,
            // description: postDesc,
            // liked: selectedPost.liked,
            // image: selectedPost.image,

            ...selectedPost,
            title: postTitle,
            description: postDesc,
        };

        // blogPosts[changedPost.id - 1] = changedPost
        // const updatedPosts = [...blogPosts];

        const updatedPosts = blogPosts.map((post) => {
            if (post.id === changedPost.id)
                return changedPost
                return post
        })

        setBlogPosts(updatedPosts);
        setPostsToLocalStorage(updatedPosts);
        setShowEditForm(false);
    }

    const editPost = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div onClick={() => setShowEditForm(false)} className="overlay"></div>
            <form className="addForm" onSubmit={changePost}>
                <button className='addPostFormCancelBtn' onClick={() => setShowEditForm(false)}>
                    <Cancel />
                </button>
                <h2>Редактирование поста</h2>
                <div>
                    <input
                        className='addFormInput title'
                        type="text"
                        name='postTitle'
                        placeholder='Заголовок поста'
                        value={postTitle}
                        onChange={handlePostTitleChange}
                        maxLength="20"
                        required
                    />
                </div>
                <div>
                    <textarea
                        className='addFormInput desc'
                        name="postDescription"
                        placeholder='Описание поста'
                        value={postDesc}
                        onChange={handlePostDescChange}
                        rows="8"
                        maxLength="300"
                        required
                    />        
                </div>
                <div>
                    <button className='addPostBtn' type='submit' >
                        Изменить пост
                    </button>
                </div>
            </form>
        </>
    )
}

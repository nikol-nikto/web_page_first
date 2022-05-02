import React, { useState } from 'react'
import "./AddForm.css"
import { ReactComponent as Cancel } from './cancel.svg'
import { setPostsToLocalStorage } from '../../../../../utils/helpers'
import WHITE_BEAR from "../../../SideBar/User/white_bear.jpg"

export const AddForm = ({ setShowAddForm, blogPosts, setBlogPosts }) => {

    const [postTitle, setPostTitle] = useState('');
    const [postDesc, setPostDesc] = useState('');

    const handlePostTitleChange = (e) => {
        setPostTitle(e.target.value)
    }
    const handlePostDescChange = (e) => {
        setPostDesc(e.target.value)
    }
    
    const createPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: blogPosts.length + 1,
            title: postTitle,
            description: postDesc,
            liked: false,
            image: WHITE_BEAR,
        };

        const updatedPosts = [...blogPosts, newPost];

        setBlogPosts(updatedPosts);
        setPostsToLocalStorage(updatedPosts);
        setShowAddForm(false);
    }

    return (
        <>
        <div onClick={() => setShowAddForm(false)} className="overlay"></div>
            <form className="addForm" onSubmit={createPost}>
                <button className='addPostFormCancelBtn' onClick={() => setShowAddForm(false)}>
                    <Cancel />
                </button>
                <h2>Создание поста</h2>
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
                        Добавить пост
                    </button>
                </div>
            </form>
        </>
    )
}

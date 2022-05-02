import React, { useState } from 'react'
import { POST } from './Post/POST';
// import { IMAGE_1 } from './images';
import "./postsAll.css"
import { postsARRAY } from "../../../utils/constants"
import { PostsAllHeader } from './postsAllHeader/postsAllHeader';
import { setPostsToLocalStorage } from '../../../utils/helpers';
import { EditForm } from './EditForm/EditForm';

export const PostsAll = () => {

    const [blogPosts, setBlogPosts] = useState(
        JSON.parse(localStorage.getItem('blogPosts')) || postsARRAY
    );

    const likePost = (pos) => {
        const updatedPosts = [...blogPosts];

        updatedPosts[pos].liked = !updatedPosts[pos].liked;

        setPostsToLocalStorage(updatedPosts)
        setBlogPosts(updatedPosts);
    }

    const deletePost = (postId) => {
        const isDelete = window.confirm('Вы уверены, что хотите удалить пост?');
        if (isDelete) {
            const updatedPosts = blogPosts.filter((post) => {
                return post.id !== postId
            })

            setPostsToLocalStorage(updatedPosts)
            setBlogPosts(updatedPosts);

        }
    }

    const [selectedPost, setSelectedPost] = useState();
    const [showEditForm, setShowEditForm] = useState(false);

    const selectPost = (pos) => {
        setSelectedPost(blogPosts[pos]);
        setShowEditForm(true);
    };

    const editPost = (pos) => {

    }

    return(
    <div className='body'>
        <div className='allPosts'>
            <PostsAllHeader  setBlogPosts={setBlogPosts} blogPosts={blogPosts} />
            {
                blogPosts.map((post, pos) => {
                    return (
                        <POST
                            image={post.image}
                            title={post.title}
                            description={post.description}
                            liked={post.liked}
                            likePost={() => likePost(pos)}
                            editPost={() => editPost(post.id)}
                            deletePost={() => deletePost(post.id)}
                            selectPost={() => selectPost(pos)}
                            key={post.id}
                        /> 
                    )
                })
            }
        </div>
        { showEditForm && (
            <EditForm
                selectedPost={selectedPost}
                setShowEditForm={setShowEditForm}
                setBlogPosts={setBlogPosts}
                blogPosts={blogPosts}
            />
        )};
    </div>
    )
}

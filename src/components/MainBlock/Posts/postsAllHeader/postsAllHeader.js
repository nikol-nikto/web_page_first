import React, { useState } from 'react'
import "./postsAllHeader.css"
import { SearchForm } from './SearchForm/SearchForm'
import { AddForm } from './AddForm/AddForm'

export const PostsAllHeader = ({ blogPosts, setBlogPosts }) => {

    const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="headPost">
        <div className="headPostTitle">Posts</div>
        <div className="headPostSearchNCreate">
            <div className="headPostCreate">
                <button onClick={() => setShowAddForm(true)} className='showAddPostBtn'>
                    Создать пост
                </button>
                {/* <AddForm /> */}
            </div>
            <div className="headPostSearch">
                <SearchForm />
            </div>
            { showAddForm && (
                <AddForm
                    setBlogPosts={setBlogPosts}
                    blogPosts={blogPosts}
                    setShowAddForm={setShowAddForm}
                />
            )}
        </div>
    </div>
  )
}

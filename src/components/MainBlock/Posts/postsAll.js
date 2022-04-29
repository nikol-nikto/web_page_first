import React from 'react'
import { POST } from './POST';
import { IMAGE_1 } from './images';
import "./postsAll.css"

export const PostsAll = () => {
    return(
    <div className='body'>
        <div className='allPosts'>
            <div className="headPost">Posts</div>
            <POST title="Tittle 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eum."/>
            <POST image={IMAGE_1} title="Tittle 2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores soluta corporis minus nisi aperiam rerum tenetur nemo, quaerat alias quo officiis minima cumque? Nihil quaerat dolore voluptas sint, voluptatum quos esse tempora maiores culpa, voluptatibus tenetur aut, architecto expedita nesciunt!"/>
            <POST image={IMAGE_1} title="Tittle 3" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est natus reiciendis magni quaerat iste perferendis blanditiis ad repellendus cumque neque?" liked/> 
            <POST image={IMAGE_1} title="Tittle 2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores soluta corporis minus nisi aperiam rerum tenetur nemo, quaerat alias quo officiis minima cumque? Nihil quaerat dolore voluptas sint, voluptatum quos esse tempora maiores culpa, voluptatibus tenetur aut, architecto expedita nesciunt!"/>           
            <POST title="Tittle 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eum."/>
            <POST image={IMAGE_1} title="Tittle 3" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est natus reiciendis magni quaerat iste perferendis blanditiis ad repellendus cumque neque?" liked/>
            <POST image={IMAGE_1} title="Tittle 2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores soluta corporis minus nisi aperiam rerum tenetur nemo, quaerat alias quo officiis minima cumque? Nihil quaerat dolore voluptas sint, voluptatum quos esse tempora maiores culpa, voluptatibus tenetur aut, architecto expedita nesciunt!"/>          
        </div>

    </div>
    )
}

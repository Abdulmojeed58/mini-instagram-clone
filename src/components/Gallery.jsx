import React, { useEffect } from "react";
import getPhotoUrl from "get-photo-url";
import { db } from "../dexie";
import { useLiveQuery } from "dexie-react-hooks";

export default function Gallery() {

    const picture = useLiveQuery(()=>db.gallery.toArray(), [])


    async function addPost() {

        db.gallery.add({
            url: await getPhotoUrl('#add-btn')
        })
    }

    const removePost = (id)=>{
        db.gallery.delete(id)
    }


    const posts = picture?.map((post)=>(
        <div key={post.id} className="image-container">
            <img src={post.url} alt='majy' />
            <div>
                <button onClick={()=>removePost(post.id)}>Delete</button>
            </div>
        </div>
    ))


    const noPost = (
        <div className="no-post">
            <div className="camera">
                <i class="fa-solid fa-camera"></i>
            </div>

            <h2>No Posts Yet</h2>
        </div>
    )

    return (
        <div className="gallery">
            <div className="top">
                <div>
                    <i class="fa-regular fa-address-card"></i>
                    <h3>POSTS</h3>
                </div>
            </div>
            
            { picture?.length ? 
                <div className="photos">
                    {posts} 
                </div> :
                noPost
            }

            <div className="add-btn">
                <input type='file' accept="image/*" id='add-btn' />
                <label htmlFor="add-btn" onClick={addPost}>
                    <i className="fa-solid fa-square-plus"></i>
                </label>
            </div>
        </div>
    )
}
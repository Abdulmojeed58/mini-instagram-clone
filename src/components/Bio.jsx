import React, { useEffect } from "react";
import image from '../image/instagram-img.svg'
import getPhotoUrl from "get-photo-url";
// import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexie";

export default function Bio() {

    const [edit, setEdit] = React.useState(false)
    const [input, setInput] = React.useState({
        name: '',
        title: ''
    })

    const [profilePhoto, setProfilePhoto] = React.useState(image)

    const [profile, setProfile] = React.useState({
        name: 'Username',
        title: 'Bio'
    })


    // //////////////////////////////
    useEffect(()=>{
        const setData = async ()=>{
            const getData = await db.bio.get('info')
            const profilePhoto = await db.bio.get('profilePhoto')
            getData && setProfile(getData)
            profilePhoto && setProfilePhoto(profilePhoto)
        }
        setData()
    }, [])
    // console.log(db)

    function saveProfile(e) {
        setInput(prevInput=>(
            {
                ...prevInput,
                [e.target.name]: e.target.value
            }
        ))
    }
    
    async function saveInfo() {
        setEdit(false)
        setProfile({name:input.name, title:input.title})
        

        ///////////////////////////
        await db.bio.put({name:input.name, title:input.title}, 'info')
        // await db.bio.put({name:input.name, title:input.title}, 'info')

    }


    async function updatePhotoUrl() {
        const newProfilePhoto = await getPhotoUrl('#bioImage')
        setProfilePhoto(newProfilePhoto)

        await db.bio.put(newProfilePhoto, 'profilePhoto')
    }

    const form = (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type='text' name='name' value={input.name} onChange={(e)=>saveProfile(e)}  defaultValue='Username'/>
            
            <input type='text' name='title' value={input.title} onChange={(e)=>saveProfile(e)} />

            <button 
                className="cancel"
                onClick={()=>setEdit(false)}
            >
                Cancel
            </button>

            <button type="submit" 
                className="save" 
                onClick={saveInfo}
            >
                Save
            </button>
        </form>
    )

    const bioInfo = (
        <button className="edit-btn" onClick={()=>setEdit(true)}>Edit profile</button>
    )

    return (
        <div className="bio">
            <div className="bio-image">
                <input type="file" accept="image/*" id="bioImage" />
                <label htmlFor="bioImage" onClick={updatePhotoUrl}>
                    <img src={profilePhoto} alt="instagram-icon" />
                </label>
            </div>
            <div className="bio-info">
                <h2 className="name">{profile.name}</h2>
                <p className="bio-title">{profile.title}</p>
                {edit ? form : bioInfo}
            </div>
        </div>
    )
}
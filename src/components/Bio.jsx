import React from "react";
import image from '../image/instagram-img.svg'
import getPhotoUrl from "get-photo-url";

export default function Bio() {

    const [edit, setEdit] = React.useState(false)
    const [input, setInput] = React.useState({
        name: '',
        title: ''
    })

    const [profilePhoto, setProfilePhoto] = React.useState(image)

    const [profile, setProfile] = React.useState({
        name: 'Ayolax',
        title: 'Frontend Developer (ReactJs)'
    })

    function saveProfile(e) {
        setInput(prevInput=>(
            {
                ...prevInput,
                [e.target.name]: e.target.value
            }
        ))
    }

    async function updatePhotoUrl() {
        const newProfilePhoto = await getPhotoUrl('#bioImage')
        setProfilePhoto(newProfilePhoto)
        // console.log(setProfilePhoto)
    }

    const form = (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type='text' name='name' value={input.name} onChange={(e)=>saveProfile(e)}/>
            <input type='text' name='title' value={input.title} onChange={(e)=>saveProfile(e)} />

            <button 
                className="cancel"
                onClick={()=>setEdit(false)}
            >
                Cancel
            </button>

            <button type="submit" 
                className="save" 
                onClick={()=>{
                    setEdit(false)
                    setProfile({name:input.name, title:input.title})
                }}
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
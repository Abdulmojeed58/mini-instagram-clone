import React from "react";
import photo from "../image/ayoola mojeed (@ayo_mj) • Instagram photos and videos_files/56862479_1041824576205511_6011401351612544663_n.jpg"

export default function Gallery() {
    return (
        <div className="gallery">
            <div className="top">
                <div>
                    <i class="fa-regular fa-address-card"></i>
                    <h3>POSTS</h3>
                </div>
            </div>

            <div className="photos">
                <div>
                    <img src={photo} alt='majy' />
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <img src={photo} alt='majy' />
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <img src={photo} alt='majy' />
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <img src={photo} alt='majy' />
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <img src={photo} alt='majy' />
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
                
            </div>

            <div className="add-btn">
                <input type='file' accept="image/*" id='add-btn' />
                <label htmlFor="add-btn">
                    <i className="fa-solid fa-square-plus"></i>
                </label>
            </div>
        </div>
    )
}
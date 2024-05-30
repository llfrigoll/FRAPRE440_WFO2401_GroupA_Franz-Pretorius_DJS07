import React from 'react'
import memesData from '../memesData.jsx'

//Form section of the app
export default function Meme() {

    //Variable holding the destructured current state and its dispatch function
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg")

    //Function that grabs all the memes from the array, generates a random number and uses that number to select a random meme from the array,
    //thereafter it sets the current state to that random meme
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className='meme--image'/>
        </main>
    )
}
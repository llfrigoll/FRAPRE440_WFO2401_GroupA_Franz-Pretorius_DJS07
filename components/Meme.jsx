import React from 'react'
import memesData from '../memesData.jsx'

//Form section of the app
export default function Meme() {

    //Object that is destructured into meme, which is the state and setMeme, which is the dispatch function
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1g8my4.jpg'
    })

    //Array of memes destructured into a state and its dispatch function
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    //Function that grabs all the memes from the array, generates a random number and uses that number to select a random meme from the array,
    //thereafter it uses setMeme to get the current meme and change its url to the new meme's url
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
            <img src={meme.randomImage} className='meme--image'/>
        </main>
    )
}
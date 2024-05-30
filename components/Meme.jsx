import React from 'react'

//Form section of the app
export default function Meme() {
    //Object that is destructured into meme, which is the state and setMeme, which is the dispatch function
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1g8my4.jpg'
    })

    //Array of memes destructured into a state and its dispatch function
    const [allMemes, setAllMemes] = React.useState([])
    
    //Using use effect to initiate an api call to get an object containing memes,
    //whereafter setAllMemes is called with the memes array inside the object
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    //Function that generates a random number and uses that number to select a random meme from the array,
    //thereafter it uses setMeme to get the current meme and change its url to the new meme's url
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    //Function that takes 'topText' or 'bottomText' as the name and the actual user input as the value and uses setMeme to set the current meme's
    //top and bottom text
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
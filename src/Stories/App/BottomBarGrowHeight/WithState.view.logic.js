import WithState from './WithState.view.js'
import React, { useReducer, useEffect, useState } from 'react'

const animalList = [
  'cat', 'dog', 'lion', 'monkey'
]

export default function WithStateLogic(props) {
  let [isBigger, toggleIsBigger] = useReducer(is => !is, false)
  const [giphy, setGiphy] = useState({})
  useEffect(() => {
    async function getGiphyListed() {
      const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&tag=${animalList[Math.floor(Math.random() * 4)]}`;
      const response =  await fetch(url);
      const responseJson = await response.json();
      const gifUrl = responseJson.data.images.fixed_width.url;
      setGiphy(gifUrl);
    }
    getGiphyListed();

    
  }, [props])

  return (
    <WithState
      {...props}
      isBigger={isBigger}
      source={giphy}
      onClick={toggleIsBigger}
    />
  )
}

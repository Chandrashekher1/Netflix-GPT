import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10 ">
        <img src={BG_URL} alt="bg-image" className="bg-slate-900" />
      </div>
        <GptSearchBar/>
        <GptSearchSuggestion/>
    </div>
  )
}

export default GptSearch
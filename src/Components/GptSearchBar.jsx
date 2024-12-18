import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)

  return (
    <div className='pt-[9%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" placeholder= {lang[langKey].gptPlaceholder } className='p-4 m-4 col-span-9 focus:outline-none' />
            <button className='py-2 px-4 m-4 bg-red-700 rounded-lg col-span-3 font-semibold  ' onClick={(e) => e.stopPropagation()}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
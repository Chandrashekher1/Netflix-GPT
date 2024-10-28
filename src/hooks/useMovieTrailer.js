import { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const useMovieTrailer = (Id) =>{
  const dispatch = useDispatch()
    // console.log(movieId);
    
  const getMoviesVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/912649/videos?language=en-US', API_OPTIONS)

    const json = await data.json()
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]

    // console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    getMoviesVideos()
  }, [])

}

export default useMovieTrailer
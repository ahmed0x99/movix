import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from '../Loading/Loading'
import Movie from '../Movie/Movie'

export default function Action() {

  const [movies, setMovies] = useState([])
  const [loading , setLoading] = useState(false)
  
  // mounting , updating , unmount

 async function getMovies() {
    // get , post , update , delete
    setLoading(true)
   let response = await axios.get("https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json") // 2sec
   setMovies(response.data.metas)
   setLoading(false)
  }
  useEffect(() => {
    getMovies()

  }
   , [])

  return (
    <div className='mh-[90vh] bg-gray-700 text-center flex flex-wrap justify-center items-center text-xl text-white'>    
    { 
    loading === true ? <Loading/>: 
      movies.map((movie) => {
        return <Movie movie={movie} />
      }
      )
    }
    </div>
  )
}



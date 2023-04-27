import React, { useEffect } from 'react'
import MovieList from '../module/MovieList'
import Theater from '../components/Theater'
import CarouselHome from '../components/CarouselHome'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <CarouselHome />
      <MovieList />
      <Theater />
    </div>
  )
}

export default Home
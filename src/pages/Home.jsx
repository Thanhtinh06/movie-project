import React from 'react'
import MovieList from '../module/MovieList'
import Theater from '../components/Theater'
import CarouselHome from '../components/CarouselHome'

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <MovieList />
      <Theater />
    </div>
  )
}

export default Home
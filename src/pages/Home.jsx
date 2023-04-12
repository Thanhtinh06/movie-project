import React from 'react'
import Carousel from '../components/Carousel'
import MovieList from '../module/MovieList'
import Theater from '../components/Theater'

const Home = () => {
  return (
    <div>
      <Carousel />
      <MovieList />
      <Theater />
    </div>
  )
}

export default Home
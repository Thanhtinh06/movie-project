import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMovieList } from '../store/quanLyPhim/thunkAction';

const MovieList = () => {
  const dispatch = useDispatch();
  const {movieList,setMovieList} = useSelector(state => state.quanLyPhim);
  useEffect(()=>{
    dispatch(getMovieList())
  },[dispatch])

  return (
    <section className='movieList my-[70px] bg-white w-[80%] m-auto py-10 rounded-lg'>
      <div className='my-10 flex flex-row items-center justify-center gap-5'>
        <button className='btn-movie'>Present Movie</button>
        <button className='btn-movie'>Upcoming Movie</button>
      </div>
      <div className='flex flex-row flex-wrap gap-6 justify-evenly'>
        {
          movieList?.map((item) => {
            return (
              <div className= "w-[230px] bg-white border border-gray-200 rounded-lg shadow bg-[--tw-color-bg-black] dark:border-gray-700 " key={item.maPhim}>
                <NavLink to={`/movieDetail/${item.maPhim}`}>
                  <img className="rounded-t-lg w-[100%] h-[14rem]" src={item.hinhAnh} alt={item.tenPhim} />
                </NavLink>
                <div className="p-5">
                  <NavLink href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white h-[70px]">{item.tenPhim}</h5>
                  </NavLink>
                  <NavLink href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-primary">
                    Buy Ticket
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </NavLink>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default MovieList
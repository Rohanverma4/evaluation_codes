import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { getMovieData,filterByGenre } from "../Redux/actions";
import './css/movies_list.css';
import { useNavigate } from "react-router-dom";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  
  const data = useSelector((store) => store.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store 
     appendData()
  },[]);

  console.log(data)
  const appendData = ()=> {
    axios.get("https://movie-fake-server.herokuapp.com/data")
    .then((res) => {
      dispatch(getMovieData(res.data))
      // setPageData(data)
    }).catch((err) => {
      console.log(err)
    })
  }

//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
    let curr_gen = e.target.value;
    dispatch(filterByGenre(curr_gen))
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        {genres.map((item) => {
          return <option>{item}</option>
        })}
      </select>
      <div className = "movies-list">
       {data.map((item) => {
         return <SingleMovieDiv 
                      id = {item.id}
                      movie_name={item.movie_name}
                      genre={item.genre}
                      rating={item.rating}
                      release_date={item.release_date}
                      image_url={item.image_url}
                      navigate={navigate}
                 />
       })}
      </div>
    </>
  );
};


function SingleMovieDiv({id, movie_name,genre,rating,release_date,image_url,navigate}){
  const handleNav = () => {
    navigate(`/${id}`)
  }
  return (
        <div onClick={handleNav}>
          <img src={image_url} alt="" />
          <h4>{movie_name}</h4>
          <h5>Genre:{genre}  Rating: {rating}</h5>
          <p>Date:{release_date}</p>
        </div>
      )
}
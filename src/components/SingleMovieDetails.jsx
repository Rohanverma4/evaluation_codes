import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
export const SingleMovieDetails = () => {
    // make a request to get the details
    const [curr_data, setCurrData] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
      //   dispatch an action to the store 
       appendData()
    },[]);
    const appendData = ()=> {
      axios.get(`https://movie-fake-server.herokuapp.com/data/${id}`)
      .then((res) => {
        setCurrData(res.data)
        // setPageData(data)
      }).catch((err) => {
        console.log(err)
      })
    }
  return (
      <div>
        <img src={curr_data.image_url} alt="" />
        <h4>{curr_data.movie_name}</h4>
        <h5>Genre:{curr_data.genre}  Rating: {curr_data.rating}</h5>
        <p>Date:{curr_data.release_date}</p>
      </div>
      );
};

import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailers } from "../Utils/movieSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const useMovieTrailer=(movieId)=>{
    //Fetch Trailer Video and updating the store with trailer video data
    const dispatch=useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter((video) => {
          return video.type === "Trailer";
        });
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailers(trailer));
        // setTrailerId(trailer.key);
      };
      useEffect(()=>{
        getMovieVideo();
      },[]);
};
export default useMovieTrailer;
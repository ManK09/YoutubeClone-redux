import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {searchVideo} from './searchAction'
import {fetchVideos} from './listActions'

const Search = () =>{

    const getsearchQuery= useSelector(state => state.searchReducer.searchQuery)
    const dispatch= useDispatch()

    const [searchQuery,setSearchQuery]=useState(getsearchQuery)

    const handleChange = (event)=>{
        setSearchQuery(event.target.value)
      }

      const handleClick = event =>{
          event.preventDefault()
          dispatch(searchVideo(searchQuery))
          dispatch(fetchVideos(searchQuery))
      }

    return(
        <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="search"
        />
        <button onClick={handleClick}>Search</button>
      </form>
      {searchQuery && <div>Latest For : {searchQuery}</div>}
    </div>
    )
    
}

export default Search
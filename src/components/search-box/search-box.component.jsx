import React from 'react'
import './search-box.styles.css';

//this searchbox component is reusable as it receives the functionality and placeholder
//- from the app.js 
//this allows state to be changed in app.js so that other components can see it
export const SearchBox = ({ placeholder, handleChange }) => {
     {/*  e is the event, target is the html element that fired the event */}

    return (
       
        <input type='search' placeholder={ placeholder } className='search'
          onChange={handleChange}
            />
    )
}

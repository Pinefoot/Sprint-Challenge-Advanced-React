import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import {useLocalStorage} from "../hooks/useLocalStorage";
import { useDarkMode } from "../hooks/useDarkMode";


function SearchForm(props) {
    const[darkMode, setDarkMode] = useDarkMode('Darkened');
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    const[form, handleChange] = useForm();
    const handleSubmit = event => {
        event.preventDefault();
        props.handleSearch(form.search)
    }
    return(
        <form data-testid="searchForm" onSubmit={handleSubmit}>
         <div>   
        <button onClick={toggleDark}>Dark Mode</button>
        </div>
        <label htmlFor="search" data-testid="search">Find a player!</label><br/>
        <input
        data-testid='content-input'
        id = "search"
        name="search"
        placeholder="Search Player"
        onChange={handleChange}
        value={form.search}/>
        <button type='submit'>Search</button>


        </form>
    )
}
export default SearchForm;
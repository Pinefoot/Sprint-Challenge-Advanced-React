import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useDarkMode } from "../hooks/useDarkMode";


export function SearchForm(props) {
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
        <form onSubmit={handleSubmit}>
         <div>   
        <button onClick={toggleDark}>Dark Mode</button>
        </div>
        <input
        name="search"
        placeholder="Search Player"
        onChange={handleChange}
        value={form.search}/>
        <button type='submit'>Search</button>


        </form>
    )
}
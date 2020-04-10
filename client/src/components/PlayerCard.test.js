import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PlayerCard   from './PlayerCard';

test('app has player card visible', () =>{
    const {getByLabelText} = render (<PlayerCard/>)

    const labelText = getByLabelText(/Name:/i)
    const countryText = getByLabelText(/Country:/i)
    const searchText = getByLabelText(/Searches:/i)




})
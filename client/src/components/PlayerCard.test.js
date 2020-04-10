import React from "react";
import { render } from "@testing-library/react";
import PlayerCard   from './PlayerCard';
import '@testing-library/jest-dom/extend-expect'

test("app has player card visible", async() =>{
    const {getByLabelText} = render (<PlayerCard/>)

    const labelText = getByLabelText(/Name/i)
    // const countryText = getByLabelText(/Country:/i)
    // const searchText = getByLabelText(/Searches:/i)



    expect(labelText).toBeVisible();
    // expect(countryText).toBeVisible();
    // expect(searchText).toBeVisible();
})
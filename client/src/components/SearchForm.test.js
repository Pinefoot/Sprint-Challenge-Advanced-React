import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm   from './SearchForm';
import '@testing-library/jest-dom/extend-expect'

test('search box displays', ()=>{
    const {getByLabelText} = render (<SearchForm/>);

    const labelText = getByLabelText(/Find a player!/i)
    expect(labelText).toBeVisible();
})
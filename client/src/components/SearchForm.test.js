import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm   from './SearchForm';
import '@testing-library/jest-dom/extend-expect'

test('search box displays', ()=>{
    const {getByLabelText} = render (<SearchForm/>);

    const labelText = getByLabelText(/Find a player!/i)
    expect(labelText).toBeVisible();
})

test('search form searches', async()=>{
    const {getAllByLabelText, getByTestId} = render (<SearchForm/>);
    const nameInput = getByTestId('content-input')
    
    fireEvent.change(nameInput, {target:{value: 'Alex'}});

   

    const formText = getByTestId('searchForm');
    expect(formText).toBeInTheDocument();
    expect(nameInput.value).toBe('Alex');
})
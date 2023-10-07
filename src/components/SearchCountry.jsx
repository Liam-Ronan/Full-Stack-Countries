
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';

const SearchCountry = ({ onSearch }) => {

  const [input, setInput] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(input)
  }

  return (
    <>
        <div className="container d-flex justify-content-center input-group mt-5">
          <form className="w-50" onSubmit={submitHandler}>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Search Country..." value={input} onChange={(event) =>setInput(event.target.value)}/><BsSearch/>
                    <label>Search Country</label>
                </div>
          </form>
        </div>
    </>
  )
}
export default SearchCountry


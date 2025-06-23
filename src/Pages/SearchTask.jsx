import React, { useState } from 'react'

const SearchTask = () => {

    const[inp, setInp]= useState('')

     async function searchData() {
        console.log(inp)
     }

  return (
    <>
      <div id="cont">
        <div id="search">
          Search :{" "}
          <input
            type="text"
            value={inp}
            onChange={(e) => {
              setInp(e.target.value);
            }}
          />
          <button onClick={searchData}>search</button>
        </div>
      </div>
    </>
  );
}

export default SearchTask
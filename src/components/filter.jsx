import React from 'react';

function Filter({onChangeGreased, onlyShowGreased, onChangeSortValue}){
  
  return (
    <div>
      <label>Only Show Greased</label>
      <input type="checkbox" checked={onlyShowGreased} onChange={onChangeGreased} />
      <label>Sort By: </label>
      <select onChange={(event) => onChangeSortValue(event.target.value)}>
        <option value="">Random</option>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}
export default Filter;
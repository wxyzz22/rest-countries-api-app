import * as React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoChevronDownSharp } from "react-icons/io5";

export default function SearchRow({inputHandler, filterHandler, filter, search}) {
    return (
        <div className='search-row'>
          <div className='search-field'>
            <BiSearchAlt2 className='font-18' />
            <input type='text' placeholder='Search for a country...' onChange={inputHandler} value={search} />
          </div>
          <div className='dropdown'>
            <button className='dropbtn font-14'>Filter by Region <IoChevronDownSharp /></button>
            <div className='dropdown-content'>
              <FilterOption filter={filter} filterHandler={filterHandler} value='Africa' />
              <FilterOption filter={filter} filterHandler={filterHandler} value='Americas' />
              <FilterOption filter={filter} filterHandler={filterHandler} value='Asia' />
              <FilterOption filter={filter} filterHandler={filterHandler} value='Europe' />
              <FilterOption filter={filter} filterHandler={filterHandler} value='Oceania' />
                {/* <div className={`${filter === 'Africa' ? 'filter-dark': ''}`} id="Africa" onClick={(e) => filterHandler(e)}>Africa</div>
                <div className={`${filter === 'Africa' ? 'filter-dark': ''}`} id="Americas" onClick={(e) => filterHandler(e)}>Americas</div>
                <div className={`${filter === 'Africa' ? 'filter-dark': ''}`} id="Asia" onClick={(e) => filterHandler(e)}>Asia</div>
                <div className={`${filter === 'Africa' ? 'filter-dark': ''}`} id="Europe" onClick={(e) => filterHandler(e)}>Europe</div>
                <div className={`${filter === 'Africa' ? 'filter-dark': ''}`} id="Oceania" onClick={(e) => filterHandler(e)}>Oceania</div> */}
            </div>
          </div>
        </div>
    );
}

const FilterOption = ({filter, filterHandler, value}) => {
  return (
    <div className={`${filter === value ? 'filter-dark': ''}`} id={value} onClick={(e) => filterHandler(e)}>{value}</div>
  );
};
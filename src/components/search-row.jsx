import * as React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoChevronDownSharp } from "react-icons/io5";

export default function SearchRow({inputHandler}) {
    return (
        <div className='search-row'>
          <div className='search-field'>
            <BiSearchAlt2 className='font-18' />
            <input type='text' placeholder='Search for a country...' onChange={inputHandler} />
          </div>
          <div className='dropdown'>
            <button className='dropbtn font-14'>Filter by Region <IoChevronDownSharp /></button>
            <div className='dropdown-content'>
                <div>Africa</div>
                <div>America</div>
                <div>Asia</div>
                <div>Europe</div>
                <div>Oceania</div>
            </div>
          </div>
        </div>
    );
}
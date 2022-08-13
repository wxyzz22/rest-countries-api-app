import * as React from 'react';
import { IoMoonOutline, IoMoon } from "react-icons/io5";

export default function HeaderRow({mode, modeChangeHandler}) {
    const modeIcon = mode ? <IoMoon className='font-16' /> : <IoMoonOutline className='font-16' />;

    return (
      <div className='header'>
        <div className='font-24 extra-bold'>
          Where in the world?
        </div>
        <button className='mode-switcher font-16 semi-bold' onClick={modeChangeHandler}>{modeIcon} <div>Dark Mode</div></button>
      </div>
    );
};
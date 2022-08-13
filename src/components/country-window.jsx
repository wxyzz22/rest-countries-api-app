import * as React from 'react';

export default function CountryWindow({flag, name, population, region, capital}) {
    return (
        <div className='window-inner-wrapper'>
            <img className='window-flag' src={flag} alt={`flag of ${name}`} />
            <div className='window-text'>
                <div className='font-18 extra-bold window-title'>{name}</div>
                <div className='window-content'>
                    <div className='font-14 just-bold'><span className='semi-bold'>Population:</span> {population.toLocaleString("en-US")}</div>
                    <div className='font-14 just-bold'><span className='semi-bold'>Region:</span> {region}</div>
                    <div className='font-14 just-bold'><span className='semi-bold'>Capital:</span> {capital}</div>
                </div>
            </div>
        </div>
    );
}
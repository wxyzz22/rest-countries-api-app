import * as React from 'react';
import CountryWindow from './country-window';
import { Link } from 'react-router-dom';
import SearchRow from './search-row';

export default function CountryAll() {
    const [res, setRes] = React.useState([]);
    const [search, setSearch] = React.useState('');

    // function for testing query fetching results

    // const handleClickWindow = (e) => {
    //     fetch(`https://restcountries.com/v3.1/alpha/AQ`)
    //     .then((result) => result.json())
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch(() => "Error occured!");
    // };

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${search === '' ? 'all' : `name/${search}`}?fields=altSpellings,flags,name,population,region,capital`)
        .then((result) => result.json())
        .then((result) => {
            // setRes(result.slice(0, 8));
            setRes(result);
            // console.log(search);
        })
        .catch(() => "Error occured!");
    }, [search]);

    // console.log(search[0]);
    
    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    return (
        <div className='main-page'>
            <SearchRow inputHandler={handleInput} />
            {/* Here displays all windows of countries.
            <button onClick={handleClickWindow}>Click to access API</button> */}
            <div className='display-all'>
                {res.map((item, index) =>
                    <Link to={`${item.altSpellings[0]}`} key={index}>
                        <CountryWindow  flag={item.flags.svg} 
                                        name={item.name.common}
                                        population={item.population}
                                        region={item.region}
                                        capital={item.capital[0]} />
                    </Link>)}
            </div>
        </div>
    );
}
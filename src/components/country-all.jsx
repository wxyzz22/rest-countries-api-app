import * as React from 'react';
import CountryWindow from './country-window';
import { Link } from 'react-router-dom';
import SearchRow from './search-row';

export default function CountryAll() {
    const [res, setRes] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filter, setFilter] = React.useState('');

    // function for testing query fetching results

    // const handleClickWindow = () => {
    //     // fetch(`https://restcountries.com/v3.1/alpha/AQ`)
    //     // .then((result) => result.json())
    //     // .then((result) => {
    //     //     console.log(result);
    //     // })
    //     // .catch(() => "Error occured!");
    //     console.log(res.filter((item) => item.region === 'Asia'));
    // };

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${search === '' ? 'all' : `name/${search}`}?fields=altSpellings,flags,name,population,region,capital`)
        .then((result) => result.json())
        .then((result) => {
            console.log(filter);
            if (filter) {
                const newRes = result.filter((item) => item.region === filter);
                setRes(newRes);
            } else {
                setRes(result);
            }
            // setRes(result.slice(0, 8));
            // console.log(search);
        })
        .catch(() => "Error occured!");
    }, [search, filter]);

    // console.log(search[0]);
    
    const handleInput = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value);
    };

    const handleFilter = (e) => {
        if (e.target.id === filter) {
            setFilter('');
        } else {
            setFilter(e.target.id);
        }
    }

    return (
        <div className='main-page'>
            <SearchRow inputHandler={handleInput} filterHandler={handleFilter} filter={filter} search={search} />
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
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

export default function CountrySingle() {
    const params = useParams();
    const [border, setBorder]  = React.useState([]);
    const [country, setCountry] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
        // fetch(`https://restcountries.com/v3.1/alpha/aq`)  // testing stylistic aspects (using the example giving in the figma)
        .then((result) => result.json())
        .then((result) => {
            setCountry(result);
            if (result[0].borders) {
                Promise.all(result[0].borders.map((code) => {
                    return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                           .then((result) => result.json())
                           .then((result) => ({'code': code, 'name': result[0].name.common}))
                }))
                .then((result) => {
                    setBorder(result);
                });
            }
        })
        .catch(() => "Error occured!");
    }, [params]);

    return (
        <div className='single-country-wrapper'>
            <Link className='back-button' to="/"><BiArrowBack className='back-arrow' /> <div>Back</div></Link>
            {country.map((item, index) =>
                        <div className='single-country-content' key={index}>
                            <img className='single-country-flag' src={item.flags.svg} alt={`flag of ${item.name.common}`} />
                            <div className='single-country-text'>
                                <div className='single-country-text-wrapper'>
                                <div className='font-32 extra-bold single-country-title'>{item.name.common}</div>
                                <div className='single-country-info'>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Native Name:</span> {item.name.nativeName ? Object.values(item.name.nativeName)[0].common : item.name.common ? item.name.common : 'None'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Population:</span> {item.population ? item.population : '0'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Region:</span> {item.region ? item.region : 'Oops, not on earth'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Sub Region:</span> {item.subregion ? item.subregion : 'Oops, not part of anything'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Capital:</span> {item.capital ? item.capital : 'None'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Top Level Domain:</span> {item.tld ? item.tld[0] : 'None'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Currencies:</span> {item.currencies ? Object.keys(item.currencies).map((item) => item).join(", ") : 'None'}</div>
                                    <div className='font-14 just-bold'><span className='semi-bold'>Languages:</span> {item.languages ? Object.values(item.languages).map((item) => item).join(", ") : 'None'}</div>
                                </div>
                                <div className='single-country-borders'>
                                    <span className='semi-bold border-title'>Border Countries:</span>
                                    <div className={border.length ? 'no-show': 'font-14 just-bold'}>None</div>
                                    <div>
                                        {border.map((item, index) => <button key={index}><Link to={`/${item.code}`} key={index}>{item.name}</Link></button>)}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
            <div>
                <div>
                </div>
            </div>
        </div>
    );
}
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { dispatch, currency } = useContext(AppContext);
    let currencies = [{
        'name': '$ Dollar',
        'value': '$'
    },{
        'name': '£ Pound',
        'value': '£'
    },{
        'name': '€ Euro',
        'value': '€'
    },{
        'name': '₹ Ruppee',
        'value': '₹'
    }];

    const setCurrency = (value) => {

        const item = value;
        debugger

        dispatch({
            type: 'CHG_CURRENCY',
            payload: item,
        });
    };

    return (
        <div className='alert alert-success'>
            <label>
                Currency (
                <select className="custom-select" formatOptionLabel={option => `${option.name} - ${option.value}`} id="inputGroupSelect01" value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    {currencies.map((curr) => (
                        <option value={curr.value}>{curr.name}</option>
                    ))}
                </select>
                )
            </label>
        </div>
    );
};

export default CurrencyList;

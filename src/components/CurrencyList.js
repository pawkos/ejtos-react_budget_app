import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
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
        <div className="alert alert-success" style={{ padding: '10px 20px'}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" onClick={() => setIsOpen(!isOpen)} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency ({currencies.find(item => item.value === currency).name})
            </button>
            {isOpen && (
                <div className="dropdown-menu" style={{'display': 'block'}} aria-labelledby="dropdownMenuButton">
                    {currencies.map((curr) => (
                        <a className="dropdown-item" key={curr.value} onClick={() => setCurrency(curr.value)}>{curr.name}</a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencyList;

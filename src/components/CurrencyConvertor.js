import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import From from './From';
import To from './To';

function CurrencyConverter (){
    const [currencies, setcurrencies] = useState([]);
    const [amount, setAmount] = useState(1);

    const [fromcurrency, setfromcurrency] = useState("USD");
    const [tocurrency, settocurrency] = useState("INR");
    // currencies https://api.frankfurter.app/currencies
    const fetchCurrencies = async () => {
        try {
                const res = await fetch(`https://api.frankfurter.app/currencies`);
                const data = await res.json();

                setcurrencies(data);
        } catch (error) {
                console.log("error is",error);
    }
}

useEffect(() => {
        fetchCurrencies();
    }, []);

    console.log(currencies);

    // conversion https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
    const conversion = ( amount, from, to ) =>{
         
    }

    return(
        <div>
            <From currencies={currencies} />
            <To currencies={currencies} />
        </div>
    )
}

export default CurrencyConverter;
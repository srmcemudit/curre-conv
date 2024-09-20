function To() {
    return(
        <div className="p-1 flex justify-center items-center">
            To
            <select className="inputField border-none outline-none bg-transparent text-lime-400">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="CHF">CHF</option>
                <option value="MXN">MXN</option>
                <option value="BRL">BRL</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="NOK">NOK</option>
                <option value="SEK">SEK</option>
                <option value="PLN">PLN</option>
                <option value="SGD">SGD</option>
                <option value="HKD">HKD</option>
            </select>
        </div>
    )
}

export default To;
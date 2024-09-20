import './Amount.css';
function Amount(){
    return(
        <div className="form__group">
            <input type="text" className="form__field select-none cursor-text" placeholder='Amount'/>
            <label for="name" class="form__label">Amount</label>
        </div>
    );
}

export default Amount;
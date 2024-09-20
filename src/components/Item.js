import Amount from './Amount';
import From from './From';
import To from './To';
import Button from './Button';
 
function Item() {
    return(
        <div className='p-1 flex gap-20 justify-center items-center text-center gap-y-4 '>
            <Amount />
            <From />
            <Button />
            <To />
        </div>
    );
}

export default Item;
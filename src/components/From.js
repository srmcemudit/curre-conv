import React from 'react';
import './From.css'
function From(currencies){
    return(
		<div className="p-1 flex justify-center items-center">
		From
		<select className="inputField border-none outline-none bg-transparent text-lime-400 ">
			{currencies?.map((currency) => {
			return (	
				<option value={currency} key={currency}>
					{currency}
				</option>
			);
			})}
		</select>
		</div>
	);
  };
  
  export default From;
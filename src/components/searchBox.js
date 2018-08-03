import React from 'react';

const SearchBox = (props) => {
	function fnToExeCallback(e){
		props.callbackFromApp(e.target.value);
	};

	return (
	    <div className="form-group top-buffer" onChange={fnToExeCallback}>
	      <input type="text" className="form-control" id="SearchBox"/>
	    </div>
    )
};

export {SearchBox};

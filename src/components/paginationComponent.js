import React from 'react';

const PaginationComponent = (props) => {
	var pagesMap = [];
	function populatePagesMap(){
		for (var i = 0; i < props.pages; i++) {
			pagesMap.push(i+1);
		}
	};
	populatePagesMap();

	var liElements = pagesMap.map((d) =>
        <li key={d} onClick={fnToExeCallback} className="page-item"><a id={d} className="page-link">{d}</a></li>
    );
	
	function fnToExeCallback(e){
		props.callbackFromApp(e.target.id);
	};

	return (
		<div className="container">
		 	<ul className="pagination">
		    	{liElements}
		  	</ul>
		</div>
	)
};

export {PaginationComponent};

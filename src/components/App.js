import React from 'react';
import Preview from './Preview';
import Clip from './Clip';


class App extends React.Component{

	render(){
		return(
			<div >
				<h1>Clip caseomponent</h1>
				<p>Two orange bars are the btns used to drag. My first time to deal with 'drag' event,
					I think it should be the combination of mouseDown, mouseOver and mouseUp but I got trouble
					when dealing these three together. Super slow and choppy, do not know where to add throttling(maybe?).</p>
				<Clip />
			</div>

		);
	}
}

export default App;

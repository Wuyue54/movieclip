import React from 'react';
import Preview from './Preview';
import Clip from './Clip';


require('../style/style.scss');

class App extends React.Component{

	render(){
		return(
			<div >
				<h1>Clip component</h1>
				<p></p>
				<Clip />
			</div>

		);
	}
}

export default App;

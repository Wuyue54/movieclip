import React from 'react';
import Clip from './Clip';


class App extends React.Component{

	render(){
		let preArray = ['src/imgs/1.jpg','src/imgs/2.jpeg','src/imgs/3.jpeg','src/imgs/4.jpg'];
		let ratio = 1;
		let width = 120;
		let length = 420;

		return(
			<div >
				<h1>Clip Component</h1>
				<Clip
							width = {width}
							length = {length}
							ratio = {ratio}
							preview = {preArray}
				/>
			</div>

		);
	}
}

export default App;

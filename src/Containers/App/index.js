import {DepthBar} from "../../Components";
import {useReducer} from "react";

const App = () => {
	const side = 'bid'
	
	// props
	// width: is the normalized value of this formula  (cellData / maxVolume) * width   and width range is 0-100
	// background: is simply the background color
	
	// width: 80 means 80%
	// width: 90 means 90%
	return (
		<div>
			<DepthBar
				width={ 50 }
				background={ side === 'bid' ? 'green' : 'lightblue' }
			/>
		</div>
	);
}

export default App;

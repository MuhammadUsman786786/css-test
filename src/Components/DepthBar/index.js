import clsx from "clsx";
import {createUseStyles} from 'react-jss'

const getValidWidth = (width) => {
	if (!width || width < 0) {
		return 0
	}
	if (width > 100) {
		return 100
	}
	return width
}

const useStyles = createUseStyles({
	barBaseStyle: {
		borderRadius: '0.2rem'
	},
	outerBarStyle: {
		width: '50%',
		height: '2rem',
		margin: '1rem',
		backgroundColor: 'lightgrey',
	},
	innerBarStyle: {
		height: '2rem',
		backgroundColor: ({background}) => {
			return background
		},
		width: ({width}) => `${ getValidWidth(width) }%`
	}
})

const DepthBar = ({width, background}) => {
	const classes = useStyles({width, background})
	return (
		<div className={ clsx([ classes.barBaseStyle, classes.outerBarStyle, ]) }>
			<div className={ clsx([ classes.barBaseStyle, classes.innerBarStyle ]) }/>
		</div>
	)
}

export default DepthBar;

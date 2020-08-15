// as a reminder, reducers take an action, and show the state after the action. they are called by dispatch

const counterReducer = (state = 0, action) => {
	switch(action.type){
		case 'INCREMENT':
			return state + action.payload
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

export default counterReducer;
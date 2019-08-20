/*---------------- 1. import combineReducers from redux : use to combine all reducers  -----------------*/
import { combineReducers } from 'redux';
/*---------------- artists reducer --------------------*/
import artists from './artists_reducer';


//rootReducer : combins all reducers 
const rootReducer = combineReducers({
    //artiest : reducer - 2. import it from artists_reducer 
    artists
})

export default rootReducer;
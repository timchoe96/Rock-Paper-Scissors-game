import {combineReducers} from 'redux';
import {rules} from './rules.js'
import {choice} from './choice.js';
import {robot} from './robot.js';
import {score} from './score.js';

const rootReducer = combineReducers({rules,choice,robot,score})

export default rootReducer;
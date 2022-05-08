import {createRoutine} from 'redux-saga-routines';

const INCREMENT = createRoutine("INCREMENT");
const DECREMENT = createRoutine("DECREMENT");
const INCREMENT_BY_NUMBER = createRoutine("INCREMENT_BY_NUMBER");
const DECREMENT_BY_NUMBER = createRoutine("DECREMENT_BY_NUMBER");

export default {INCREMENT, DECREMENT,INCREMENT_BY_NUMBER,DECREMENT_BY_NUMBER}

import { createStore, combineReducers } from 'redux';

import { createActions } from 'redux-actions';

//#region constant
const INCREASE_NUM = 'INCREASE_NUM';

const DECREASE_NUM = 'DECREASE_NUM';

const INCREASE_NUM2 = 'INCREASE_NUM2';

//#endregion

const initialState = {
    num: 0
};

const initialState2 = {
    num: 0
};

//#region actions

const { increaseNum,
    decreaseNum,
    increaseNum2 } = createActions({
        [INCREASE_NUM]: num => num,
        [DECREASE_NUM]: num => -num
    })

//#endregion
import { createStore, combineReducers } from 'redux';

import { createActions, handleActions } from 'redux-actions';

import 'babel-polyfill';

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

const {
    increaseNum,
    decreaseNum,
    increaseNum2 } = createActions({
        [INCREASE_NUM]: num => num,
        [DECREASE_NUM]: num => -num,
        [INCREASE_NUM2]: num => num
    });


//#endregion

//#region reducer

const reducerA = handleActions({
    [INCREASE_NUM]: function (state, { payload }) {
        return {
            ...state, num: state.num + payload
        };
    },
    [DECREASE_NUM]: function (state, { payload }) {
        return {
            ...state, num: state.num + payload
        };
    }
}, initialState);

const reducerB = handleActions({
    [INCREASE_NUM2]: function (state, { payload }) {
        return {
            ...state, num: state.num + payload
        };
    }
}, initialState2);

//#endregion

const store = createStore(combineReducers({
    reducerA,
    reducerB
}));

function log(lbl) {
    console.log('--------------------');
    console.log(`${lbl}:`);
    console.log(store.getState());
}

log('初始');

store.dispatch(increaseNum(2));
log('+2');

store.dispatch(decreaseNum(2));
log('-2');

store.dispatch(increaseNum2(3));
log('+3,2');
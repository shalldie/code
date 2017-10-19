'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _reduxActions = require('redux-actions');

require('core-js/modules/es7.string.pad-start');

require('core-js/modules/es7.string.pad-end');

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
    increaseNum2 } = (0, _reduxActions.createActions)({
    [INCREASE_NUM]: num => num,
    [DECREASE_NUM]: num => -num,
    [INCREASE_NUM2]: num => num
});

//#endregion

//#region reducer

const reducerA = (0, _reduxActions.handleActions)({
    [INCREASE_NUM]: function (state, { payload }) {
        return _extends({}, state, { num: state.num + payload
        });
    },
    [DECREASE_NUM]: function (state, { payload }) {
        return _extends({}, state, { num: state.num + payload
        });
    }
}, initialState);

const reducerB = (0, _reduxActions.handleActions)({
    [INCREASE_NUM2]: function (state, { payload }) {
        return _extends({}, state, { num: state.num + payload
        });
    }
}, initialState2);

//#endregion

const store = (0, _redux.createStore)((0, _redux.combineReducers)({
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
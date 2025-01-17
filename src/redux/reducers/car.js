const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';
const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE';
const DECREMENT_BY_FIVE = 'DECREMENT_BY_FIVE';

const initState = {
    num: 0,
    cars: [
        { model: "BMW", year: 2017 },
        { model: "Honda", year: 2015 },
        { model: "Audi", year: 2010 },
        { model: "Toyota", year: 2020 },
        { model: "Mercedes", year: 2016 }
    ]
};

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                cars: [action.car, ...state.cars]
            };
        case INCREMENT_NUM:
            return {
                ...state,
                num: state.num < 15 ? state.num + 1 : 15
            };
        case DECREMENT_NUM:
            return {
                ...state,
                num: state.num > 1 ? state.num - 1 : 0
            };
        case RESET_NUM:
            return {
                ...state,
                num: 0
            };
        case INCREMENT_BY_FIVE:
            return {
                ...state,
                num: state.num + 5 >= 15 ? 15 : state.num + 5
            };
        case DECREMENT_BY_FIVE:
            return {
                ...state,
                num: state.num - 5 <= 0 ? 0 : state.num - 5
            };
        default:
            return state;
    }
};

export const addCar = (car) => (dispatch) => {
    dispatch({ type: ADD_CAR, car });
};

export const incrementNum = () => (dispatch) => {
    dispatch({ type: INCREMENT_NUM });
};

export const decrementNum = () => (dispatch) => {
    dispatch({ type: DECREMENT_NUM });
};

export const resetNum = () => (dispatch) => {
    dispatch({ type: RESET_NUM });
};

export const incrementByFive = () => (dispatch) => {
    dispatch({ type: INCREMENT_BY_FIVE });
};

export const decrementByFive = () => (dispatch) => {
    dispatch({ type: DECREMENT_BY_FIVE });
};

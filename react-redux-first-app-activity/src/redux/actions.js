// src/redux/actions.js
export const SELECT_TECHNOLOGY = 'SELECT_TECHNOLOGY';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function selectTechnology (teachnology){
    return {
        type: SELECT_TECHNOLOGY,
        payload: teachnology
    }
}

export function incrementCounter (){
    return {
        type: INCREMENT_COUNTER
    }
}
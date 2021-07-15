import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from '../../HW8';

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {

    /*console.log('initial array', initialState)*/
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    /*console.log('Sorted array', newState)*/
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState[2].name).toBe('Дмитрий')
})
test('sort name down', () => {
    /*console.log('initial array', initialState)*/
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    /*console.log(newState)*/
    expect(newState[0].name).toBe('Кот')
    expect(newState[1].name).toBe('Коля')
    expect(newState[2].name).toBe('Ирина')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 70})
    expect(newState.length).toBe(0)
    const newState1 = homeWorkReducer(initialState, {type: 'check', payload: 18})
    expect(newState1.length).toBe(4)
})

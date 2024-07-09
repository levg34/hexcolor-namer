import { describe, expect, test, beforeAll } from 'bun:test'
import { getColorName } from '../src/colors'

describe('test hexcolor-namer', () => {
    // test('test with mullberry', () => {
    //     expect(name('#C33E92')).toEqual(['#C54B8C', 'Mulberry', false])
    // })
    test('test with mullberry', () => {
        const colorCode = '#C33E92'
        const { colorName, nearestMatching, exactMatch } = getColorName(colorCode)
        expect([colorName, nearestMatching, exactMatch]).toEqual(['#C54B8C', 'Mulberry', false])
    })
})

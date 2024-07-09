import { describe, expect, test, beforeAll } from 'bun:test'
import { getColorName } from '../src/colors'

describe('test hexcolor-namer', () => {
    test('test with mullberry', () => {
        expect(getColorName('#C33E92')).toEqual(['#C54B8C', 'Mulberry', false])
    })
})

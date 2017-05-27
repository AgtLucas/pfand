/* eslint-env jest */
import { round, trunc } from '../index'

describe('round', () => {
  it('should round the given value', () => {
    expect(round(234.1)).toBe(233)
  })
})

describe('trunc', () => {
  it('should trunc the given value', () => {
    expect(trunc(234.3)).toBe(234)
  })
})

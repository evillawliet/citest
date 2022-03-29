import { assert } from "chai"
import { test } from '../src/index'

test('ok', () => {
  assert.equal(Math.sqrt(4), 2)
  assert.equal(Math.sqrt(144), 12)
  assert.equal(Math.sqrt(2), Math.SQRT2)
})

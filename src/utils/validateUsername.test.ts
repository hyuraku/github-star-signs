import { describe, it, expect } from 'vitest'
import { isValidUsername, USERNAME_MAX_LENGTH } from './validateUsername'

describe('isValidUsername', () => {
  describe('accepts names GitHub could own', () => {
    it.each([
      ['a plain name', 'octocat'],
      ['a single character', 'a'],
      ['digits only', '123'],
      ['mixed case', 'Hyuraku'],
      ['letters and digits', 'user123'],
      ['a single hyphen inside', 'my-name'],
      ['hyphens spread apart', 'a-b-c-d'],
      ['the maximum length', 'a'.repeat(USERNAME_MAX_LENGTH)],
    ])('%s: %s', (_case, name) => {
      expect(isValidUsername(name)).toBe(true)
    })
  })

  describe('rejects names GitHub could not own', () => {
    it.each([
      ['empty input', ''],
      ['one over the maximum', 'a'.repeat(USERNAME_MAX_LENGTH + 1)],
      ['a leading hyphen', '-octocat'],
      ['a trailing hyphen', 'octocat-'],
      ['two hyphens in a row', 'oct--ocat'],
      ['only a hyphen', '-'],
      ['an underscore', 'my_name'],
      ['a dot', 'my.name'],
      ['an inner space', 'my name'],
      ['an at sign', 'user@example'],
      ['a slash', 'octocat/repo'],
      ['non-ASCII letters', 'ユーザー'],
    ])('%s: %s', (_case, name) => {
      expect(isValidUsername(name)).toBe(false)
    })
  })
})

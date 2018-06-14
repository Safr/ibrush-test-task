import { handleErrors } from '../helpers';

describe('Helpers', () => {
  test('should return true if string', () => {
    expect(handleErrors('string')).toBe(true);
  });
  test('should return false if object', () => {
    expect(handleErrors({})).toBe(false);
  });
});

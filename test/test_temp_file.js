import assert from 'assert';
import add from '../temp_file';

describe('test temp file', () => {
  describe('test the add function', () => {
    it('sums up two numbers', () => {
      const result = add(4, 6);
      assert.equal(result, 10);
    });
  });
});

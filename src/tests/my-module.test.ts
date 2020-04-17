/**
 *
 * my-module tests
 *
 */
import main from '../my-module';

describe('my-module', () => {
  describe('main', () => {
    it('should return true', async () => {
      expect(main()).toBe(true);
    });
  });
});

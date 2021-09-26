import { sum } from '@utils/sum';

describe('testing sum', () => {
  it('1 + 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

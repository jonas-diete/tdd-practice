const printReport = require('./report');

describe('Report', () => {
  it('returns a single score', () => {
    expect(printReport('Green')).toBe('Green: 1');
  });
  it('returns a number of the same score', () => {
    expect(printReport('Green, Green, Green')).toBe('Green: 3');
  });
  it('returns different scores of one each', () => {
    expect(printReport('Green, Amber, Red')).toBe('Green: 1, Amber: 1, Red: 1');
  });
  it('returns different scores of one each in any order', () => {
    expect(printReport('Amber, Green, Red')).toBe('Green: 1, Amber: 1, Red: 1');
  });
  it('returns different quantities of each score', () => {
    expect(printReport('Amber, Green, Red, Green, Red, Green, Green')).toBe('Green: 4, Amber: 1, Red: 2');
  });
  it('doesnt return other values', () => {
    expect(printReport('Amber, Blue, Red, Green, Brown, Green, Green')).toBe('Green: 3, Amber: 1, Red: 1');
  });
});
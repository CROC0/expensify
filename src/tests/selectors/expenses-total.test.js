import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = getExpenseTotal([]);
    expect(result).toBe(0)
});


test('should correctly add up a single expense', () => {
    const result = getExpenseTotal([expenses[0]]);
    expect(result).toBe(195)
});

test('should correctly add up multiple expenses', () => {
    const result = getExpenseTotal(expenses);
    expect(result).toBe(195+109500+4500)
})
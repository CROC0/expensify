

export default (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return expenses
        .map((expense) => expense.amount)
        .reduce(reducer,0)
};
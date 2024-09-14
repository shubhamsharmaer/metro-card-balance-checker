exports.generateFakeBalance = (cardNumber) => {
    // take summ
    const sumofDigit = cardNumber.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const balance = (sumofDigit * 123) % 451 + 50;
    return balance;
}
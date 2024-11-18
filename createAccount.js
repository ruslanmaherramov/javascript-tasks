/**
 * Create an account with methods to manage PIN-protected balance operations.
 *
 * @param {string} pin - The initial PIN code for the account.
 * @param {number} amount - The starting deposit amount for the account.
 * @returns {object} An object containing four methods:
 *
 * 1. `checkBalance(pin)`:
 *    - @param {string} pin - The PIN code to access the account.
 *    - @returns {number|string} The current balance if the PIN is correct, otherwise an error message.
 *
 * 2. `deposit(pin, amount)`:
 *    - @param {string} pin - The PIN code to access the account.
 *    - @param {number} amount - The amount to deposit.
 *    - @returns {string} A success message if the PIN is correct, otherwise an error message.
 *
 * 3. `withdraw(pin, amount)`:
 *    - @param {string} pin - The PIN code to access the account.
 *    - @param {number} amount - The amount to withdraw.
 *    - @returns {string} A success message if the PIN is correct and sufficient funds are available, otherwise an error message.
 *
 * 4. `changePin(oldPin, newPin)`:
 *    - @param {string} oldPin - The current PIN code.
 *    - @param {string} newPin - The new PIN code to set.
 *    - @returns {string} A success message if the old PIN is correct, otherwise an error message.
 */

function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPIN) {
      if (inputPIN !== pin) return 'Invalid PIN.';

      return amount;
    },
    deposit(inputPIN, deposit) {
      if (inputPIN !== pin) return 'Invalid PIN.';
      amount += deposit;

      return `Successfully deposited ${deposit}. Current balance: ${amount}.`;
    },
    withdraw(inputPIN, withdraw) {
      if (inputPIN !== pin) return 'Invalid PIN.';
      if (withdraw > amount) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      }
      amount -= withdraw;

      return `Successfully withdrew ${withdraw}. Current balance: ${amount}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return 'Invalid PIN.';
      pin = newPin;

      return `PIN successfully changed!`;
    }
  }
}

let account = createAccount("1234", 100);
console.log(account.checkBalance('1234'));
console.log(account.deposit('1234', 200));
console.log(account.withdraw('1234', 20));
console.log(account.changePin('1234', '1111'));

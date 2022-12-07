class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
      this.inputUTXOs = inputUTXOs;
      this.outputUTXOs = outputUTXOs;
      this.fee;
  }
  execute() {
      let inputsValue = 0;
      let outputsValue = 0;
      this.inputUTXOs.map((inputUTXO) => {
          if (inputUTXO.spent == true) {
              throw 'TXO is already spent';
          } else {
              inputsValue = inputsValue + inputUTXO.amount;
          }
      })

      this.outputUTXOs.map((outputUTXO) => {
          outputsValue = outputsValue + outputUTXO.amount
      })

      if (outputsValue > inputsValue) {
          this.inputUTXOs.map((inputUTXO) => {
              inputUTXO.spent = false
          })
          throw 'Not enough inputsValue to cover the total outputUTXOs';

      } else {
          this.fee = inputsValue - outputsValue;
          this.inputUTXOs.map((inputUTXO) => {
              inputUTXO.spent = true
          })
      }
  }
}

module.exports = Transaction;
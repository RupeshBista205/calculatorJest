class Calculator {
  //Maybe change number to results later on for semantic clarity?
  constructor(num1) {
    this.num1 = num1;
  }

  add(num2) {
    this.num1 = num1 + num2;
    return this.num1;
  }

  subtraction(num2) {
    this.num1 = num1 - num2;
    return this.num1;
  }

  equals() {
    return this.num1;
  }
}


module.exports=Calculator;

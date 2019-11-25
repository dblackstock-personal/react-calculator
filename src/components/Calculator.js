import React, { Component } from 'react'

export default class Calculator extends Component {

    state = {
        readout: "",
        operation: "",
        numberOne: "",
        numberTwo: ""
    }

    clear = () => {
        this.setState(
            {
                readout: "",
                operation: "",
                numberOne: "",
                numberTwo: ""
            }
        )
    }

    //this is called whenever we enter a number. It populates readout and either numberOne or numberTwo
    async buildSum(input) {
        if (this.state.operation !== "" && this.state.numberTwo === "") {   //this is for the case when we start inputting a second number
            // console.log("number outcome 1");
            // console.log("number 1 is "+this.state.numberOne);
            await new Promise(accept => this.setState(
                {
                    readout: input,
                }, accept))

            this.setState(
                {
                    numberTwo: this.state.readout
                })

        } else if (this.state.operation !== "" && this.state.numberOne === "") { //this is when we input the first number and we've just done a sum (so operator and second number have values)
            // console.log("number outcome 2");
            this.clear();
            await new Promise(accept => this.setState(
                {
                    readout: input,
                }, accept));
            this.setState(
                {
                    numberOne: this.state.readout
                })

        } else if (this.state.operation !== "") { //this is when we continue to input the second number
            // console.log("number outcome 3");
            await new Promise(accept => this.setState(
                {
                    readout: this.state.readout.toString() + input,
                }, accept));
            this.setState({
                numberTwo: this.state.readout
            })

        } else if (this.state.operation === "") {  //this is for when we are inputting the first number
            // console.log("number outcome 4");
            await new Promise(accept => this.setState(
                {
                    readout: this.state.readout.toString() + input
                }, accept));
            this.setState({
                numberOne: this.state.readout
            })
        }
    }

    setOperatorAfterEquals = (input) => {

        this.setState({
            numberOne: this.state.readout,     //giving numberOne a value again since the equals cleared it
            numberTwo: "",                  //clearing numberTwo so that a new one can be set
            operation: input                 //setting the new operation
        })
    }

    //this sets the operation
    buildOperation = (input) => {
        // if an operator is selected when num1, num2 and operator are populated, equals should be run first 
        if (this.state.numberOne !== "" && this.state.operation !== "" && this.state.readout !== "") {
            // console.log("operation outcome 1");
            this.equals().then(this.setOperatorAfterEquals(input));

            // if an operator is selected after equals (num2 and operator are populated), num1 should be populated from input
        } else if (this.state.numberOne === "" && this.state.operation !== "" && this.state.readout !== "") {
            // console.log("operation outcome 2");
            this.setOperatorAfterEquals(input);

            // the else case covers inputs when numberOne is populated and numberTwo is empty
        } else {
            // console.log("operation outcome 3");
            this.setState(
                {
                    operation: input
                    // numberOne: this.state.readout
                }
            )
        }
    }

    //we need a function to handle each operator, so that it can be easilly called within the equals() promise

    operation = (num1, num2) => {
        let result;
        num1 = Number(num1);
        num2 = Number(num2);
        // console.log(this.state.operation);
        switch (this.state.operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "something has gone wrong";
        }
        // console.log(result);
        return result;
    }

    equals = () => {
        // for the case where equals is run for the first time
        if (this.state.numberOne !== "" && this.state.operation !== "" && this.state.readout !== "") { //this is suspect, why am I not looking at numberTwo?
            // console.log("equals outcome 1");
            // console.log(`Going into the equals, number1 is ${this.state.numberOne} with a type of ${typeof this.state.numberOne}`);
            // console.log(`Going into the equals, number2 is ${this.state.numberTwo} with a type of ${typeof this.state.numberTwo}`);
            // console.log(`Going into the equals, readout is ${this.state.readout} and operator is ${this.state.operation}`);
            let result = this.operation(this.state.numberOne, this.state.numberTwo);
            // console.log(`The result is ${result}`);
            this.setState({
                readout: result,
                numberOne: ""
            })
            //this is if equals is pressed more than once
        } else if (this.state.numberOne === "" && this.state.operation !== "" && this.state.readout !== "") {
            // console.log("equals outcome 2");
            // console.log(`Going into the equals, number1 is ${this.state.numberOne}`);
            // console.log(`Going into the equals, number2 is ${this.state.numberTwo}`);
            let result = this.operation(this.state.readout, this.state.numberTwo);
            this.setState({
                readout: result
            })
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="display">{this.state.readout}</div>
                <div className="button clear" onClick={this.clear}>clear</div>
                <div className="button  operator divide" onClick={() => this.buildOperation("/")}>/</div>
                <div className="button number seven" onClick={() => this.buildSum(7)}>7</div>
                <div className="button number eight" onClick={() => this.buildSum(8)}>8</div>
                <div className="button number nine" onClick={() => this.buildSum(9)}>9</div>
                <div className="button operator minus" onClick={() => this.buildOperation("-")}>-</div>
                <div className="button number four" onClick={() => this.buildSum(4)}>4</div>
                <div className="button number five" onClick={() => this.buildSum(5)}>5</div>
                <div className="button number six" onClick={() => this.buildSum(6)}>6</div>
                <div className="button operator plus" onClick={() => this.buildOperation("+")}>+</div>
                <div className="button number one" onClick={() => this.buildSum(1)}>1</div>
                <div className="button number two" onClick={() => this.buildSum(2)}>2</div>
                <div className="button number three" onClick={() => this.buildSum(3)}>3</div>
                <div className="button operator equals" onClick={this.equals}>=</div>
            </div>
        )
    }
}
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

    buildSum = (input) => {
        if (this.state.operation !== "" && this.state.numberTwo === "") {   //this is for the case when we start inputting a second number
            console.log("outcome 1");
            console.log("number 1 is "+this.state.numberOne);
            this.setState(
                {
                    readout: input,
                }, () => {
                    this.setState({
                        numberTwo: this.state.readout
                    })
                }
            )

        }else if(this.state.operation !== "" && this.state.numberOne === "") { //this is when we input the first number and we've just done a sum (so operator and second number have values)
        console.log("outcome 2");
        this.clear();
        this.setState(
            {
                readout: input,
            }, () => {
                this.setState({
                    numberOne: this.state.readout
                })
            }
        )
        }else if(this.state.operation !== "") { //this is when we continue to input the second number
            console.log("outcome 3");
            this.setState(
                {
                    readout: this.state.readout.toString() + input,
                }, () => {
                    this.setState({
                        numberTwo: this.state.readout
                    })
                }
            )

        }else if (this.state.operation === "") {  //this is for when we are inputting the first number
            console.log("outcome 4");
            this.setState(
                {
                    readout: this.state.readout.toString() + input,
                    // numberOne: this.state.readout
                }, () => {
                    this.setState({
                        numberOne:this.state.readout
                    })

                }
            )
        }
    }

    setOperatorAfterEquals = (input) => {

        this.setState({
            numberOne: this.state.readout,     //giving numberOne a value again since the equals cleared it
            numberTwo: "",                  //clearing numberTwo so that a new one can be set
            operation:input                 //setting the new operation
        })
    }

    buildOperation = (input) => {
        // if an operator is selected when num1, num2 and operator are populated, equals should be run first 
        if (this.state.numberOne !== "" && this.state.operation !== "" && this.state.readout !== "") {

            this.equals().then(this.setOperatorAfterEquals);


        // if an operator is selected after equals (num2 and operator are populated), num1 should be populated from input
        }else if(this.state.numberOne === "" && this.state.operation !== "" && this.state.readout !== "") {
            this.setOperatorAfterEquals();
        }else {
            this.setState(
                {
                    operation: input
                    // numberOne: this.state.readout
                }
            )
        }
    }

    equals = () => {

        return new Promise((resolve,reject) => {
            setTimeout( () => {
         if (this.state.numberOne !== "" && this.state.operation !== "" && this.state.readout !== "") {
            console.log(this.state.numberOne);
            console.log(this.state.numberTwo);
            this.setState({
                readout: Number(this.state.numberOne) + Number(this.state.numberTwo),
                numberOne: ""
            })
            //this is if equals is pressed more than once
         } else if (this.state.numberOne === "" && this.state.operation !== "" && this.state.readout !== "") {
            this.setState({
                readout: Number(this.state.readout) + Number(this.state.numberTwo)
            })
         }

         resolve();
        }, 100);
        });
    }

    render() {
        // console.log(Number(this.state.numberOne) + Number(this.state.numberTwo))
        return (
            <div className="calculator">
                <div className="display">{this.state.readout}</div>
                <div className="button clear" onClick={this.clear}>clear</div>
                <div className="button  operator divide">/</div>
                <div className="button number seven" onClick={() => this.buildSum(7)}>7</div>
                <div className="button number eight" onClick={() => this.buildSum(8)}>8</div>
                <div className="button number nine" onClick={() => this.buildSum(9)}>9</div>
                <div className="button operator minus">-</div>
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

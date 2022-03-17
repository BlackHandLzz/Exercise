import React from "react";

class MyInput extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.inputValue}</h1>
                <p>总计： {this.props.b + this.props.c}</p>
                <input
                    type="text"
                    placeholder="请填写"
                    value={this.props.inputVlaue}
                    onChange={this.props.valueInput}
                />
            </div>
        );
    }
};

export default MyInput;

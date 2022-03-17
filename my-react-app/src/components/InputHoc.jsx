import React from "react";

function InputHoc(WrapperComponent) {
    class InputHocComponent extends React.Component {
        state = {
            inputValue: ''
        }

        valueInput(e) {
            this.setState({
                inputValue: e.target.value
            })
        }

        render() {

            const { a, ...props } = this.props;

            return (
                <WrapperComponent
                    inputValue={this.state.inputValue}
                    valueInput={this.valueInput.bind(this)}
                    {...props}
                />
            )
        }
    }
    return InputHocComponent;
}

export default InputHoc;
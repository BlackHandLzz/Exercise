import React from "react";

class MyInputs extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder={this.props.placeholder} ref={this.props.forwardedRef} />
            </div>
        );
    }
}

const MyInput = React.forwardRef((props, ref) => {
    return <MyInputs {...props} forwardedRef={ref} />
})

export default MyInput;
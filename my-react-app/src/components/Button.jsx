import React from "react";
import { BtnStyleContext } from "../context";

class StButton extends React.Component {
    render() {
        return (
            <BtnStyleContext.Consumer>
                {
                    ({ style, doClick }) => (
                        <button
                            style={style}
                            onClick={doClick}
                            {...this.props}
                        />
                    )
                }
            </BtnStyleContext.Consumer>
        );
    }
};

export default StButton;
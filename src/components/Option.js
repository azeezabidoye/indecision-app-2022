import React from "react";

class Option extends React.Component {
    render() {
        return (<div>
           <div className="option">
                <p className="optionResult">{this.props.count}. {this.props.optionText}</p>
                <button onClick={(e) => {this.props.handleRemove(this.props.optionText)}} className="buttonSmall buttonSmall--link">Remove</button>
           </div>
        </div>)
    }
}

export default Option;
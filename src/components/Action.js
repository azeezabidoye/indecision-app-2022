import React from "react";

class Action extends React.Component {
    render() {
    
        return (
            <div>
                <div>
                    <button onClick={this.props.handlePick} disabled={!this.props.hasOption} className="buttonBig">What should I do?</button>
                </div> 
            </div>
        )
    }
}

export default Action;
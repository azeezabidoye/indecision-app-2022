import React from "react";
import Option from "./Option";

class Options extends React.Component {
    render() {
        return (
            <div>
                <div className="widget--header"> 
                    <h3>Your options</h3>
                    <button onClick={this.props.handleRemoveAll} className="buttonSmall buttonSmall--link">Remove All</button>
                </div>

                {this.props.optionList.length === 0 && <p className="widget__msg">Add new options</p>}
                {this.props.optionList.map((option, index) => <Option key={option} optionText={option} handleRemove={this.props.handleRemove} count={index +1} />)}
                
            </div>

        )
    }
}


export default Options;
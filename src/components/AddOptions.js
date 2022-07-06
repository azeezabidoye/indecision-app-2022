import React from 'react';

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e) {
        e.preventDefault();
        const optionValue = e.target.elements.options.value;

        if(optionValue) {
            this.props.addOption(optionValue)
            e.target.elements.options.value = ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form  onSubmit={this.handleAddOption} className="addOption">
                        <input type="text" name="options"  className='addOption--input'/>
                        <button className='buttonSmall'>Add Option</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddOptions;
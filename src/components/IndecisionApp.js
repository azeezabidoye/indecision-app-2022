import React from "react";
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from "../OptionModal";

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.addOption = this.addOption.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.closeModal = this.closeModal.bind(this)

        this.state = {
            optionList: [],
            selectedOption: undefined
        }
    }

    // componentDidMount() {
    //     console.log('O ti Mount')
    // }

    // componentWillUpdate() {
    //     console.log('Omo iya mi...Update!')
    // }

    handlePick() {
        const randomNum = Math.trunc(Math.random() * this.state.optionList.length);
        const finalOption = this.state.optionList[randomNum];
        // alert(finalOption)
        
        this.setState(() => {
            return {
                selectedOption: finalOption
            }
        })
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                optionList: []
            }
        })
    }

    handleRemove(optionToRemove) {
        this.setState((prevState) => {
            return {
                optionList: prevState.optionList.filter(oddOption => oddOption !== optionToRemove )
            }
        })
    }

    addOption(newOption) {
        // console.log(newOption)
        this.setState((prevState) => {
            return {
                optionList: prevState.optionList.concat(newOption)
            }
        })
    }

    closeModal() {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }

  
    render() {
        return (
        <div>
            <Header />
            <div className="container">
                <Action hasOption={this.state.optionList.length > 0} handlePick={this.handlePick}/>
                <div className="widget">
                    <Options optionList={this.state.optionList} handleRemoveAll={this.handleRemoveAll} handleRemove={this.handleRemove} />
                    <AddOptions addOption={this.addOption} />
                </div>
                <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal} />
            </div>
        </div>
        )
    }
}

export default IndecisionApp;
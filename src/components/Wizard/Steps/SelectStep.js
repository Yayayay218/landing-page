import React, {Component} from 'react'

class SelectStep extends Component {
    constructor(props) {
        super(props)

        this.state = {
            money: false,
            service: false,
            insurance: false,
            other: false
        }
    }

    activeMoney = () => {
        this.setState({
            money: true,
            service: false,
            insurance: false,
            other: false
        })
    }

    activeService = () => {
        this.setState({
            money: false,
            service: true,
            insurance: false,
            other: false
        })
    }

    activeInsurance= () => {
        this.setState({
            money: false,
            service: false,
            insurance: true,
            other: false
        })
    }

    activeOther = () => {
        this.setState({
            money: false,
            service: false,
            insurance: false,
            other: true
        })
    }
    render() {
        return (
            <div>
                <h2 className="pl-3 mt-3 pb-4">Apply Now</h2>
                <p className="pl-3 mb-0 text-muted">PLEASE SELECT</p>
                <div className=" btn-group btn-group-toggle select-type" data-toggle="buttons">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"
                            onClick={this.activeMoney}
                        >
                            <label className="btn btn-secondary active">
                                <input
                                    type="radio"
                                    name="options"
                                    id="option1"
                                    autoComplete="off"/>
                                <span className={this.state.money ? 'money-icon active' : 'money-icon'}></span>
                            </label>
                        </li>
                        <li className="list-inline-item"
                            onClick={this.activeService}
                        >
                            <label className="btn btn-secondary">
                                <input
                                    type="radio"
                                    name="options"
                                    id="option2"
                                    autoComplete="off"/>
                                <span className={this.state.service ? 'service-icon active' : 'service-icon'}></span>
                            </label>
                        </li>
                        <li className="list-inline-item"
                            onClick={this.activeInsurance}
                        >
                            <label className="btn btn-secondary">
                                <input
                                    type="radio"
                                    name="options"
                                    id="option3"
                                    autoComplete="off"/>
                                <span className={this.state.insurance ? 'insurance-icon active' : 'insurance-icon'}></span>
                            </label>
                        </li>
                        <li className="list-inline-item"
                            onClick={this.activeOther}
                        >
                            <label className="btn btn-secondary">
                                <input
                                    type="radio"
                                    name="options"
                                    id="option4"
                                    autoComplete="off"/>
                                <span className={this.state.other ? 'other-icon active' : 'other-icon'}></span>
                            </label>
                        </li>
                    </ul>


                </div>
                <p className="pl-3 mb-0 text-muted">WHERE</p>
                <div style={{paddingLeft:'14px',paddingRight:'14px',paddingTop:'10px',paddingBottom:'30px', backgroundColor: '#f3f1f0'}}>
                    <select
                        className="custom-select"
                        defaultValue={0}
                    >
                        <option value="0">Ottawa,On,Canada</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div
                    style={
                        {
                            overflow: 'auto',
                            marginTop: '20px',
                            paddingRight: '15px',
                            paddingLeft: '10px',
                            paddingBottom: '15px'
                        }
                    }>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            id="nextBtn"
                            onClick={this.props.onGoNext}
                            style={{float: 'left', textTransform: 'lowercase', width: '100%'}}>Next
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SelectStep

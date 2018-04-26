import React, {Component} from 'react'
import ApplyWizard from '../Wizard/ApplyWizard'
import SelectStep from '../Wizard/Steps/SelectStep'
import FinanceStep from '../Wizard/Steps/FinanceStep'
import LoginInfoStep from '../Wizard/Steps/LoginInfoStep'
import BirthDayStep from '../Wizard/Steps/BirthDayStep'
import ApplyStep from '../Wizard/Steps/ApplyStep'

class HeroImage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    doSubmit = () => {
        alert('OK')
    }
    render() {
        const steps = [
            {
                render: ({onGoNext}) => (
                    <SelectStep
                        onGoNext={onGoNext}
                    />
                )
            },
            {
                render: ({onGoBack, onGoNext}) => (
                    <FinanceStep
                        onGoBack={onGoBack}
                        onGoNext={onGoNext}
                    />
                )
            },
            {
                render: ({onGoBack, onGoNext}) => (
                    <BirthDayStep
                        onGoBack={onGoBack}
                        onGoNext={onGoNext}
                    />
                )
            },
            {
                render: ({onGoBack, onGoNext}) => (
                    <LoginInfoStep
                        onGoBack={onGoBack}
                        onGoNext={this.doSubmit}
                    />
                )
            }
        ]
        return (
            <header className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-5 mx-auto text-left">
                            <div style={{marginTop: '150px'}}>
                                <h1 className="text-uppercase">
                                    GXX IS INSURANCE
                                </h1>
                                <p>The world’s first and only
                                    financial search engine is at your fingertips
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-outline-light btn-login">
                                    Our company
                                </button>
                            </div>
                        </div>
                        <ApplyWizard
                            initStepIndex={0}
                            steps={steps}
                        />
                    </div>
                </div>
            </header>
        )
    }
}

export default HeroImage

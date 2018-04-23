import React, {Component} from 'react'

class ApplyWizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStepIndex: props.initStepIndex || 0
        };
    }

    render() {
        const {steps} = this.props;
        const {currentStepIndex} = this.state;

        let goBack = () => this.setState({currentStepIndex: currentStepIndex - 1});
        let goNext = () => this.setState({currentStepIndex: currentStepIndex + 1});
        let currentStep = steps[currentStepIndex];

        return (
            <div className="col-lg-7 mx-auto text-left apply-form">
                <div className="row">
                    <div className="col-lg-7 offset-lg-5 register">
                        <form id="regForm">
                            <h2 className="pl-2">Apply Now</h2>
                            {currentStep.render({
                                onGoBack: goBack,
                                onGoNext: goNext,
                            })}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApplyWizard
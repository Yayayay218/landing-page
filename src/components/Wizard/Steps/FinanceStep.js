import React from 'react'

const FinanceStep = (props) => (

    <div style={{padding: '15px'}}>
        <h2 className="mt-3 pb-4">Apply Now</h2>
        <p className="text-muted text-uppercase">What kind of loan ?</p>
        <p><textarea className="form-control" id="formLoan" rows="3">
                    </textarea></p>
        <p className="text-muted text-uppercase">Amount requested</p>
        <p><textarea className="form-control" id="formAmount"  rows="3">
                      </textarea></p>
        <p className="text-muted text-uppercase">Anything else you want to add</p>
        <p><textarea className="form-control" id="formElse" rows="3">
                        </textarea></p>
        <div
            style={
                {
                    overflow: 'auto',
                    marginTop: '20px',
                    paddingBottom: '15px'
                }
            }>
            <div>
                <button
                    type="button"
                    id="prevBtn"
                    className="btn btn-secondary prev-btn mr-2"
                    onClick={props.onGoBack}
                    style={{width: '47%', float: 'left', display: 'inline'}}>Previous
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    id="nextBtn"
                    onClick={props.onGoNext}
                    style={{float: 'right', textTransform: 'lowercase', display: 'inline', width: '47%'}}>Next
                </button>
            </div>
        </div>
    </div>

)

export default FinanceStep

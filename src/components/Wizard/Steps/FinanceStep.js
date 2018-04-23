import React from 'react'

const FinanceStep = (props) => (
    <div style={{padding: '15px'}}>
        <p className="text-muted">What kind of loan ?</p>
        <p><textarea className="form-control" id="formLoan" placeholder="How can we help?" rows="3">
                    </textarea></p>
        <p className="text-muted">Amount requested</p>
        <p><textarea className="form-control" id="formAmount" placeholder="How can we help?" rows="3">
                      </textarea></p>
        <p className="text-muted">Anything else you want to add</p>
        <p><textarea className="form-control" id="formElse" placeholder="How can we help?" rows="3">
                        </textarea></p>
        <div
            style={
                {
                    overflow: 'auto',
                    marginTop: '20px',
                    paddingRight: '15px',
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
                    style={{float: 'left', textTransform: 'lowercase', display: 'inline', width: '47%'}}>Next
                </button>
            </div>
        </div>
    </div>

)

export default FinanceStep
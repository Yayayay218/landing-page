import React from 'react'

const ApplyStep = (props) => {
    return (
        <div>
            <h2 className="pl-2">Would you like to sign up ?</h2>
            <button type="button" className="btn btn-primary btn-lg btn-block fb-btn"><i class="fa fa-facebook" aria-hidden="true"></i> Connect with Facebook</button>
            <h5>
  <span>Continue as guest</span>
</h5>
            <p><input placeholder="Name"/></p>
            <p><input placeholder="Email"/></p>
            <p><input placeholder="Phone"/></p>
            <p><input placeholder="Password"/></p>

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
                        style={{width: '47%', float: 'left'}}>Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        id="nextBtn"
                        onClick={props.onGoNext}
                        style={{float: 'left', textTransform: 'lowercase', width: '47%'}}>Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApplyStep

import React from 'react'

const BirthDayStep = (props) => {
    return (
        <div>
            <h2 className="mt-3 pb-4">Would you like<br/> to sign up ?</h2>
            <button type="button" style={{borderRadius:'6px',textTransform:'lowercase'}} className="btn btn-primary btn-lg btn-block fb-btn mt-3 mb-3"><i className="fa fa-facebook" aria-hidden="true"></i> Connect with Facebook</button>
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
                        paddingBottom: '15px'
                    }
                }>
                <div>
                    <button
                        type="button"
                        id="prevBtn"
                        className="btn btn-secondary prev-btn"
                        onClick={props.onGoBack}
                        style={{width: '47%', float: 'left'}}>Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        id="nextBtn"
                        onClick={props.onGoNext}
                        style={{float: 'right', textTransform: 'lowercase', width: '47%'}}>Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BirthDayStep

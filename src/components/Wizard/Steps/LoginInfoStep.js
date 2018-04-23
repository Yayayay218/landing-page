import React from 'react'

const LoginInfoStep = (props) => {
    return (
        <div>Login Info:
            <p><input placeholder="Username..."/></p>
            <p><input placeholder="Password..."/></p>

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
                        style={{float: 'left', textTransform: 'lowercase', width: '47%'}}>Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginInfoStep
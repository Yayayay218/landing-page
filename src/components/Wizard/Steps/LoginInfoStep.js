import React from 'react'

const LoginInfoStep = (props) => {
    return (
        <div id="selectTime">
          <h2 className="mt-3 pb-4">Apply Now</h2>
          <p className="mb-0 text-muted text-uppercase">Prefered time for call</p>
          <div className="btn-group btn-group-toggle time-btn btn-lg btn-block" style={{paddingLeft:'0px',paddingRight:'0px'}} data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Morning
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off" /> Evening
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off" /> Weekend
  </label>
</div>
  <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gambling as an addictive and distractive habit. Statistics show that while 85 percent of the adult population in the US enjoys some</p>
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
                        style={{float: 'right', textTransform: 'lowercase', width: '47%'}}>Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginInfoStep

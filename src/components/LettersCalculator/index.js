import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  changeLetter = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <div className="letter-container">
            <div className="letter">
              <h1 className="main-heading"> Calculate the letter you Enter </h1>
              <label htmlFor="labell" className="phrase">
                {' '}
                Enter the phrase
              </label>
              <input
                id="labell"
                type="text"
                placeholder="Enter the phrase"
                className="input"
                onChange={this.changeLetter}
                value={searchInput}
              />
              <div>
                <p className="button"> No of letters: {searchInput.length} </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

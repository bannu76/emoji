// Write your code here.

import './index.css'

const NavBar = props => {
  const {resultant, score, topScore} = props
  console.log()
  return resultant ? (
    <div className="nav-bar">
      <div className="nav-bar-item">
        <img
          className="av-bar-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
    </div>
  ) : (
    <div className="nav-bar">
      <div className="nav-bar-item">
        <img
          className="nav-bar-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      <div className="nav-bar-item">
        <p className="para-score">
          Score: <span>{score}</span>
        </p>
        <p>
          Top Score: <span>{topScore}</span>{' '}
        </p>
      </div>
    </div>
  )
}
export default NavBar

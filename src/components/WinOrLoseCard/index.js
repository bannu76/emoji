// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {reset, emojiIdList, score} = props
  console.log()

  const imgUrl =
    emojiIdList.length === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const playAgainClick = () => {
    reset()
  }
  return (
    <div className="bg-container-win-lose">
      <div className="win-lose-sub">
        {emojiIdList.length === 12 ? <h1>You Won</h1> : <h1>You Lose</h1>}

        {emojiIdList.length === 12 ? (
          <div className="score-para-bestscore">
            <p>Best Score</p>
            <p className="best-score">{score}</p>
          </div>
        ) : (
          <div className="score-para-bestscore">
            <p>Score</p>

            <p className="score">
              {score}
              <span>/12</span>
            </p>
          </div>
        )}

        <button
          onClick={playAgainClick}
          className="play-again-button"
          type="button"
        >
          Play Again
        </button>
      </div>
      <div className="win-lose-image-container">
        <img className="win-lose-image" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard

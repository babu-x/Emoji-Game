// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isPlayAgainClicked, countScore, winOrLose} = props
  const playAgain = () => {
    isPlayAgainClicked()
  }
  return (
    <div className="card">
      {winOrLose ? (
        <div className="win-or-lose-card">
          <div className="text-container">
            <h1 className="heading">You Won</h1>
            <div>
              <h1 className="score-heading">Best Score</h1>
              <h1 className="show-score">{countScore}/12</h1>
              <button type="button" className="play-btn" onClick={playAgain}>
                Play Again
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="lose game"
              className="results-image"
            />
          </div>
        </div>
      ) : (
        <div className="win-or-lose-card">
          <div className="text-container">
            <h1 className="heading">You Lose</h1>
            <div>
              <h1 className="score-heading">Score</h1>
              <h1 className="show-score">{countScore - 1}/12</h1>
              <button type="button" className="play-btn" onClick={playAgain}>
                Play Again
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="lose game"
              className="results-image"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard

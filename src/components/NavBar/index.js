// Write your code here.
import './index.css'

const NavBar = props => {
  const {countScore, totalScore, clickPrevious} = props
  const hideResults = clickPrevious ? 'hide-score-container' : null

  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <p className="logo-name">Emoji Game</p>
      </div>
      <div className={`score-container ${hideResults}`}>
        <p className="scores-des margin">Score: {countScore}</p>
        <p className="scores-des">Total Score: {totalScore}</p>
      </div>
    </div>
  )
}

export default NavBar

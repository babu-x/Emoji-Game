/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    onClick: false,
    countScore: 0,
    clickedList: [],
    clickPrevious: false,
    totalScore: 0,
  }

  onShuffleEmojisList = id => {
    const {emojisList} = this.props
    const {clickedList, countScore} = this.state
    this.setState({onClick: true})
    this.setState(prevState => ({countScore: prevState.countScore + 1}))

    let newEmoji
    emojisList.map(eachEmoji => {
      if (eachEmoji.id === id) {
        newEmoji = eachEmoji.id
      }
      return null
    })
    this.setState(prevState => ({
      clickedList: [...prevState.clickedList, newEmoji],
    }))

    if (clickedList.includes(id)) {
      return this.setState({
        clickPrevious: true,
        clickedList: [],
        totalScore: countScore,
      })
    }
    return this.setState({clickPrevious: false})
  }

  isPlayAgainClicked = () => {
    this.setState({clickPrevious: false, countScore: 0})
  }

  render() {
    const {emojisList} = this.props
    const {onClick, countScore, clickPrevious, totalScore} = this.state
    const shuffleList = onClick
      ? emojisList.sort(() => Math.random() - 0.5)
      : emojisList
    const winOrLose = countScore === 12
    return (
      <div className="app-container">
        <NavBar
          clickPrevious={clickPrevious}
          countScore={countScore}
          totalScore={totalScore}
        />
        <div className="emoji-section">
          {clickPrevious ? (
            <WinOrLoseCard
              winOrLose={winOrLose}
              countScore={countScore}
              isPlayAgainClicked={this.isPlayAgainClicked}
            />
          ) : (
            <ul className="emoji-list-container">
              {shuffleList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onShuffleEmojisList={this.onShuffleEmojisList}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame

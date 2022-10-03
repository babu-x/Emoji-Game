// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onShuffleEmojisList} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const shuffleEmojis = () => {
    onShuffleEmojisList(id)
  }
  return (
    <li className="emoji-card">
      <img
        className="emoji"
        src={emojiUrl}
        alt={emojiName}
        onClick={shuffleEmojis}
      />
    </li>
  )
}
export default EmojiCard

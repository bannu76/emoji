// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, emojiClick} = props
  // console.log(emoji)
  const onEmojiClick = () => {
    emojiClick(emoji.id)
  }
  return (
    <button onClick={onEmojiClick} className="emoji-button" type="button">
      <li key={emoji.id} className="card-container">
        <div className="card">
          <img
            className="emoji-image"
            src={emoji.emojiUrl}
            alt={emoji.emojiName}
          />
        </div>
      </li>
    </button>
  )
}
export default EmojiCard

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
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const idList = []
class EmojiGame extends Component {
  state = {emojiIdList: idList, resultant: false, score: 0, topScore: 0}

  emojiClick = id => {
    const {emojiIdList} = this.state
    if (emojiIdList.includes(id)) {
      this.setState({resultant: true})
    } else {
      this.setState(prevState => ({
        emojiIdList: [...prevState.emojiIdList, id],
        score: prevState.score + 1,
      }))
    }
  }

  reset = () => {
    const {score, topScore} = this.state
    this.setState({emojiIdList: idList, resultant: false})
    if (score > topScore) {
      this.setState({
        score: 0,
        topScore: score,
      })
    } else {
      this.setState({
        score: 0,
        topScore,
      })
    }
  }

  render() {
    const {resultant, emojiIdList, score, topScore} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    // console.log(emojisList)

    const displayEmoji = (
      <ul>
        {shuffledEmojisList.map(item => (
          <EmojiCard key={item.id} emojiClick={this.emojiClick} emoji={item} />
        ))}
      </ul>
    )
    const displayWinLoseCard = (
      <WinOrLoseCard
        emojiIdList={emojiIdList}
        score={score}
        reset={this.reset}
      />
    )
    return (
      <div className="bg-container">
        <NavBar resultant={resultant} score={score} topScore={topScore} />
        {resultant ? displayWinLoseCard : displayEmoji}
      </div>
    )
  }
}
export default EmojiGame

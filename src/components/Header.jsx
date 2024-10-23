import '../styles/header.css';

const Header = ( { score, highScore }) => {
  return (
    <>
    <div className="wrapper">
      <div className="header">
        <h1 className="title">Memory Game</h1>
        <div className="score-board">
          <p className="score">Score: {score}</p>
          <p className="high-score">High Score: {highScore}</p>
        </div>
      </div>
      <p className="description">Get points by clicking on an image but don't click on any more than once!</p>   
    </div>
         
    </>
  )
}

export default Header;
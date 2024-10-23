const Header = ( { score, bestScore }) => {
  return (
    <>
      <h1>Memory Game</h1>
      <h4>Get points by clicking on an image but don't click on any more than once!</h4>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </>
  )
}

export default Header;
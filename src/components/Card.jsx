
const Card = ({pokeImg, name, onClick}) => {
  return (
    <div className="card custom-card" onClick={onClick}>
      <img src={pokeImg} alt="" height={300} width={300}/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
      </div>
    </div>
  )
}

export default Card;
const Flop = ({flop, isSelected, handleClick}) => {

  const getButtonText = (id) => {
    return isSelected === id ? 'Unvote' : 'Vote';
  }

  const disableButton = (id) => {
    return isSelected !== id && isSelected !== -1;
  }

    const isFlopSelected = (id) => {
    return isSelected === id;
  }

return (
  <div className="card" >
    <h2>{flop.name}</h2>
    <p hidden={!isFlopSelected(flop.id)}>Chosen!</p>
    <img className="grid-img" src={flop.img} alt={flop.name}/>
    <button className="btn" onClick={() =>{handleClick(flop.id)}} disabled={disableButton(flop.id)}>{getButtonText(flop.id)}</button>
  </div>
)
};

export default Flop;

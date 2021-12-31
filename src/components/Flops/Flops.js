import {useState} from 'react'

import Flop from '../Flop/Flop';

const Flops = ({flops}) => {
  const [isSelected, setIsSelected] = useState(-1);

  const handleClick = (id) => {
    if (isSelected === id) {
      setIsSelected(-1);
    } else {
      setIsSelected(id)
    }
  }


  return (
    <div className="container">
      <div className="grid">
        {
          flops.map(flop => (
            <Flop flop={flop} isSelected={isSelected} handleClick={handleClick}/>
          ))
        }
    </div>
  </div>
  )
      };

export default Flops;

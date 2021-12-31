import {flops} from './flops';

import Header from './components/Header/Header';
import Flops from './components/Flops/Flops';
import Footer from './components/Footer/Footer';

const App = () =>{
  return (
    <div className="App">
      <Header title="Flop Voter"/>
      <Flops flops={flops}/>
      <Footer/>
    </div>
  );
}

export default App;

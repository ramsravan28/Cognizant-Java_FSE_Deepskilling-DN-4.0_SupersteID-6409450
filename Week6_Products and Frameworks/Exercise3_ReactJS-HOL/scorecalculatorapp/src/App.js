//import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateSore';

function App() {
  return (
    <div >
      <CalculateScore Name={"Steeve"}
      School={"DNV public School"}
      total={284}
      goal={3}
      />
    </div>
  );
}

export default App;

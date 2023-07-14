import logo from './logo.svg';
import './App.css';
import SignaturePad from 'react-signature-pad-wrapper';

function App() {
  
  return (
    <div className="App">
        <SignaturePad options={{minWidth: 5, maxWidth: 10, penColor: 'rgb(66, 133, 244)'}}></SignaturePad>
    </div>
  );
}

export default App;

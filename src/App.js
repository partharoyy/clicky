
import './App.css';
import UploadPics from './Components/UploadPics';
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  return (
    <div className="App">
      <UploadPics />
    </div>
  );
}

export default App;

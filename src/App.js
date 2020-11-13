
import './App.css';
import pdfSample from "./pdfs/pdfSample.pdf";

import MultiPage from './multiPage'

function App() {
  return (
    <div className="App">
     <MultiPage pdf={pdfSample} />
    </div>
  );
}

export default App;

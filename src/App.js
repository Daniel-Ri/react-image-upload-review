import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import UploadImages from "./components/image-upload.component";

function App() {
  return (
    <div className="container">
      <h3>bezkoder.com</h3>
      <h4>React Image Upload with Preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;

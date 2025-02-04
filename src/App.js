import { useState } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';
import jsonData from './components/FileData.json'

function App() {
  const [fileSystem,setFileSystem] = useState (jsonData)
  return (
    <div className="App">
     <FileExplorer fileSystem={fileSystem} setFileSystem={setFileSystem} />
    </div>
  );
}

export default App;
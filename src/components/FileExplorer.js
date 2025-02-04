import React, { useState } from "react";
import DirectoryTree from "./DirectoryTree";
import FileContent from "./FileContent";
import FileOprations from "./FileOprations";

const FileExplorer = ({ fileSystem, setFileSystem }) => {
  const [currentDir, setCurrentDir] = useState(fileSystem);
  const handleDirClick = (dir) => {
    if (dir?.type === "directory") {
      setCurrentDir(dir);
    }
  };
  return (
    <><h1>File Explorer</h1>
      <div className="file-explorer" style={{marginTop:"2rem"}}>
        <DirectoryTree
          currentDir={currentDir}
          handleDirClick={handleDirClick}
        />
        <div className="file-content">
          <FileOprations
            currentDir={currentDir}
            setFileSystem={setFileSystem}
          />
          <FileContent currentDir={currentDir} />
        </div>
      </div>
    </>
  );
};

export default FileExplorer;

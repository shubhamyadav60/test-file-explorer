import React from "react";

const FileContent = ({currentDir}) =>{

    return (
        <>
        <div className="file-content-view">
            { currentDir?.type === 'file' ? (
                <div> Viewing file : {currentDir?.name} </div>
            ):(<div> Select a file to view</div>)}
        </div>
        </>
    )
}

export default FileContent
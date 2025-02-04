import React, { useState } from "react";

const FileOprations = ({currentDir,setFileSystem})=>{
    const [newName,setNewName] = useState ('')
const handleCreateFile = () => {
    const newFile = { name : newName};
    currentDir?.Folders?.push(newFile);
    setFileSystem({...currentDir})
}
const handleCreateFolder = () => {
    const newFolder = { name : newName , type : "folder" , file : []};
    currentDir?.Folders?.push(newFolder);
    setFileSystem({...currentDir})
}

const handleRename = () => {
    if(newName) {
        currentDir.name = newName;
        setFileSystem({...currentDir})
    }
}

const handleDelete = () => {
    const parent = currentDir?.parent;
    const updatedFolder = parent?.Folders?.filter ((item)=> item?.name !== currentDir?.name);
    parent.Folders = updatedFolder;
    setFileSystem({...parent})
    if(newName) {
        currentDir.name = newName;
        setFileSystem({...currentDir})
    }


}
    return (
        <>
        <div style={{backgroundColor:"black",display:"block",gap:"5rem"}}>
            <input type="text"
            value={newName}
            onChange={(e)=>{setNewName(e.target.value);}}
            placeholder="Enter new name"
            
            style={{width:"90%",padding:"8px",marginTop:"1rem"}}/>
            <div style={{padding:"2rem" , display:"flex",justifyContent:"space-between"}}>
            <button onClick={handleRename} style={{backgroundColor:"blue",padding:"8px",borderRadius:"5px"}} >Rename</button>
            <button onClick={handleCreateFile} style={{backgroundColor:"yellow",padding:"8px",borderRadius:"5px"}}>Create File</button>
            <button onClick={handleCreateFolder} style={{backgroundColor:"yellow",padding:"8px",borderRadius:"5px"}} >Create Folder</button>
            <button onClick={handleDelete} style={{backgroundColor:"red",padding:"8px",borderRadius:"5px"}} >Delete</button>
            </div>
           

        </div>
        </>
    )
}

export default FileOprations
import React, { useState } from "react";

const DirectoryTree = ({ currentDir, handleDirClick }) => {
  const [expanded, setExpanded] = useState(false);
  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div>
        <div
          onClick={() => {
            handleToggleExpanded();
          }}
          className=""
        >
          {currentDir?.type === "directory" ? (expanded ? "-" : "+") : ""}{" "}
          {currentDir?.type === "directory" ? (
            <img
              src="https://i.pinimg.com/474x/37/29/61/3729617452425f23b079bb0de458293a.jpg"
              style={{ height: "18px" }}
              alt="photo"
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVAEuwhxH8OvQemf7mrQ_wzCDL6DodQEDuw&s"
              style={{ height: "18px" }}
              alt="pitcher"
            />
          )}{" "}
          {currentDir?.name}
        </div>
        {expanded && currentDir?.Folders && (
          <div>
            {currentDir?.Folders?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleDirClick(item);
                  }}
                >
                  <DirectoryTree
                    currentDir={item}
                    handleDirClick={handleDirClick}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DirectoryTree;

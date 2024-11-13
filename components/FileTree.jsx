import React, { useState } from 'react';

const FileTree = ({ children }) => {
  return <div className="file-tree">{children}</div>;
};

const Folder = ({ name, defaultOpen, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div onClick={toggleOpen} className="folder-name">
        {isOpen ? '📂' : '📁'} {name}
      </div>
      {isOpen && <div className="folder-contents">{children}</div>}
    </div>
  );
};

const File = ({ name }) => {
  return <div className="file">📄 {name}</div>;
};

FileTree.Folder = Folder;
FileTree.File = File;

export default FileTree;
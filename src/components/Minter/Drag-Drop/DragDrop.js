import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import './DragDrop.css';
import paper from '../../../assests/Paper.png'


const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",

};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  justifyContent: "center",
  paddingBottom: 8,

  width: '100%',
  height: 280,
  padding: 4,
  boxSizing: "border-box",
  zIndex: 0,
  backgroundColor: "rgb(5 47 91)"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

function Dropzone({setImage = () => {}}) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
      setImage(acceptedFiles[0])
    }
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    setImage('')
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
      <button onClick={removeFile(file)} className="btnClose">X</button>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <div
        {...getRootProps({ className: "dropzone" })}
        onClick={(e) => e.stopPropagation}

      >
        <div className="position-absolute center-content">
          <input {...getInputProps()} />
          <img src={paper} alt="paper" className="mb-2" />
          <p className="mb-1"> Drag media or <button type="button" onClick={open} className="btn-upload">
            Upload
          </button></p>

          <span className="light-font pt-3">(Supported:JPEG, GIF, PNG, SVG, glTF, GLB, MP3, MP4, WebM)</span>
        </div>


        <div>

          <aside style={thumbsContainer}>{thumbs}</aside>
        </div>
      </div>




      {/* <div className= "dropzone" >
      <div
        {...getRootProps}
        role="button" onClick={open}
      >
        <div className="position-absolute middletext"  >
            <input {...getInputProps()} />
        <p className="text-center">
          <img src={paper} alt="paper" className="mb-2" /><br/>
          Drag media or upload
        <br/>
        <span className="light-font pt-3">(Supported:JPEG, GIF, PNG, SVG, glTF, GLB, MP3, MP4, WebM)</span></p>
                </div>
        </div>
        <div>
           <div style={thumbsContainer} className="thumsContainer">{thumbs}</div>
        </div>
      
      </div> */}
    </section>
  );
}

export default Dropzone;
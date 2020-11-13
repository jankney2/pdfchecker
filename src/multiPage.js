import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MultiPage = props => {
  const [numPages, setNumPages] = useState(null);

  function onSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <div>
      <Document
        // options={{workerSrc:'../'}}
        className="pdfHold"
        renderMode="svg"
        file={pdf}
        onLoadSuccess={onSuccess}
        onSourceError={err => console.log(err)}
      >
        {Array.from(new Array(numPages), (el, index) => {
          return (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={350}
            />
          );
        })}
      </Document>
    </div>
  );
};

export default MultiPage;

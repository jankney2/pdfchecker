import React, {useState} from "react";
import { Document, Page } from "react-pdf";

import pdfSample from "./pdfs/pdfSample.pdf";

const MultiPage = props => {

    const [numPages, setNumPages]=useState(null)


    function onSuccess({numPages}){
        setNumPages(numPages)
    }




  return <div>

    <Document 
    
    file={pdfSample}
    options={{workerSrc:'/pdf.worker.js'}}
    onLoadSuccess={onSuccess}
    
    >

{Array.from(new Array(numPages), (el, index)=>{
    return <Page key={`page_${index+1}`} pageNumber={index+1} />
})}

    </Document>

  </div>;
};

export default MultiPage;

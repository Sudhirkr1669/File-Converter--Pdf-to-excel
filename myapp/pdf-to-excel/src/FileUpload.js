import React, { useEffect, useState } from 'react';

function FileUpload() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:8000/uploadfile')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  console.log(data);

  return (
    <div>
        {data && <p>{data.message}</p>}
      {/* <h1>React App with Node.js Express Integration</h1>
      
      {/* <div dangerouslySetInnerHTML={{ __html: data}}></div> */}
      {/* {data} */}
    </div>
  );
}

export default FileUpload;
// src/components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [message, setMessage] = useState("");
    const [submittedMessage, setSubmittedMessage] = useState("");
    const [response , setResponse] = useState("");
    const [response1 , setResponse1] = useState("");

    const [response2 , setResponse2] = useState("");
    // const [response3 , setResponse3] = useState("");

    // const [state, setState] = useState({
    //   variable1: '',
    //   variable2: '',
    //   variable3: '',
    // });
  //   const 
    
  
    const handleInputChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      setSubmittedMessage(message);
      let fullinput = message;
  
      try {
          const res = await axios.post('http://localhost:8000/db', { prompt: fullinput });
    
          // Replace line breaks with HTML line breaks for formatting
          const formattedResponse = res.data.mongo1;
          

          // setState({
          //   // ...state, // Spread the current state
          //   variable1: formattedResponse0, // Update variable1
          //   variable1: formattedResponse1,
          //   variable1: formattedResponse2,
          // });

          // console.log(state.variable1);
        //   setResponse(formattedResponse);
          // console.log(formattedResponse.Ayurvedic_Cure);
          setResponse(formattedResponse.Ayurvedic_Cure);
          setResponse1(formattedResponse.
            Allopathic_Medicine
            );
          setResponse2(formattedResponse.Symptom
            );



        } catch (error) {
          console.error('Error:', error);
        }
  
  
      setMessage(""); // Clear the input field
    };
  
  
  


    const [searchType, setSearchType] = useState('medicineName');

    const handleSearchTypeChange = (e) => {
      setSearchType(e.target.value);
    };


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('uploadFile', selectedFile);
  
      try {
        const res = await axios.post('http://localhost:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // console.log(res.data.word);
        // const formattedResponse1 = res.body;
        // setResponse3(formattedResponse1);
        // alert('hi'+formattedResponse1+res.body);
        const formattedResponse = res.data.word;
        console.log(res.data.word);

        setResponse(formattedResponse.Ayurvedic_Cure);
          setResponse1(formattedResponse.
            Allopathic_Medicine
            );
          setResponse2(formattedResponse.Symptom
            );



        // console.log(formattedResponse1); // Assuming your server responds with the file path
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('No file selected');
    }
  };


  return (
    <div>
      {/* <h2>Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button> */}

      <div>
      <label htmlFor="searchType">Search Type:</label>
      <select id="searchType" class="form-control" value={searchType} onChange={handleSearchTypeChange}>
        <option value="medicineName">Search via Medicine Name</option>
        <option value="symptomName">Search via Symptom Name</option>
        <option value="uploadImage">Upload Image of Medicine</option>
      </select>

      <div id="inputFields" style={{marginTop: '26px'}}>
        {searchType === 'medicineName' && (
          <div>
            <label >Medicine Name:"Antihistamines","Sleeping Pills","Probiotics"</label>
            <input type="text" class="form-control" id="medicineName" name="medicineName" value={message} onChange={handleInputChange} placeholder='Enter medicine name' />
            <button onClick={handleSubmit}>Search</button> 
          </div>
        )}

        {searchType === 'symptomName' && (
          <div>
            <label htmlFor="symptomName">Symptom Name:"Stomachache","Insomnia","Digestive Issues"</label>
            <input type="text" class="form-control" id="symptomName" name="symptomName" value={message} onChange={handleInputChange} placeholder='Enter symptom name'/>
            <button onClick={handleSubmit}>Search</button> 
          </div>
        )}

        {searchType === 'uploadImage' && (
          <div>
            <label htmlFor="imageUpload">Upload Image:</label>
            <input type="file" class="form-control" id="imageUpload" name="imageUpload"  onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload</button> 
          </div>
        )}
      </div>
     
    </div>
    <p><h5>Symptom Name:</h5>{response2}<br/><h5>Allopathic Medicine:</h5>{response1}<br/><h5>Allopathic Cure:</h5>{response}</p>
    {/* <h2>{response3}</h2> */}
    </div>
  );
};

export default ImageUpload;

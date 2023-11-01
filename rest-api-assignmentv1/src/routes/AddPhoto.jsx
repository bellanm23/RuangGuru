import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddPhoto = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dateTime = new Date();
  
  const API_BASE_URL = "http://localhost:3001/photos"

  const addPhoto = (e) => {
    e.preventDefault();
    // TODO: answer here
    const newData = {
      imageUrl: imageUrl,
      captions: captions,
      createdAt: dateTime,
      updatedAt: dateTime,
      secret: secret,
    }
    fetch(`${API_BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type" : "application/json",
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(!responseJson.error) {
        navigate("/photos");
      }else {
        setError(responseJson.error);
      }
    })
  }

  return (
    <>
      <div className="container">
      {error && <div className="error-msg">{error}</div>}
        <form className="add-form"  onSubmit={addPhoto}>
          <label>
            Image Url:
            <input
              className="add-input"
              type="text"
              data-testid="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <label>
            Captions:
            <input
              className="add-input"
              type="text"
              data-testid="captions"
              value={captions}
              onChange={(e) => setCaptions(e.target.value)}
            />
          </label>
          <label>
            Secret:
            <input
              className="add-input"
              type="text"
              value={secret}
              data-testid="secret"
              onChange={(e) => setSecret(e.target.value)}
            />
          </label>
          <input className="submit-btn" type="submit" value="Submit" data-testid="submit" />
        </form>
      </div>
    </>
  );
};

export default AddPhoto;

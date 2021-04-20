import React, { useEffect, useState } from "react";
import Instance from "../Axios";

const API_KEY = "d202f1e62b3af62627c5c2f36246f4f1";

const LyricsBox = (props) => {
  const [Lyrics, setLyrics] = useState("");

  const gobackHandler = () => {
    props.history.goBack();
  };

  let id = {};
  const queryDecode = new URLSearchParams(props.location.search);
  for (let parm of queryDecode.entries()) {
    id[parm[0]] = parm[1];
  }

  let keys = Object.keys(id);

  //useEffect(() => console.log(keys), []);

  useEffect(() => {
    Instance.get(`track.lyrics.get?track_id=${keys[0]}&apikey=${API_KEY}`)
      .then((res) => setLyrics(res.data.message.body.lyrics.lyrics_body))
      .catch((error) => {});
  }, []);

  return (
    <div>
      <div className="card m-5">
        <h5 className="card-header">{keys[1]}</h5>
        <div className="card-body">
          <h5 className="card-title">{keys[2]}</h5>
          <p className="card-text">{Lyrics}</p>
          <button onClick={gobackHandler} className="btn btn-primary m-auto">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LyricsBox;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        {" "}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: "1rem",
            backgroundColor: "skyblue",
            color: "white",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          ⬅ Back
        </button>
      </div>

      <div>
        <h2>Character Details</h2>
        <img
          src={data.image}
          alt={data.name}
          style={{ borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <p>
          Name: <strong>{data.name || "NA"}</strong>
        </p>
        <p>
          Status: <strong>{data.status || "NA"}</strong>
        </p>
        <p>
          Species: <strong>{data.species || "NA"}</strong>
        </p>
        <p>
          Type: <strong>{data.type || "NA"}</strong>
        </p>
        <p>
          Gender: <strong>{data.gender || "NA"}</strong>
        </p>
        <p>
          Origin Location: <strong>{data.origin?.name || "NA"}</strong>
        </p>
        <p>
          Current Location: <strong>{data.location?.name || "NA"}</strong>
        </p>
        <p>
          Episode Appearances: <strong>{data.episode?.length || "NA"}</strong>
        </p>
      </div>
    </div>
  );
}

export default CharacterDetails;

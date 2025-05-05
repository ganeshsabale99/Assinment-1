import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CharacterList() {
  const ITEMS_PER_PAGE = 6;

  const [allData, setAllData] = useState([]); 
  const [apiPage, setApiPage] = useState(1); 
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${apiPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data.results);
        setCurrentPage(1); 
      });
  }, [apiPage]);

  const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = allData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <h1>Character List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {currentItems.map((character) => (
          <div
            key={character.id}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 5px 10px",
              padding: "16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <Link to={`/character/${character.id}`}>
              <img
                style={{ border: "1px solid black", borderRadius: "18px" }}
                src={character.image}
                alt={character.name}
              />
              <br />
              <br />
              <strong>{character.name}</strong>
              <br />
              <br />
            </Link>
          </div>
        ))}
        <div
          style={{
            gridColumn: "span 3",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage((p) => p - 1);
              } else if (apiPage > 1) {
                setApiPage((p) => p - 1);
              }
            }}
            disabled={apiPage === 1 && currentPage === 1}
            style={{
              backgroundColor: "skyblue",
              color: "white",
              border: "none",
              padding: "8px 16px",
              marginRight: "8px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Previous
          </button>

          <span style={{ margin: "0 12px", fontWeight: "bold" }}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage((p) => p + 1);
              } else {
                setApiPage((p) => p + 1);
              }
            }}
            disabled={currentPage === totalPages}
            style={{
              backgroundColor: "skyblue",
              color: "white",
              border: "none",
              padding: "8px 16px",
              marginLeft: "8px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterList;

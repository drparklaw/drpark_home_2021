import React, { useEffect, useState } from "react";
import "./LegalDictionary.css";

function LegalDictionary() {
  const [terms, setTerms] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/LegalTerms.xml")
      .then((res) => res.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        const items = Array.from(
          xml.getElementsByTagName("term")
        ).map((node) => ({
          name:
            node.getElementsByTagName("name")[0]
              ?.textContent || "",

          english:
            node.getElementsByTagName("english")[0]
              ?.textContent || "",

          concept:
            node.getElementsByTagName("concept")[0]
              ?.textContent || "",

          example:
            node.getElementsByTagName("example")[0]
              ?.textContent || "",

          image:
            node.getElementsByTagName("image")[0]
              ?.textContent || "",
        }));

        setTerms(items);
      });
  }, []);

  const handleSearch = () => {
    const q = query.trim().toLowerCase();

    if (!q) {
      setResults([]);
      setSearched(false);
      return;
    }

    const filtered = terms.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.concept.toLowerCase().includes(q)
    );

    setResults(filtered);
    setSearched(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="ld-container">

      <div className="ld-search-wrapper">
        <h1 className="ld-logo">
          법률용어사전
        </h1>

        <div className="ld-search-box">
          <input
            type="text"
            className="ld-search-input"
            placeholder="법률용어를 검색하세요"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button
            className="ld-search-button"
            onClick={handleSearch}
          >
            검색
          </button>
        </div>
      </div>

      {searched && (
        <div className="ld-results">

          {results.length === 0 ? (

            <div className="ld-empty-box">
              <div className="ld-empty-icon">
                ⚖️
              </div>

              <div className="ld-empty-title">
                검색 결과가 없습니다
              </div>

              <div className="ld-empty-sub">
                다른 법률용어를 검색해보세요.
              </div>
            </div>

          ) : (

            results.map((item, idx) => (

              <div className="ld-card" key={idx}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="ld-image"
                  onClick={() =>
                    setSelectedImage(item.image)
                  }
                />

                <div className="ld-content">

                  <h2 className="ld-title">
                    {item.name}
                  </h2>

                  <div className="ld-english">
                    {item.english}
                  </div>

                  <div className="ld-section">
                    <div className="ld-label">
                      개념
                    </div>

                    <div>
                      {item.concept}
                    </div>
                  </div>

                  <div className="ld-section">
                    <div className="ld-label">
                      사용례
                    </div>

                    <div>
                      {item.example}
                    </div>
                  </div>

                </div>
              </div>

            ))

          )}
        </div>
      )}

      {/* IMAGE POPUP */}

      {selectedImage && (

        <div
          className="ld-modal"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <div className="ld-modal-content">

            <button
              className="ld-modal-close"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt=""
              className="ld-modal-image"
            />

          </div>
        </div>

      )}

    </div>
  );
}

export default LegalDictionary;
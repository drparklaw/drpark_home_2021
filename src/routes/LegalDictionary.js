import React, { useEffect, useState, useRef } from "react";
import "./LegalDictionary.css";

function LegalDictionary() {
  const [terms, setTerms] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 실시간 추천 기능을 위한 상태 및 Ref
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  // XML 데이터 로드
  useEffect(() => {
    fetch("/LegalTerms.xml")
      .then((res) => res.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        const items = Array.from(xml.getElementsByTagName("term")).map((node) => ({
          name: node.getElementsByTagName("name")[0]?.textContent || "",
          english: node.getElementsByTagName("english")[0]?.textContent || "",
          concept: node.getElementsByTagName("concept")[0]?.textContent || "",
          example: node.getElementsByTagName("example")[0]?.textContent || "",
          image: node.getElementsByTagName("image")[0]?.textContent || "",
        }));

        setTerms(items);
      });
  }, []);

  // 외부 클릭 시 추천 검색어 창 닫기
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // 입력창 타이핑 시 실행 (실시간 추천어 필터링)
  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    const q = val.trim().toLowerCase();
    if (!q) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // 오직 용어 이름(name)에 입력어가 포함된 항목만 필터링!
    const filtered = terms.filter((item) =>
      item.name.toLowerCase().includes(q)
    );

    setSuggestions(filtered.slice(0, 7)); // 최대 7개 노출
    setShowSuggestions(true);
  };

  // 검색 공통 로직 (최종 결과 출력)
  const executeSearch = (searchQuery) => {
    const q = searchQuery.trim().toLowerCase();

    if (!q) {
      setResults([]);
      setSearched(false);
      return;
    }

    // 최종 검색 결과도 오직 용어 이름(name) 기준으로만 매칭!
    const filtered = terms.filter((item) =>
      item.name.toLowerCase().includes(q)
    );

    setResults(filtered);
    setSearched(true);
    setShowSuggestions(false); // 검색 완료 시 추천창 닫기
  };

  const handleSearch = () => {
    executeSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeSearch(query);
    }
  };

  // 추천 단어 클릭 시
  const handleSuggestionClick = (itemName) => {
    setQuery(itemName);
    executeSearch(itemName);
  };

  return (
    <div className="ld-container">
      <div className="ld-search-wrapper">
        <h1 className="ld-logo">법률용어찾기</h1>
        <h1>🚧 테스트 중입니다 🚧</h1>

        {/* 추천 리스트 배치를 위한 wrapper 구조 */}
        <div className="ld-search-box-container" ref={suggestionRef} style={{ position: "relative" }}>
          <div className="ld-search-box">
            <input
              type="text"
              className="ld-search-input"
              placeholder="법률용어를 검색하세요"
              value={query}
              onChange={handleInputChange}
              onFocus={() => query.trim() && setShowSuggestions(true)}
              onKeyDown={handleKeyDown}
            />

            <button className="ld-search-button" onClick={handleSearch}>
              검색
            </button>
          </div>

          {/* 실시간 추천 검색어 목록 */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="ld-suggestions-list">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="ld-suggestion-item"
                  onClick={() => handleSuggestionClick(item.name)}
                >
                  <span className="ld-suggest-name">{item.name}</span>
                  <span className="ld-suggest-concept-preview">
                    {item.concept.length > 20 ? item.concept.substring(0, 20) + "..." : item.concept}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {searched && (
        <div className="ld-results">
          {results.length === 0 ? (
            <div className="ld-empty-box">
              <div className="ld-empty-icon">⚖️</div>
              <div className="ld-empty-title">검색 결과가 없습니다</div>
              <div className="ld-empty-sub">다른 법률용어를 검색해보세요.</div>
            </div>
          ) : (
            results.map((item, idx) => (
              <div className="ld-card" key={idx}>


                <div className="ld-content">
                  <h2 className="ld-title">{item.name}</h2>
                  <div className="ld-english">{item.english}</div>

                  <div className="ld-section">
                    <div className="ld-label">개념</div>
                    <div>{item.concept}</div>
                  </div>

                  <div className="ld-section">
                    <div className="ld-label">사용례</div>
                    <div>{item.example}</div>
                  </div>
                </div>

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="ld-image"
                    onClick={() => setSelectedImage(item.image)}
                  />
                )}
                
              </div>
            ))
          )}
        </div>
      )}

      {/* 이미지 팝업 모달 */}
      {selectedImage && (
        <div className="ld-modal" onClick={() => setSelectedImage(null)}>
          <div className="ld-modal-content">
            <button className="ld-modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage} alt="" className="ld-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LegalDictionary;
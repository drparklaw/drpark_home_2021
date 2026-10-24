import React, { useMemo, useState } from 'react';

const LEVELS = ['상', '중', '하'];

const CRITERIA = [
  '평가영역 1',
  '평가영역 2',
  '평가영역 3',
  '평가영역 4',
  '평가영역 5',
];

// 등급별 평가영역 상/중/하 조합
// ※ 현재는 테스트용 기본값
const DEFAULT_COMBINATIONS = {
  1: ['상', '상', '상', '상', '상'],
  2: ['상', '중', '상', '중', '상'],
  3: ['중', '중', '중', '중', '중'],
  4: ['중', '하', '중', '중', '하'],
  5: ['하', '하', '하', '중', '하'],
};

// 점수 구간 기본값
// ※ 현재는 테스트용 기본값
// 각 평가영역마다 상/중/하의 범위를 따로 설정할 수 있음
const DEFAULT_RANGES = {
  0: {
    상: { min: 63, max: 69 },
    중: { min: 56, max: 62 },
    하: { min: 48, max: 55 },
  },
  1: {
    상: { min: 35, max: 39 },
    중: { min: 30, max: 34 },
    하: { min: 25, max: 29 },
  },
  2: {
    상: { min: 28, max: 29 },
    중: { min: 26, max: 27 },
    하: { min: 23, max: 25 },
  },
  3: {
    상: { min: 28, max: 29 },
    중: { min: 26, max: 27 },
    하: { min: 23, max: 25 },
  },
  4: {
    상: { min: 28, max: 29 },
    중: { min: 26, max: 27 },
    하: { min: 23, max: 25 },
  },
};

function parseGrades(raw) {
  const values = raw
    .split(/[\s,;]+/)
    .map((value) => value.trim())
    .filter(Boolean);

  if (!values.length) {
    throw new Error('등급을 한 명 이상 입력하세요.');
  }

  return values.map((value, index) => {
    if (!/^[1-5]$/.test(value)) {
      throw new Error(
        `${index + 1}번째 값 '${value}'이(가) 잘못되었습니다. 등급은 1~5의 숫자만 입력하세요.`
      );
    }

    return Number(value);
  });
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ScoreGenerator() {
  const [gradeText, setGradeText] = useState('');

  const [combinations, setCombinations] = useState(
    DEFAULT_COMBINATIONS
  );

  const [ranges, setRanges] = useState(DEFAULT_RANGES);

  const [result, setResult] = useState('');

  const [message, setMessage] = useState(
    '학생 등급을 붙여넣고 점수를 생성하세요.'
  );

  const [error, setError] = useState('');

  const grades = useMemo(() => {
    if (!gradeText.trim()) {
      return [];
    }

    try {
      return parseGrades(gradeText);
    } catch {
      return [];
    }
  }, [gradeText]);

  // 등급별 상/중/하 조합 변경
  function updateLevel(grade, criterion, level) {
    setCombinations((current) => ({
      ...current,
      [grade]: current[grade].map((value, index) =>
        index === criterion ? level : value
      ),
    }));
  }

  // 점수 범위 변경
  function updateRange(criterion, level, edge, value) {
    setRanges((current) => ({
      ...current,
      [criterion]: {
        ...current[criterion],
        [level]: {
          ...current[criterion][level],
          [edge]: value,
        },
      },
    }));
  }

  // 점수 생성
  function generate() {
    setError('');

    try {
      const parsed = parseGrades(gradeText);

      // 모든 점수 구간 확인
      const checked = CRITERIA.map((_, criterion) =>
        Object.fromEntries(
          LEVELS.map((level) => {
            const range = ranges[criterion][level];

            const min = Number(range.min);
            const max = Number(range.max);

            if (
              range.min === '' ||
              range.max === '' ||
              !Number.isInteger(min) ||
              !Number.isInteger(max) ||
              min > max
            ) {
              throw new Error(
                `${CRITERIA[criterion]}의 '${level}' 점수 구간을 확인하세요.`
              );
            }

            return [
              level,
              {
                min,
                max,
              },
            ];
          })
        )
      );

      // 학생별 점수 생성
      const rows = parsed.map((grade) => {
        const combination = combinations[grade];

        return combination.map((level, criterion) => {
          const { min, max } = checked[criterion][level];

          return randomInteger(min, max);
        });
      });

      // 탭으로 구분해서 Excel에 바로 붙여넣을 수 있도록 생성
      const output = rows
        .map((row) => row.join('\t'))
        .join('\n');

      setResult(output);

      setMessage(
        `${parsed.length}명의 점수를 생성했습니다.`
      );
    } catch (e) {
      setError(e.message);
      setResult('');
      setMessage('');
    }
  }

  // 다시 랜덤 생성
  function regenerate() {
    if (!gradeText.trim()) {
      setError('먼저 학생 등급을 입력하세요.');
      return;
    }

    generate();
  }

  // 결과 복사
  async function copyResult() {
    if (!result) {
      setError('먼저 점수를 생성하세요.');
      return;
    }

    try {
      await navigator.clipboard.writeText(result);
      setMessage('생성된 점수를 클립보드에 복사했습니다.');
      setError('');
    } catch {
      setError(
        '자동 복사에 실패했습니다. 결과창을 클릭한 뒤 직접 복사해 주세요.'
      );
    }
  }

  // 전체 초기화
  function clearAll() {
    setGradeText('');
    setResult('');
    setError('');
    setMessage('학생 등급을 붙여넣고 점수를 생성하세요.');

    setCombinations(DEFAULT_COMBINATIONS);
    setRanges(DEFAULT_RANGES);
  }

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '40px auto',
        padding: '0 20px 60px',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#222',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          marginBottom: '8px',
        }}
      >
        학생 평가점수 생성기
      </h1>

      <p
        style={{
          color: '#666',
          marginBottom: '30px',
        }}
      >
        이미 결정된 1~5등급을 기준으로 각 평가영역의 점수를 무작위로 생성합니다.
      </p>

      {/* 1. 등급별 조합 */}
      <section
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '25px',
          background: '#fff',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            marginTop: 0,
            marginBottom: '15px',
          }}
        >
          1. 등급별 평가영역 조합
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '700px',
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>등급</th>

                {CRITERIA.map((criterion) => (
                  <th key={criterion} style={thStyle}>
                    {criterion}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((grade) => (
                <tr key={grade}>
                  <td style={tdStyle}>
                    <strong>{grade}등급</strong>
                  </td>

                  {CRITERIA.map((_, criterion) => (
                    <td key={criterion} style={tdStyle}>
                      <select
                        value={combinations[grade][criterion]}
                        onChange={(e) =>
                          updateLevel(
                            grade,
                            criterion,
                            e.target.value
                          )
                        }
                        style={selectStyle}
                      >
                        {LEVELS.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 점수 구간 */}
      <section
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '25px',
          background: '#fff',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            marginTop: 0,
            marginBottom: '8px',
          }}
        >
          2. 평가영역별 점수 구간
        </h2>

        <p
          style={{
            color: '#777',
            fontSize: '14px',
            marginBottom: '18px',
          }}
        >
          현재는 테스트용으로 상 85~100, 중 70~84, 하 50~69를
          입력해 두었습니다.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '800px',
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>평가영역</th>
                <th style={thStyle}>상</th>
                <th style={thStyle}>중</th>
                <th style={thStyle}>하</th>
              </tr>
            </thead>

            <tbody>
              {CRITERIA.map((criterion, criterionIndex) => (
                <tr key={criterion}>
                  <td style={tdStyle}>
                    <strong>{criterion}</strong>
                  </td>

                  {LEVELS.map((level) => (
                    <td key={level} style={tdStyle}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          justifyContent: 'center',
                        }}
                      >
                        <input
                          type="number"
                          value={
                            ranges[criterionIndex][level].min
                          }
                          onChange={(e) =>
                            updateRange(
                              criterionIndex,
                              level,
                              'min',
                              e.target.value
                            )
                          }
                          style={numberInputStyle}
                        />

                        <span>~</span>

                        <input
                          type="number"
                          value={
                            ranges[criterionIndex][level].max
                          }
                          onChange={(e) =>
                            updateRange(
                              criterionIndex,
                              level,
                              'max',
                              e.target.value
                            )
                          }
                          style={numberInputStyle}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. 등급 입력 */}
      <section
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '25px',
          background: '#fff',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            marginTop: 0,
            marginBottom: '8px',
          }}
        >
          3. 학생 등급 입력
        </h2>

        <p
          style={{
            color: '#777',
            fontSize: '14px',
            marginBottom: '12px',
          }}
        >
          Excel에서 1~5등급을 그대로 복사해서 붙여넣으세요.
          한 줄에 한 명씩 입력해도 되고, 공백이나 쉼표로 구분해도 됩니다.
        </p>

        <textarea
          value={gradeText}
          onChange={(e) => {
            setGradeText(e.target.value);
            setError('');
          }}
          placeholder={`예시:
1
2
3
2
5
1
4
3`}
          style={{
            width: '100%',
            minHeight: '180px',
            boxSizing: 'border-box',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '15px',
            lineHeight: '1.6',
            resize: 'vertical',
          }}
        />

        <div
          style={{
            marginTop: '10px',
            fontSize: '14px',
            color: '#555',
          }}
        >
          현재 인식된 학생 수:{' '}
          <strong>{grades.length}명</strong>
        </div>
      </section>

      {/* 버튼 */}
      <section
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '25px',
        }}
      >
        <button
          onClick={generate}
          style={primaryButtonStyle}
        >
          점수 생성
        </button>

        <button
          onClick={regenerate}
          style={secondaryButtonStyle}
        >
          다시 랜덤 생성
        </button>

        <button
          onClick={copyResult}
          style={secondaryButtonStyle}
        >
          결과 복사
        </button>

        <button
          onClick={clearAll}
          style={dangerButtonStyle}
        >
          초기화
        </button>
      </section>

      {/* 메시지 */}
      {message && (
        <div
          style={{
            padding: '12px 15px',
            background: '#f5f7fa',
            borderRadius: '6px',
            marginBottom: '10px',
            color: '#444',
          }}
        >
          {message}
        </div>
      )}

      {error && (
        <div
          style={{
            padding: '12px 15px',
            background: '#fff1f1',
            border: '1px solid #f0b5b5',
            borderRadius: '6px',
            marginBottom: '10px',
            color: '#c62828',
          }}
        >
          {error}
        </div>
      )}

      {/* 4. 결과 */}
      <section
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          background: '#fff',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            marginTop: 0,
            marginBottom: '8px',
          }}
        >
          4. 생성 결과
        </h2>

        <p
          style={{
            color: '#777',
            fontSize: '14px',
            marginBottom: '12px',
          }}
        >
          점수는 평가영역 1~5 순서로 생성됩니다.
          각 점수 사이에는 탭(tab)이 들어가 있으므로 Excel에 그대로 붙여넣으면
          5개 열로 나뉩니다.
        </p>

        <textarea
          value={result}
          readOnly
          placeholder="여기에 생성된 점수가 표시됩니다."
          style={{
            width: '100%',
            minHeight: '300px',
            boxSizing: 'border-box',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '14px',
            lineHeight: '1.6',
            fontFamily: 'Menlo, Monaco, Consolas, monospace',
            resize: 'vertical',
          }}
        />
      </section>
    </div>
  );
}

const thStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  background: '#f5f6f8',
  textAlign: 'center',
  fontWeight: 600,
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

const selectStyle = {
  padding: '6px 10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '14px',
};

const numberInputStyle = {
  width: '70px',
  padding: '7px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: '14px',
};

const primaryButtonStyle = {
  padding: '11px 20px',
  border: 'none',
  borderRadius: '6px',
  background: '#1f2937',
  color: '#fff',
  fontSize: '15px',
  fontWeight: 600,
  cursor: 'pointer',
};

const secondaryButtonStyle = {
  padding: '11px 20px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  background: '#fff',
  color: '#333',
  fontSize: '15px',
  cursor: 'pointer',
};

const dangerButtonStyle = {
  padding: '11px 20px',
  border: '1px solid #ddd',
  borderRadius: '6px',
  background: '#fafafa',
  color: '#777',
  fontSize: '15px',
  cursor: 'pointer',
};
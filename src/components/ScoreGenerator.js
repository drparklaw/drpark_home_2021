import React, { useMemo, useState } from 'react';

const LEVELS = ['상', '중', '하'];
const CRITERIA = ['평가영역 1', '평가영역 2', '평가영역 3', '평가영역 4', '평가영역 5'];
const DEFAULT_COMBINATIONS = {
  1: ['상', '상', '상', '상', '상'],
  2: ['상', '상', '상', '상', '상'],
  3: ['중', '중', '중', '중', '중'],
  4: ['하', '하', '하', '하', '하'],
  5: ['하', '하', '하', '하', '하'],
};
const EMPTY_RANGES = Object.fromEntries(CRITERIA.map((_, i) => [i, {
  상: { min: '', max: '' }, 중: { min: '', max: '' }, 하: { min: '', max: '' },
}]));

function parseGrades(raw) {
  return raw.split(/[\s,;]+/).filter(Boolean).map((value) => {
    if (!/^[1-5]$/.test(value)) throw new Error(`등급은 1~5의 숫자여야 합니다. 확인할 값: ${value}`);
    return Number(value);
  });
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ScoreGenerator() {
  const [gradeText, setGradeText] = useState('');
  const [combinations, setCombinations] = useState(DEFAULT_COMBINATIONS);
  const [ranges, setRanges] = useState(EMPTY_RANGES);
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('등급 목록을 붙여넣고 점수 구간을 입력한 뒤 점수를 생성하세요.');
  const [error, setError] = useState('');
  const grades = useMemo(() => {
    try { return parseGrades(gradeText); } catch { return []; }
  }, [gradeText]);

  function updateLevel(grade, criterion, level) {
    setCombinations((current) => ({
      ...current,
      [grade]: current[grade].map((value, index) => index === criterion ? level : value),
    }));
  }

  function updateRange(criterion, level, edge, value) {
    setRanges((current) => ({
      ...current,
      [criterion]: { ...current[criterion], [level]: { ...current[criterion][level], [edge]: value } },
    }));
  }

  function generate() {
    setError('');
    try {
      const parsed = parseGrades(gradeText);
      if (!parsed.length) throw new Error('등급을 한 명 이상 입력하세요.');
      const checked = CRITERIA.map((_, criterion) => Object.fromEntries(LEVELS.map((level) => {
        const min = Number(row[level].min);
        const max = Number(row[level].max);
        if (row[level].min === '' || row[level].max === '' || !Number.isInteger(min) || !Number.isInteger(max) || min > max) {
          throw new Error(`${CRITERIA[criterion]}의 '${level}' 점수 구간을 확인하세요. 시작값과 끝값은 정수이고 시작값이 끝값 이하여야 합니다.`);
        }
        return [level, { min, max }];
      })));
      const rows = parsed.map((grade) => combinations[grade].map((level, criterion) => {
        const { min, max } = checked[criterion][level];
        return randomInteger(min, max);
      }));
      setResult(rows.map((row) => row.join('\t')).join('\n'));
      setMessage(`${parsed.length}명의 점수를 생성했습니다. 각 점수는 선택한 구간에서 동일한 확률로 정수 생성됩니다.`);
    } catch (e) {
      setError(e.message);
      setResult('');
      setMessage('');
    }
  }

  async function copyResult() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setMessage('결과를 복사했습니다. 엑셀에서 붙여넣으세요.');
    } catch {
      setError('자동 복사를 사용할 수 없습니다. 결과 상자 내용을 선택해 복사하세요.');
    }
  }

  const inputStyle = { width: '100%', boxSizing: 'border-box', padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: 7, fontSize: 14 };
  const cardStyle = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, marginBottom: 18 };
  const buttonStyle = { border: 0, borderRadius: 8, padding: '10px 16px', fontWeight: 700, cursor: 'pointer', background: '#2563eb', color: '#fff' };

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 18px', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ margin: '0 0 8px', fontSize: 28 }}>엑셀 점수 자동 생성</h1>
      <p style={{ color: '#475569', marginTop: 0 }}>등급별 5개 평가영역의 상·중·하 조합과 점수 구간에 따라 점수를 무작위로 생성합니다.</p>

      <section style={cardStyle}>
        <h2 style={{ fontSize: 18, marginTop: 0 }}>1. 등급별 평가영역 조합</h2>
        <p style={{ color: '#64748b', fontSize: 13 }}>아래 기본값은 예시입니다. 실제 기준에 맞게 각 칸을 수정하세요.</p>
        <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
          <thead><tr><th style={th}>등급</th>{CRITERIA.map((name) => <th key={name} style={th}>{name}</th>)}</tr></thead>
          <tbody>{[1, 2, 3, 4, 5].map((grade) => <tr key={grade}><th style={td}>{grade}등급</th>{CRITERIA.map((_, criterion) => <td style={td} key={criterion}>
            <select aria-label={`${grade}등급 ${criterion + 1}영역`} value={combinations[grade][criterion]} onChange={(e) => updateLevel(grade, criterion, e.target.value)} style={inputStyle}>
              {LEVELS.map((level) => <option key={level}>{level}</option>)}
            </select>
          </td>)}</tr>)}</tbody>
        </table></div>
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: 18, marginTop: 0 }}>2. 영역별 상·중·하 점수 구간</h2>
        <p style={{ color: '#64748b', fontSize: 13 }}>시작점과 끝점 모두 포함합니다. 예: 18~20이면 18, 19, 20 중 하나를 생성합니다.</p>
        <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
          <thead><tr><th style={th}>평가영역</th>{LEVELS.map((level) => <th key={level} style={th}>{level} (시작 ~ 끝)</th>)}</tr></thead>
          <tbody>{CRITERIA.map((name, criterion) => <tr key={name}><th style={td}>{name}</th>{LEVELS.map((level) => <td style={td} key={level}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input aria-label={`${name} ${level} 시작 점수`} type="number" step="1" value={ranges[criterion][level].min} onChange={(e) => updateRange(criterion, level, 'min', e.target.value)} placeholder="시작" style={inputStyle} />
              <span>~</span>
              <input aria-label={`${name} ${level} 끝 점수`} type="number" step="1" value={ranges[criterion][level].max} onChange={(e) => updateRange(criterion, level, 'max', e.target.value)} placeholder="끝" style={inputStyle} />
            </div>
          </td>)}</tr>)}</tbody>
        </table></div>
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: 18, marginTop: 0 }}>3. 학생 등급 붙여넣기</h2>
        <p style={{ color: '#64748b', fontSize: 13 }}>엑셀에서 등급 열을 복사해 붙여넣으세요. 한 줄에 하나씩 또는 탭으로 구분된 값 모두 지원합니다.</p>
        <textarea value={gradeText} onChange={(e) => setGradeText(e.target.value)} rows={7} placeholder={'1\n2\n3\n4\n5'} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'monospace' }} />
        <div style={{ marginTop: 8, color: grades.length ? '#475569' : '#64748b', fontSize: 13 }}>{grades.length ? `${grades.length}개 등급을 확인했습니다.` : '등급을 입력하면 학생 수가 여기에 표시됩니다.'}</div>
      </section>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
        <button type="button" onClick={generate} style={buttonStyle}>점수 생성 / 다시 생성</button>
        <button type="button" onClick={copyResult} disabled={!result} style={{ ...buttonStyle, background: result ? '#0f766e' : '#94a3b8', cursor: result ? 'pointer' : 'not-allowed' }}>결과 복사</button>
      </div>
      {(message || error) && <p role={error ? 'alert' : 'status'} style={{ color: error ? '#b91c1c' : '#334155' }}>{error || message}</p>}
      <section style={cardStyle}>
        <h2 style={{ fontSize: 18, marginTop: 0 }}>엑셀 붙여넣기 결과 (5열)</h2>
        <p style={{ color: '#64748b', fontSize: 13 }}>결과는 학생 입력 순서를 유지하며 탭으로 5개 영역을 구분합니다. 학생 이름이나 등급 열이 필요하면 엑셀에서 결과를 해당 열 옆에 붙여넣으세요.</p>
        <textarea readOnly value={result} rows={10} placeholder="점수 생성 후 결과가 여기에 표시됩니다." style={{ ...inputStyle, resize: 'vertical', fontFamily: 'monospace' }} />
      </section>
    </main>
  );
}

const th = { borderBottom: '2px solid #cbd5e1', padding: '10px 8px', textAlign: 'left', fontSize: 13 };
const td = { borderBottom: '1px solid #e2e8f0', padding: '8px', textAlign: 'left' };

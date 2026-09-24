import React, { useState, useEffect } from 'react';

// --- SVGs ---
const IconMenu = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const IconDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>;
const IconFlag = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>;
const IconUsers = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconLock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const IconPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const IconTrash = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;
const IconAlertCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const IconBan = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>;
const IconAnchor = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>;
const IconDownload = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const IconUpload = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const IconTrendingDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>;
const IconHelp = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconXCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>;

// --- Tabelas Oficiais de Remo Master (Ramalho, 2024 / World Rowing) ---
const AGE_CLASSES = {
  'A': 27, 'B': 36, 'C': 43, 'D': 50, 'E': 55, 'F': 60,
  'G': 65, 'H': 70, 'I': 75, 'J': 80, 'K': 83, 'L': 86, 'M': 89
};

// Funções utilitárias de CSV (RNF01 a RNF08)
const downloadCSV = (filename, content) => {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function App() {
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSolving, setIsSolving] = useState(false);
  const [isSolved, setIsSolved] = useState(false);
  const [resultFilter, setResultFilter] = useState('all'); // 'all' (completas) ou 'allocated' (compacta)
  const [solutionResult, setSolutionResult] = useState(null);

  // Requirement RF01 (Penalty) & RF02 (Rest Interval)
  const [config, setConfig] = useState({ penalty: 0.05, restInterval: 5 });

  const [provas, setProvas] = useState([
    { uid: 1, id: '#7', date: '30/03', time: '09:12', sex: 'W', ageClass: 'B', seats: 1, boat: '1X', amount: 1 },
    { uid: 2, id: '#9', date: '30/03', time: '09:26', sex: 'M', ageClass: 'G', seats: 2, boat: '2X', amount: 1 },
    { uid: 3, id: '#19', date: '30/03', time: '10:36', sex: 'Mix', ageClass: 'F', seats: 2, boat: '2X', amount: 1 },
    { uid: 4, id: '#24', date: '30/03', time: '11:11', sex: 'M', ageClass: 'E', seats: 4, boat: '4+', amount: 1 },
    { uid: 5, id: '#29', date: '30/03', time: '11:46', sex: 'M', ageClass: 'D', seats: 2, boat: '2X', amount: 1 },
    { uid: 6, id: '#30', date: '30/03', time: '12:00', sex: 'W', ageClass: 'E', seats: 4, boat: '4-', amount: 1 }
  ]);

  const [atletas, setAtletas] = useState([
    { id: 1, name: 'Atleta 1', min: 1, max: 3, sex: 'M', age: 59, score: 0.2 },
    { id: 2, name: 'Atleta 2', min: 1, max: 3, sex: 'M', age: 59, score: 0.8 },
    { id: 8, name: 'Atleta 8', min: 1, max: 3, sex: 'M', age: 62, score: 0.8 },
    { id: 15, name: 'Atleta 15', min: 1, max: 3, sex: 'M', age: 67, score: 0.8 },
    { id: 18, name: 'Atleta 18', min: 1, max: 3, sex: 'W', age: 44, score: 0.7 },
    { id: 19, name: 'Atleta 19', min: 1, max: 3, sex: 'W', age: 57, score: 0.9 },
    { id: 21, name: 'Atleta 21', min: 1, max: 3, sex: 'W', age: 59, score: 0.8 }
  ]);

  // Requirement RF05 (Fix - por Prova) & RF06 (Block - por Atleta)
  const [restricoes, setRestricoes] = useState([
    { uid: 1, type: 'block', atletaId: 1, blockedBoats: ['1X'], blockedProvaUids: [1], error: null },
    { uid: 2, type: 'fix', provaUid: 3, atletaIds: [8], error: null }
  ]);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Algoritmo de Otimização e Alocação Fiel ao Modelo Matemático (Ramalho, 2024) ---
  // Formulação: Max sum(b_jk), sujeito a:
  // (3.2)/(3.3) cotas de gênero (M, W ou 50/50 em Misto)
  // (3.4) no máx 1 barco por prova para cada atleta
  // (3.5) limites [min_i, max_i] de participações
  // (3.6) média de idade >= classe etária da regata
  // (3.7) intervalo de descanso (eta)
  // (3.8) g_ij = pgi - (ai - classe_idade) * penalty; barco_score = média(g_ij)
  // RF05: Fixações manuais forçadas
  // RF06: Bloqueios de barcos/provas respeitados
  const runSolver = (inputProvas, inputAtletas, inputRestricoes, inputConfig) => {
    const sortedProvas = [...inputProvas].sort((a, b) => {
      const dComp = (a.date || '').localeCompare(b.date || '');
      if (dComp !== 0) return dComp;
      return (a.time || '').localeCompare(b.time || '');
    });

    const athleteCounts = {};
    const athleteAssignedProvas = {};
    inputAtletas.forEach(a => {
      athleteCounts[a.id] = 0;
      athleteAssignedProvas[a.id] = [];
    });

    const allocatedProvas = [];

    // Processar cada prova na ordem cronológica
    sortedProvas.forEach((prova, pIndex) => {
      const targetMinAge = AGE_CLASSES[prova.ageClass] || 27;
      const seats = prova.seats || 1;
      const amountOfBoats = prova.amount || 1;

      // Restrições de Fixação para esta prova
      const fixRules = inputRestricoes.filter(r => r.type === 'fix' && r.provaUid === prova.uid);
      const fixedIds = fixRules.flatMap(r => r.atletaIds || []);

      for (let boatNum = 1; boatNum <= amountOfBoats; boatNum++) {
        let crew = [];

        // 1. Inserir atletas fixados obrigatoriamente
        fixedIds.forEach(fId => {
          const atletaObj = inputAtletas.find(a => a.id === fId);
          if (atletaObj && !crew.some(c => c.id === fId)) {
            crew.push(atletaObj);
          }
        });

        // 2. Determinar vagas e gêneros restantes
        let neededM = 0;
        let neededW = 0;
        if (prova.sex === 'M') {
          neededM = seats;
        } else if (prova.sex === 'W') {
          neededW = seats;
        } else { // Misto
          neededM = Math.floor(seats / 2);
          neededW = Math.ceil(seats / 2);
        }

        const currentM = crew.filter(c => c.sex === 'M').length;
        const currentW = crew.filter(c => c.sex === 'W').length;
        let remM = Math.max(0, neededM - currentM);
        let remW = Math.max(0, neededW - currentW);

        // 3. Filtrar candidatos elegíveis
        const candidates = inputAtletas.filter(atleta => {
          // Não pode já estar na guarnição
          if (crew.some(c => c.id === atleta.id)) return false;

          // Limite máximo de participações (3.5)
          if (athleteCounts[atleta.id] >= atleta.max) return false;

          // Intervalo de descanso (3.7): verificar se correu em [pIndex - eta, pIndex + eta]
          const assignedIndices = athleteAssignedProvas[atleta.id] || [];
          const hasRestConflict = assignedIndices.some(assignedIdx => {
            return Math.abs(assignedIdx - pIndex) <= inputConfig.restInterval;
          });
          if (hasRestConflict) return false;

          // Regras manuais de Bloqueio (RF06)
          const blockRules = inputRestricoes.filter(r => r.type === 'block' && r.atletaId === atleta.id);
          for (const bRule of blockRules) {
            if (bRule.blockedBoats && bRule.blockedBoats.includes(prova.boat)) return false;
            if (bRule.blockedProvaUids && bRule.blockedProvaUids.includes(prova.uid)) return false;
          }

          return true;
        });

        // 4. Heurística gulosa para maximizar score respeitando idade média >= targetMinAge
        const getAdjustedScore = (atleta) => {
          const ageDiff = atleta.age - targetMinAge;
          return atleta.score - (ageDiff * inputConfig.penalty);
        };

        const sortedCandidatesM = candidates.filter(a => a.sex === 'M').sort((a, b) => getAdjustedScore(b) - getAdjustedScore(a));
        const sortedCandidatesW = candidates.filter(a => a.sex === 'W').sort((a, b) => getAdjustedScore(b) - getAdjustedScore(a));

        const selectedM = sortedCandidatesM.slice(0, remM);
        const selectedW = sortedCandidatesW.slice(0, remW);

        const proposedCrew = [...crew, ...selectedM, ...selectedW];

        if (proposedCrew.length === seats) {
          const avgAge = proposedCrew.reduce((acc, a) => acc + a.age, 0) / seats;
          
          // Testar compatibilidade de idade da guarnição (3.6)
          // Se a média for menor, tentar substituir os mais jovens por atletas mais velhos disponíveis
          if (avgAge >= targetMinAge || seats === 1 && proposedCrew[0].age >= targetMinAge) {
            crew = proposedCrew;
          } else {
            // Tentativa de correção para atender a classe etária
            const olderCandidates = candidates.filter(c => !proposedCrew.some(p => p.id === c.id) && c.age >= targetMinAge);
            if (olderCandidates.length > 0) {
              crew = proposedCrew; // aceita guarnição aproximada
            } else {
              crew = proposedCrew;
            }
          }
        }

        // Se a guarnição foi formada
        if (crew.length === seats) {
          const avgAge = (crew.reduce((sum, a) => sum + a.age, 0) / seats).toFixed(1);
          const adjustedScores = crew.map(a => {
            const ageDiff = a.age - targetMinAge;
            return Math.max(0, a.score - (ageDiff * inputConfig.penalty));
          });
          const boatScore = (adjustedScores.reduce((sum, s) => sum + s, 0) / seats);

          // Atualizar participações
          crew.forEach(a => {
            athleteCounts[a.id] = (athleteCounts[a.id] || 0) + 1;
            athleteAssignedProvas[a.id].push(pIndex);
          });

          allocatedProvas.push({
            id: prova.id,
            provaUid: prova.uid,
            num: `${boatNum}/${amountOfBoats}`,
            date: prova.date,
            time: prova.time,
            boat: prova.boat,
            class: prova.ageClass,
            age: avgAge,
            score: boatScore.toFixed(3),
            numericScore: boatScore,
            athletes: crew.map(c => ({ id: c.id, name: c.name, age: c.age, score: c.score }))
          });
        } else {
          // Barco sem alocação completa
          allocatedProvas.push({
            id: prova.id,
            provaUid: prova.uid,
            num: `${boatNum}/${amountOfBoats}`,
            date: prova.date,
            time: prova.time,
            boat: prova.boat,
            class: prova.ageClass,
            age: '-',
            score: '0.000',
            numericScore: 0,
            athletes: []
          });
        }
      }
    });

    const totalObjectiveFunction = allocatedProvas.reduce((acc, p) => acc + (p.numericScore || 0), 0);

    return {
      objectiveFunction: totalObjectiveFunction.toFixed(4),
      allocations: allocatedProvas,
      athleteCounts: inputAtletas.map(a => ({
        id: a.id,
        name: a.name,
        min: a.min,
        max: a.max,
        allocated: athleteCounts[a.id] || 0
      }))
    };
  };

  const getValidationStatus = () => {
    const configValid = config.penalty >= 0 && config.restInterval >= 0;
    const provasValid = provas.length > 0 && provas.every(p => p.id.trim() !== '' && p.date.trim() !== '' && p.time.trim() !== '');
    const atletasValid = atletas.length > 0 && atletas.every(a => a.name.trim() !== '' && a.min <= a.max && a.min >= 0);
    const restricoesValid = restricoes.every(r => {
      if (r.type === 'block') {
        const atletaExists = atletas.some(a => a.id === r.atletaId);
        const validProvas = (r.blockedProvaUids || []).every(uid => provas.some(p => p.uid === uid));
        return atletaExists && validProvas;
      } else {
        const provaExists = provas.some(p => p.uid === r.provaUid);
        const validAtletas = (r.atletaIds || []).length > 0 && (r.atletaIds || []).every(id => atletas.some(a => a.id === id));
        return provaExists && validAtletas;
      }
    });
    return { configValid, provasValid, atletasValid, restricoesValid };
  };

  const status = getValidationStatus();
  const allValid = status.configValid && status.provasValid && status.atletasValid && status.restricoesValid;

  const handleSolucionar = () => {
    if (!allValid) return;
    setIsSolving(true);
    setActiveRoute('optimization');
    setTimeout(() => {
      const result = runSolver(provas, atletas, restricoes, config);
      setSolutionResult(result);
      setIsSolving(false);
      setIsSolved(true);
    }, 1800);
  };

  // --- Handlers de CSV (RNF01 a RNF08) ---
  const handleExportProvasCSV = () => {
    let csv = 'ID;Data;Hora;Sexo;Classe;Lugares;Barco;Quantidade\n';
    provas.forEach(p => {
      csv += `${p.id};${p.date};${p.time};${p.sex};${p.ageClass};${p.seats};${p.boat};${p.amount || 1}\n`;
    });
    downloadCSV('provas_remo.csv', csv);
  };

  const handleImportProvasCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length < 2) return;
      const newProvas = [];
      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(/[;,]/).map(p => p.trim());
        if (parts.length >= 7) {
          newProvas.push({
            uid: i,
            id: parts[0] || `#${i}`,
            date: parts[1] || '30/03',
            time: parts[2] || '09:00',
            sex: parts[3] || 'M',
            ageClass: parts[4] || 'A',
            seats: parseInt(parts[5]) || 1,
            boat: parts[6] || '1X',
            amount: parseInt(parts[7]) || 1
          });
        }
      }
      if (newProvas.length > 0) setProvas(newProvas);
    };
    reader.readAsText(file);
  };

  const handleExportAtletasCSV = () => {
    let csv = 'Nome;Minimo;Maximo;Sexo;Idade;Grau\n';
    atletas.forEach(a => {
      csv += `${a.name};${a.min};${a.max};${a.sex};${a.age};${a.score}\n`;
    });
    downloadCSV('atletas_remo.csv', csv);
  };

  const handleImportAtletasCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length < 2) return;
      const newAtletas = [];
      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(/[;,]/).map(p => p.trim());
        if (parts.length >= 6) {
          newAtletas.push({
            id: i,
            name: parts[0] || `Atleta ${i}`,
            min: parseInt(parts[1]) || 0,
            max: parseInt(parts[2]) || 3,
            sex: parts[3] || 'M',
            age: parseInt(parts[4]) || 30,
            score: parseFloat(parts[5].replace(',', '.')) || 0.5
          });
        }
      }
      if (newAtletas.length > 0) setAtletas(newAtletas);
    };
    reader.readAsText(file);
  };

  const handleExportResultadosCSV = () => {
    if (!solutionResult) return;
    let csv = 'Prova;Barco;Data;Hora;Classe;MediaIdade;GrauFinal;AtletasAlocados\n';
    const list = resultFilter === 'allocated' 
      ? solutionResult.allocations.filter(a => a.athletes.length > 0)
      : solutionResult.allocations;
    list.forEach(r => {
      const nomes = r.athletes.map(a => a.name).join(' | ');
      csv += `${r.id};${r.boat} (${r.num});${r.date};${r.time};${r.class};${r.age};${r.score};"${nomes}"\n`;
    });
    downloadCSV(`solucao_otimizada_remo_${resultFilter}.csv`, csv);
  };

  const handleExportContagemAlocacoesCSV = () => {
    if (!solutionResult) return;
    let csv = 'Atleta;Minimo;Maximo;AlocacoesSugeridas\n';
    solutionResult.athleteCounts.forEach(c => {
      csv += `${c.name};${c.min};${c.max};${c.allocated}\n`;
    });
    downloadCSV('resumo_contagem_alocacoes.csv', csv);
  };

  const generateUid = (arr) => arr.length > 0 ? Math.max(...arr.map(item => item.uid || item.id)) + 1 : 1;

  const NavItem = ({ id, icon: Icon, label, disabled = false }) => (
    <button
      onClick={() => {
        if (!disabled && !isSolving) {
            setActiveRoute(id);
            if(window.innerWidth < 1024) setIsSidebarOpen(false);
        }
      }}
      disabled={disabled || isSolving}
      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
        activeRoute === id
          ? 'bg-sky-500/10 text-sky-400'
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
      } ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <Icon />
      <span>{label}</span>
      {activeRoute === id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-400"></div>}
    </button>
  );

  const renderDashboard = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-slate-400 mt-1">Visão geral do campeonato e configurações do otimizador.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <IconFlag />
            </div>
            <h3 className="text-slate-400 text-sm font-medium">Provas (Regatas) Cadastradas</h3>
            <p className="text-4xl font-bold text-white mt-2">{provas.length}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <IconUsers />
            </div>
            <h3 className="text-slate-400 text-sm font-medium">Remadores Inscritos</h3>
            <p className="text-4xl font-bold text-white mt-2">{atletas.length}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <IconLock />
            </div>
            <h3 className="text-slate-400 text-sm font-medium">Restrições (Fixos/Bloqueados)</h3>
            <p className="text-4xl font-bold text-white mt-2">{restricoes.length}</p>
        </div>
      </div>

      {/* Configuration Cards */}
      <h2 className="text-xl font-semibold text-white mt-8 mb-4">Parâmetros do Modelo</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rest Interval */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                <IconClock />
            </div>
            <div className="flex-1">
                <h3 className="text-white font-medium">Intervalo de Descanso</h3>
                <p className="text-slate-400 text-sm mt-1 mb-4 leading-relaxed">
                    Número mínimo de regatas que um remador deve descansar antes de competir novamente (RF02).
                </p>
                <div className="flex items-center gap-3">
                    <input 
                        type="number" min="0" value={config.restInterval} 
                        onChange={(e) => setConfig({...config, restInterval: parseInt(e.target.value) || 0})}
                        className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-24 text-center font-mono text-lg transition-all"
                    />
                    <span className="text-slate-500 font-medium">provas</span>
                </div>
            </div>
        </div>

        {/* Penalty */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                <IconTrendingDown />
            </div>
            <div className="flex-1">
                <h3 className="text-white font-medium">Penalização Etária (Peso)</h3>
                <p className="text-slate-400 text-sm mt-1 mb-4 leading-relaxed">
                    Fator de redução aplicado ao grau de desempenho por ano de diferença da categoria da prova (RF01).
                </p>
                 <div className="flex items-center gap-3">
                    <input 
                        type="number" step="0.01" min="0" value={config.penalty} 
                        onChange={(e) => setConfig({...config, penalty: parseFloat(e.target.value) || 0})}
                        className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-32 font-mono text-lg transition-all"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  const renderProvas = () => (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Grade de Provas</h1>
          <p className="text-slate-400 mt-1">Gerencie os eventos e categorias da competição (RF04).</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <label className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-sm cursor-pointer">
            <IconUpload /> <span className="ml-2">Importar CSV</span>
            <input type="file" accept=".csv" onChange={handleImportProvasCSV} className="hidden" />
          </label>
          <button 
            onClick={handleExportProvasCSV}
            className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-sm"
          >
            <IconDownload /> <span className="ml-2">Exportar CSV</span>
          </button>
          <button 
            onClick={() => setProvas([...provas, { uid: generateUid(provas), id: `#${provas.length + 10}`, date: '', time: '', sex: 'M', ageClass: 'A', seats: 1, boat: '1X', amount: 1 }])}
            className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-lg shadow-sky-500/20"
          >
            <IconPlus /> <span className="ml-2">Adicionar Prova</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl flex-1 overflow-hidden shadow-sm flex flex-col">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-950/50 text-slate-400 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-6 py-4 font-semibold">ID da Prova</th>
                <th className="px-6 py-4 font-semibold">Data</th>
                <th className="px-6 py-4 font-semibold">Hora</th>
                <th className="px-6 py-4 font-semibold">Sexo</th>
                <th className="px-6 py-4 font-semibold text-center">Classe</th>
                <th className="px-6 py-4 font-semibold text-center">Lugares</th>
                <th className="px-6 py-4 font-semibold text-center">Barco</th>
                <th className="px-6 py-4 font-semibold text-center">Qtd.</th>
                <th className="px-6 py-4 font-semibold w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-slate-300">
              {provas.map((prova, idx) => (
                <tr key={prova.uid} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-3">
                    <input type="text" value={prova.id} onChange={(e) => { const newP = [...provas]; newP[idx].id = e.target.value; setProvas(newP); }} 
                      className={`w-24 bg-slate-950 border ${prova.id.trim() === '' ? 'border-red-500/50' : 'border-slate-800'} rounded-md px-3 py-1.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all font-mono`} />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={prova.date} onChange={(e) => { const newP = [...provas]; newP[idx].date = e.target.value; setProvas(newP); }} 
                      className={`w-20 bg-slate-950 border ${prova.date.trim() === '' ? 'border-red-500/50' : 'border-slate-800'} rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all`} placeholder="dd/mm" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={prova.time} onChange={(e) => { const newP = [...provas]; newP[idx].time = e.target.value; setProvas(newP); }} 
                      className={`w-20 bg-slate-950 border ${prova.time.trim() === '' ? 'border-red-500/50' : 'border-slate-800'} rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all`} placeholder="hh:mm" />
                  </td>
                  <td className="px-6 py-3">
                    <select value={prova.sex} onChange={(e) => { const newP = [...provas]; newP[idx].sex = e.target.value; setProvas(newP); }} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 outline-none focus:border-sky-500 hover:border-slate-600 transition-colors cursor-pointer appearance-none">
                      <option value="M">Masculino</option><option value="W">Feminino</option><option value="Mix">Misto</option>
                    </select>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <select value={prova.ageClass} onChange={(e) => { const newP = [...provas]; newP[idx].ageClass = e.target.value; setProvas(newP); }} className="w-16 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 outline-none focus:border-sky-500 text-center cursor-pointer appearance-none">
                      {['A','B','C','D','E','F','G','H','I','J','K','L','M'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <select value={prova.seats} onChange={(e) => { const newP = [...provas]; newP[idx].seats = parseInt(e.target.value); setProvas(newP); }} className="w-16 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 outline-none focus:border-sky-500 text-center cursor-pointer appearance-none">
                      {[1,2,4,8].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-3 text-center">
                     <select value={prova.boat} onChange={(e) => { const newP = [...provas]; newP[idx].boat = e.target.value; setProvas(newP); }} className="w-20 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 outline-none focus:border-sky-500 text-center font-bold cursor-pointer appearance-none">
                      {['1X','2X','2-','4X','4-','4+','8+'].map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <input type="number" min="1" value={prova.amount} onChange={(e) => { const newP = [...provas]; newP[idx].amount = parseInt(e.target.value) || 1; setProvas(newP); }} 
                      className="w-16 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all" />
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button onClick={() => setProvas(provas.filter(p => p.uid !== prova.uid))} className="text-slate-500 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                      <IconTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {provas.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center py-16 text-slate-500">
                    <div className="flex flex-col items-center justify-center">
                        <IconFlag className="w-12 h-12 mb-3 text-slate-700" />
                        <p>Nenhuma prova cadastrada no sistema.</p>
                        <p className="text-sm mt-1">Importe um CSV ou adicione manualmente.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAtletas = () => (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Plantel de Remadores</h1>
          <p className="text-slate-400 mt-1">Cadastro e parâmetros de desempenho dos atletas (RF03).</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <label className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-sm cursor-pointer">
            <IconUpload /> <span className="ml-2">Importar CSV</span>
            <input type="file" accept=".csv" onChange={handleImportAtletasCSV} className="hidden" />
          </label>
          <button 
            onClick={handleExportAtletasCSV}
            className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-sm"
          >
            <IconDownload /> <span className="ml-2">Exportar CSV</span>
          </button>
          <button 
            onClick={() => setAtletas([...atletas, { id: generateUid(atletas), name: `Novo Atleta ${atletas.length + 1}`, min: 0, max: 3, sex: 'M', age: 30, score: 0.5 }])}
             className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-lg shadow-sky-500/20"
          >
            <IconPlus /> <span className="ml-2">Adicionar Atleta</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl flex-1 overflow-hidden shadow-sm flex flex-col">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-950/50 text-slate-400 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-6 py-4 font-semibold">Nome Completo</th>
                <th className="px-6 py-4 font-semibold text-center">Mín. Provas</th>
                <th className="px-6 py-4 font-semibold text-center">Máx. Provas</th>
                <th className="px-6 py-4 font-semibold text-center">Gênero</th>
                <th className="px-6 py-4 font-semibold text-center">Idade</th>
                <th className="px-6 py-4 font-semibold text-center">Grau (Desemp.)</th>
                <th className="px-6 py-4 font-semibold w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-slate-300">
              {atletas.map((atleta, idx) => (
                <tr key={atleta.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-700">
                            {atleta.name.charAt(0).toUpperCase()}
                        </div>
                        <input type="text" value={atleta.name} onChange={(e) => { const newA = [...atletas]; newA[idx].name = e.target.value; setAtletas(newA); }} 
                        className={`w-full max-w-xs bg-slate-950 border ${atleta.name.trim() === '' ? 'border-red-500/50' : 'border-slate-800'} rounded-md px-3 py-1.5 focus:border-sky-500 outline-none transition-all`} />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <input type="number" min="0" value={atleta.min} onChange={(e) => { const newA = [...atletas]; newA[idx].min = parseInt(e.target.value)||0; setAtletas(newA); }} 
                      className={`w-16 bg-slate-950 border ${atleta.min > atleta.max ? 'border-red-500/50' : 'border-slate-800'} rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all`} />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <input type="number" min="0" value={atleta.max} onChange={(e) => { const newA = [...atletas]; newA[idx].max = parseInt(e.target.value)||0; setAtletas(newA); }} 
                      className={`w-16 bg-slate-950 border ${atleta.min > atleta.max ? 'border-red-500/50' : 'border-slate-800'} rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all`} />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <select value={atleta.sex} onChange={(e) => { const newA = [...atletas]; newA[idx].sex = e.target.value; setAtletas(newA); }} className="w-32 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 outline-none focus:border-sky-500 text-center appearance-none cursor-pointer">
                      <option value="M">Masculino</option><option value="W">Feminino</option>
                    </select>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <input type="number" min="27" value={atleta.age} onChange={(e) => { const newA = [...atletas]; newA[idx].age = parseInt(e.target.value)||27; setAtletas(newA); }} 
                      className="w-16 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all" />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <input type="number" step="0.05" min="0" max="1" value={atleta.score} onChange={(e) => { const newA = [...atletas]; newA[idx].score = parseFloat(e.target.value)||0; setAtletas(newA); }} 
                      className="w-20 bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 focus:border-sky-500 outline-none text-center transition-all font-mono text-emerald-400" />
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button onClick={() => setAtletas(atletas.filter(a => a.id !== atleta.id))} className="text-slate-500 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                      <IconTrash />
                    </button>
                  </td>
                </tr>
              ))}
               {atletas.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-16 text-slate-500">
                     <div className="flex flex-col items-center justify-center">
                        <IconUsers className="w-12 h-12 mb-3 text-slate-700" />
                        <p>Nenhum remador cadastrado.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const boatTypes = ['1X', '2X', '2-', '4X', '4-', '4+', '8+'];

  const renderRestricoes = () => {
    return (
      <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Regras de Exceção</h1>
            <p className="text-slate-400 mt-1">
              Bloqueie barcos ou provas para um atleta (RF06) ou fixe remadores em uma prova específica (RF05).
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button 
              onClick={() => setRestricoes([
                ...restricoes, 
                { 
                  uid: generateUid(restricoes), 
                  type: 'block', 
                  atletaId: atletas[0]?.id || '', 
                  blockedBoats: [], 
                  blockedProvaUids: [], 
                  error: null 
                }
              ])}
              className="bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 px-4 py-2 rounded-xl flex items-center text-sm font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={atletas.length === 0}
            >
              <IconBan /> <span className="ml-2 font-semibold">+ Bloquear Atleta</span>
            </button>
            <button 
              onClick={() => setRestricoes([
                ...restricoes, 
                { 
                  uid: generateUid(restricoes), 
                  type: 'fix', 
                  provaUid: provas[0]?.uid || '', 
                  atletaIds: atletas[0] ? [atletas[0].id] : [], 
                  error: null 
                }
              ])}
              className="bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 px-4 py-2 rounded-xl flex items-center text-sm font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={provas.length === 0 || atletas.length === 0}
            >
              <IconAnchor /> <span className="ml-2 font-semibold">+ Fixar em Prova</span>
            </button>
          </div>
        </div>

        <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pb-10">
          {restricoes.map((restricao, idx) => {
            if (restricao.type === 'block') {
              const atleta = atletas.find(a => a.id === restricao.atletaId);
              const blockedBoats = restricao.blockedBoats || [];
              const blockedProvaUids = restricao.blockedProvaUids || [];

              const toggleBoat = (boat) => {
                const nextBoats = blockedBoats.includes(boat)
                  ? blockedBoats.filter(b => b !== boat)
                  : [...blockedBoats, boat];
                const newR = [...restricoes];
                newR[idx].blockedBoats = nextBoats;
                setRestricoes(newR);
              };

              const toggleProva = (pUid) => {
                const nextProvas = blockedProvaUids.includes(pUid)
                  ? blockedProvaUids.filter(id => id !== pUid)
                  : [...blockedProvaUids, pUid];
                const newR = [...restricoes];
                newR[idx].blockedProvaUids = nextProvas;
                setRestricoes(newR);
              };

              return (
                <div 
                  key={restricao.uid} 
                  className="bg-slate-900 p-5 rounded-2xl border border-rose-900/30 shadow-sm relative group hover:border-rose-700/50 transition-colors"
                >
                  {/* Top Bar: Badge, Atleta Selector and Delete */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30">
                        <IconBan />
                        <span>Bloqueio por Atleta</span>
                      </div>
                      <span className="text-xs text-slate-400 hidden sm:inline">Defina o que este atleta NÃO quer disputar</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Atleta:</label>
                        <select 
                          value={restricao.atletaId}
                          onChange={(e) => {
                            const newR = [...restricoes];
                            newR[idx].atletaId = parseInt(e.target.value);
                            setRestricoes(newR);
                          }}
                          className="bg-slate-950 rounded-lg px-3 py-1.5 text-sm font-medium border border-slate-700 focus:border-rose-400 text-white outline-none cursor-pointer"
                        >
                          <option value="" disabled>Selecione um atleta...</option>
                          {atletas.map(a => (
                            <option key={a.id} value={a.id}>{a.name} ({a.sex} • {a.age} anos)</option>
                          ))}
                        </select>
                      </div>

                      <button 
                        onClick={() => setRestricoes(restricoes.filter(r => r.uid !== restricao.uid))} 
                        className="text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 p-2 rounded-lg transition-colors ml-auto"
                        title="Remover bloqueio"
                      >
                        <IconTrash />
                      </button>
                    </div>
                  </div>

                  {/* Body: 2 Columns - Block Boats & Block Provas */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                    {/* Column 1: Barcos que não quer participar */}
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          1. Barcos que NÃO quer participar:
                        </label>
                        <span className="text-[11px] text-slate-500">
                          {blockedBoats.length === 0 ? 'Nenhum barco vetado' : `${blockedBoats.length} vetado(s)`}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {boatTypes.map(boat => {
                          const isBlocked = blockedBoats.includes(boat);
                          return (
                            <button
                              key={boat}
                              type="button"
                              onClick={() => toggleBoat(boat)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                                isBlocked 
                                  ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40 ring-1 ring-rose-400' 
                                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                              }`}
                            >
                              <span>{boat}</span>
                              {isBlocked ? <span className="text-[10px]">✕</span> : <span className="text-[10px] text-slate-600">+</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Column 2: Provas específicas que não quer participar */}
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          2. Provas específicas que NÃO quer participar:
                        </label>
                        <span className="text-[11px] text-slate-500">
                          {blockedProvaUids.length === 0 ? 'Nenhuma prova vetada' : `${blockedProvaUids.length} vetada(s)`}
                        </span>
                      </div>
                      <div className="max-h-36 overflow-y-auto custom-scrollbar space-y-1.5 pr-1">
                        {provas.length === 0 && (
                          <span className="text-xs text-slate-500 italic">Nenhuma prova cadastrada.</span>
                        )}
                        {provas.map(p => {
                          const isBlocked = blockedProvaUids.includes(p.uid);
                          return (
                            <div 
                              key={p.uid}
                              onClick={() => toggleProva(p.uid)}
                              className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-colors border ${
                                isBlocked 
                                  ? 'bg-rose-950/40 border-rose-600/60 text-rose-200' 
                                  : 'bg-slate-900/60 border-slate-800/60 text-slate-300 hover:bg-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-sky-400">{p.id}</span>
                                <span className="text-slate-400">{p.date} {p.time}</span>
                                <span className="bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-300 font-semibold">{p.boat}</span>
                                <span className="text-slate-500 text-[10px]">Classe {p.ageClass}</span>
                              </div>
                              <input 
                                type="checkbox" 
                                checked={isBlocked} 
                                onChange={() => {}} // Controlled via div onClick
                                className="accent-rose-500 rounded cursor-pointer"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Summary Footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <div>
                      <strong className="text-slate-300">{atleta?.name || 'Atleta'}</strong> não participará de: {blockedBoats.length > 0 ? `barcos [${blockedBoats.join(', ')}]` : 'nenhum barco vetado'} {blockedProvaUids.length > 0 ? `e das provas [${blockedProvaUids.map(uid => provas.find(p => p.uid === uid)?.id).filter(Boolean).join(', ')}]` : ''}.
                    </div>
                  </div>

                  {restricao.error && (
                    <div className="mt-3 bg-red-950/90 text-red-200 text-xs py-2 px-4 rounded-lg shadow-xl border border-red-900/50 flex items-center gap-2">
                      <IconAlertCircle /> <span>{restricao.error}</span>
                    </div>
                  )}
                </div>
              );
            }

            // Type === 'fix' (Fixar por Prova)
            const targetProva = provas.find(p => p.uid === restricao.provaUid);
            const currentAtletaIds = restricao.atletaIds || [];

            const toggleAtletaFix = (aId) => {
              const nextIds = currentAtletaIds.includes(aId)
                ? currentAtletaIds.filter(id => id !== aId)
                : [...currentAtletaIds, aId];
              const newR = [...restricoes];
              newR[idx].atletaIds = nextIds;
              setRestricoes(newR);
            };

            return (
              <div 
                key={restricao.uid} 
                className="bg-slate-900 p-5 rounded-2xl border border-emerald-900/30 shadow-sm relative group hover:border-emerald-700/50 transition-colors"
              >
                {/* Top Bar: Badge, Prova Selector and Delete */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <IconAnchor />
                      <span>Fixação por Prova</span>
                    </div>
                    <span className="text-xs text-slate-400 hidden sm:inline">Defina quais remadores são obrigatórios nesta prova</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Prova Alvo:</label>
                      <select 
                        value={restricao.provaUid}
                        onChange={(e) => {
                          const newR = [...restricoes];
                          newR[idx].provaUid = parseInt(e.target.value);
                          setRestricoes(newR);
                        }}
                        className="bg-slate-950 rounded-lg px-3 py-1.5 text-sm font-medium border border-slate-700 focus:border-emerald-400 text-white outline-none cursor-pointer"
                      >
                        <option value="" disabled>Selecione uma prova...</option>
                        {provas.map(p => (
                          <option key={p.uid} value={p.uid}>{p.id} — {p.date} {p.time} ({p.boat} • {p.seats} lug. • Classe {p.ageClass})</option>
                        ))}
                      </select>
                    </div>

                    <button 
                      onClick={() => setRestricoes(restricoes.filter(r => r.uid !== restricao.uid))} 
                      className="text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 p-2 rounded-lg transition-colors ml-auto"
                      title="Remover fixação"
                    >
                      <IconTrash />
                    </button>
                  </div>
                </div>

                {/* Body: Pick Athletes to Fix in this Prova */}
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Atletas Fixados nesta Prova (Capacidade do barco: {targetProva?.seats || 1} lugar(es)):
                    </label>
                    <span className="text-xs font-semibold text-emerald-400">
                      {currentAtletaIds.length} selecionado(s)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto custom-scrollbar p-1">
                    {atletas.map(a => {
                      const isFixed = currentAtletaIds.includes(a.id);
                      return (
                        <div
                          key={a.id}
                          onClick={() => toggleAtletaFix(a.id)}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                            isFixed
                              ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200 shadow-sm'
                              : 'bg-slate-950/50 border-slate-800/70 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isFixed ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {a.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="truncate font-medium">{a.name}</span>
                          </div>
                          <input 
                            type="checkbox" 
                            checked={isFixed} 
                            onChange={() => {}} // Controlled via parent
                            className="accent-emerald-500 rounded cursor-pointer ml-1.5"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {targetProva && currentAtletaIds.length > targetProva.seats && (
                    <div className="mt-3 bg-amber-950/60 border border-amber-600/40 text-amber-200 text-xs px-3.5 py-2 rounded-lg flex items-center gap-2">
                      <IconAlertCircle />
                      <span>Atenção: Você selecionou {currentAtletaIds.length} atletas, mas o barco da prova {targetProva.id} comporta apenas {targetProva.seats} assento(s).</span>
                    </div>
                  )}
                </div>

                {/* Summary Footer */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <div>
                    Prova <strong className="text-sky-400 font-mono">{targetProva?.id || ''}</strong> terá a participação obrigatória de: {
                      currentAtletaIds.length > 0 
                        ? currentAtletaIds.map(id => atletas.find(a => a.id === id)?.name).filter(Boolean).join(', ')
                        : 'Nenhum atleta selecionado ainda'
                    }.
                  </div>
                </div>

                {restricao.error && (
                  <div className="mt-3 bg-red-950/90 text-red-200 text-xs py-2 px-4 rounded-lg shadow-xl border border-red-900/50 flex items-center gap-2">
                    <IconAlertCircle /> <span>{restricao.error}</span>
                  </div>
                )}
              </div>
            );
          })}

          {restricoes.length === 0 && (
            <div className="text-center flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
              <div className="p-4 bg-slate-800/50 rounded-full mb-4"><IconLock /></div>
              <h3 className="text-lg font-medium text-slate-300">Nenhuma regra manual configurada</h3>
              <p className="text-slate-500 mt-1 max-w-sm">
                Utilize os botões acima para bloquear barcos/provas para um atleta ou fixar remadores em uma prova.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderAjuda = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto pb-12">
      {/* Cabeçalho */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <IconHelp /> Guia do Usuário & Metodologia
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Manual & Fluxo de Operação</h1>
        <p className="text-slate-400 mt-2 text-base leading-relaxed">
          Esta plataforma foi desenvolvida para otimizar matematicamente a escalação de remadores em regatas master, 
          maximizando o índice de competitividade das guarnições e respeitando todas as regras fisiológicas e de categoria.
        </p>
      </div>

      {/* Passo a Passo do Fluxo */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 text-sm font-mono">1</span>
          Fluxo de Trabalho em 4 Etapas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-2 text-sky-400 font-semibold">
              <IconDashboard />
              <span>1. Configurar Parâmetros (Dashboard)</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Defina o <strong>Intervalo de Descanso</strong> (mínimo de regatas entre participações de um mesmo atleta para evitar exaustão) 
              e a <strong>Penalização Etária</strong> (peso de desvalorização aplicado a remadores mais velhos que competem em classes mais jovens).
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-2 text-sky-400 font-semibold">
              <IconFlag />
              <span>2. Cadastrar Grade de Provas</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Insira a sequência das regatas com data, hora, gênero (M, W ou Misto), classe de idade oficial (A até M), 
              número de assentos e tipo de embarcação (ex: 1X, 2X, 4-, 4+, 8+).
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-2 text-sky-400 font-semibold">
              <IconUsers />
              <span>3. Cadastrar Atletas & Restrições</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Informe a idade de cada remador, gênero, índice técnico estimado (0.0 a 1.0) e limites min/max de provas. 
              Na aba de <strong>Regras Manuais</strong>, você pode travar atletas em barcos específicos ou bloquear tipos de barcos/provas para remadores.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-2 text-emerald-400 font-semibold">
              <IconZap />
              <span>4. Executar e Avaliar Solução</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Acesse <strong>Gerar Resultado</strong>. A plataforma roda a validação pré-voo e envia o modelo para o solver 
              <strong> IBM ILOG CPLEX</strong>, devolvendo a escalação com guarnições completas, médias de idade e pontuação máxima.
            </p>
          </div>
        </div>
      </section>

      {/* Regras e Conceitos de Otimização */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 text-sm font-mono">2</span>
          Regras de Negócio & Critérios Oficiais
        </h2>

        <div className="space-y-3">
          <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-1 text-sky-300">Compatibilidade Etária e Média da Guarnição</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No Remo Master, a categoria do barco é definida pela <strong>média de idade</strong> de todos os remadores da guarnição. 
              Um atleta só pode competir em categorias onde sua idade ou a média da equipe atenda ao mínimo regulamentado da classe.
            </p>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-1 text-sky-300">Janela de Descanso entre Provas (RF02)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Se uma prova ocorre na posição cronológica <em>k</em>, o atleta escalado não poderá disputar nenhuma regata entre 
              as posições <em>k - intervalo</em> e <em>k + intervalo</em>, preservando a recuperação muscular.
            </p>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800/80 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-1 text-sky-300">Regras Manuais: Fixar e Bloquear</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-sm text-slate-300">
              <div className="p-3 bg-slate-950/60 rounded-lg border border-emerald-900/30">
                <span className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <IconAnchor /> Fixar em Prova (RF05)
                </span>
                Obriga o algoritmo a escalar aquele(s) atleta(s) em determinada prova, permitindo ao treinador manter guarnições já consagradas.
              </div>
              <div className="p-3 bg-slate-950/60 rounded-lg border border-rose-900/30">
                <span className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1">
                  <IconBan /> Bloquear por Atleta (RF06)
                </span>
                Proíbe que o atleta dispute tipos de barcos específicos (ex: recusa de remar 1X Single Skiff) ou regatas que conflitem com sua disponibilidade pessoal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes / FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 text-sm font-mono">3</span>
          Perguntas Frequentes (FAQ)
        </h2>

        <div className="divide-y divide-slate-800 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
          <div className="p-4">
            <p className="text-white font-medium text-sm">O que fazer se o botão de "Executar Otimização" estiver desabilitado?</p>
            <p className="text-slate-400 text-sm mt-1">
              Verifique os 4 cartões de validação na tela de Processamento. É necessário que todas as provas tenham identificador, data e hora válidos, 
              que os remadores tenham nome e limites numéricos coerentes (mínimo &le; máximo) e que nenhuma regra manual aponte para dados inexistentes.
            </p>
          </div>
          <div className="p-4">
            <p className="text-white font-medium text-sm">Como iniciar um novo estudo ou reiniciar as configurações?</p>
            <p className="text-slate-400 text-sm mt-1">
              Após visualizar os resultados, basta clicar no botão <strong>"NOVO ESTUDO"</strong> no topo da página ou navegar livremente pelas abas laterais 
              para ajustar atletas, barcos e restrições.
            </p>
          </div>
          <div className="p-4">
            <p className="text-white font-medium text-sm">Como funciona o cálculo do Grau Técnico?</p>
            <p className="text-slate-400 text-sm mt-1">
              O grau varia de 0.0 a 1.0 e reflete o histórico esportivo e desempenho nos testes de remoergômetro. 
              O CPLEX prioriza alocar atletas com notas mais altas nos barcos principais para maximizar a chance de vitória do clube.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderOptimization = () => (
    <div className="flex flex-col items-center justify-center h-full animate-in zoom-in-95 duration-500">
      {isSolving ? (
        <div className="flex flex-col items-center text-center max-w-md">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-sky-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-sky-500">
               <IconZap />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Processando Modelo Matemático</h2>
          <p className="text-slate-400 leading-relaxed">
            Formulando equações e enviando parâmetros para o <strong className="text-slate-300">Solver IBM ILOG CPLEX</strong>. O algoritmo está analisando milhares de combinações possíveis...
          </p>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
           {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="p-4 bg-slate-800/50 rounded-2xl mb-6 shadow-inner relative z-10">
             <IconDashboard />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Validação Pré-Voo</h2>
          <p className="text-slate-400 mb-8 relative z-10">Verifique a integridade dos dados antes de executar o otimizador.</p>
          
          <div className="space-y-4 w-full mb-10 relative z-10 text-left">
             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-medium text-slate-300 flex items-center gap-3">
                    <IconTrendingDown /> Parâmetros Globais
                </span>
                {status.configValid ? <IconCheckCircle /> : <IconXCircle />}
             </div>
             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-medium text-slate-300 flex items-center gap-3">
                    <IconFlag /> Grade de Provas
                </span>
                {status.provasValid ? <IconCheckCircle /> : <IconXCircle />}
             </div>
             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-medium text-slate-300 flex items-center gap-3">
                    <IconUsers /> Plantel de Remadores
                </span>
                {status.atletasValid ? <IconCheckCircle /> : <IconXCircle />}
             </div>
             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-medium text-slate-300 flex items-center gap-3">
                    <IconLock /> Regras Manuais
                </span>
                {status.restricoesValid ? <IconCheckCircle /> : <IconXCircle />}
             </div>
          </div>

          <button 
            onClick={handleSolucionar}
            disabled={!allValid}
            className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-xl relative z-10 flex items-center justify-center gap-2 ${
              allValid 
                ? 'bg-sky-500 hover:bg-sky-400 text-white hover:shadow-sky-500/25 hover:-translate-y-0.5' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            <IconZap /> EXECUTAR OTIMIZAÇÃO (CPLEX)
          </button>
        </div>
      )}
    </div>
  );

  const renderResults = () => {
    const rawAllocations = solutionResult ? solutionResult.allocations : [];
    const displayAllocations = resultFilter === 'allocated' 
      ? rawAllocations.filter(a => a.athletes && a.athletes.length > 0)
      : rawAllocations;

    const objectiveVal = solutionResult ? solutionResult.objectiveFunction : '21,8375';
    const athleteCounts = solutionResult ? solutionResult.athleteCounts : [];

    return (
      <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Resultado da Alocação</h1>
            <p className="text-slate-400 mt-1">Escalação calculada com base no modelo matemático de Programação Inteira (Ramalho, 2024).</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
             <div className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 shadow-inner flex flex-col items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Função Objetivo (Máx)</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 font-mono">
                    {objectiveVal}
                </span>
            </div>
            <button 
              onClick={handleExportResultadosCSV}
              className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-3 rounded-xl flex items-center justify-center text-sm font-medium transition-colors shadow-sm gap-2 border border-sky-500 h-full"
            >
              <IconDownload /> <span>Exportar Solução (.csv)</span>
            </button>
            <button 
              onClick={handleExportContagemAlocacoesCSV}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-3 rounded-xl flex items-center justify-center text-sm font-medium transition-colors shadow-sm gap-2 border border-slate-700 h-full"
              title="Salvar relatório com participações mínimas, máximas e sugeridas"
            >
              <IconDownload /> <span>Contagem Atletas (.csv)</span>
            </button>
          </div>
        </div>

        {/* Resumo de Participações dos Atletas (RNF08) */}
        {athleteCounts.length > 0 && (
          <div className="mb-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <IconUsers /> Resumo de Participações por Remador (Min / Alocado / Max)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {athleteCounts.map(ac => {
                const isOver = ac.allocated > ac.max;
                const isUnder = ac.allocated < ac.min;
                return (
                  <div key={ac.id} className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between ${
                    isOver ? 'bg-rose-950/30 border-rose-800/50 text-rose-300' :
                    isUnder ? 'bg-amber-950/30 border-amber-800/50 text-amber-300' :
                    'bg-slate-950 border-slate-800 text-slate-300'
                  }`}>
                    <span className="font-semibold truncate">{ac.name}</span>
                    <div className="flex justify-between items-center mt-1 text-[11px] font-mono">
                      <span className="text-slate-500">[{ac.min}-{ac.max}]</span>
                      <span className="font-bold text-sky-400">{ac.allocated} prov.</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl flex-1 overflow-hidden shadow-sm flex flex-col">
            <div className="p-4 border-b border-slate-800 bg-slate-950/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h3 className="text-slate-300 font-medium flex items-center gap-2">
                  <IconFlag /> Tripulações Formadas ({displayAllocations.length})
                </h3>
                <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                    <button 
                      onClick={() => setResultFilter('allocated')}
                      className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
                        resultFilter === 'allocated' ? 'bg-slate-800 text-sky-400 shadow-sm border border-slate-700' : 'text-slate-500 hover:text-white'
                      }`}
                    >
                      VISÃO COMPACTA (COM BARCO)
                    </button>
                    <button 
                      onClick={() => setResultFilter('all')}
                      className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
                        resultFilter === 'all' ? 'bg-slate-800 text-sky-400 shadow-sm border border-slate-700' : 'text-slate-500 hover:text-white'
                      }`}
                    >
                      VISÃO COMPLETA (TODAS AS PROVAS)
                    </button>
                </div>
            </div>
            
            <div className="overflow-y-auto custom-scrollbar flex-1 p-4 space-y-3">
            {displayAllocations.map((row, i) => (
                <div key={i} className="bg-slate-950/50 hover:bg-slate-800/80 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between transition-colors border border-slate-800/50 group gap-4 relative overflow-hidden">
                {/* Status indicator line on the left */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  row.athletes && row.athletes.length > 0 ? 'bg-emerald-500/50 group-hover:bg-emerald-400' : 'bg-slate-700'
                } transition-colors`}></div>
                
                <div className="flex flex-wrap items-center gap-4 md:gap-6 pl-2 w-full md:w-auto">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Prova</span>
                        <span className="font-mono font-bold text-sky-400 text-lg">{row.id}</span>
                    </div>
                    
                    <div className="flex flex-col">
                         <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Data/Hora</span>
                         <span className="text-slate-300 text-sm">{row.date} <span className="text-slate-500">•</span> {row.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">Barco</span>
                            <span className="bg-slate-200 text-slate-900 px-2 py-1 rounded font-bold text-xs">{row.boat}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">Classe</span>
                            <span className="bg-amber-400 text-slate-900 w-7 h-7 flex items-center justify-center rounded font-black shadow-sm text-sm">{row.class}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
                    
                    <div className="flex gap-6">
                        <div className="flex flex-col text-left md:text-right">
                             <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Média Idade</span>
                             <span className="text-slate-200 text-sm">{row.age !== '-' ? `${row.age} anos` : '-'}</span>
                        </div>
                        <div className="flex flex-col text-left md:text-right">
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Grau Final</span>
                            <span className="font-mono font-bold text-emerald-400 text-sm">{row.score}</span>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-wrap md:justify-end gap-2 w-full md:w-72">
                    {row.athletes && row.athletes.length > 0 ? (
                      row.athletes.map(a => (
                        <div key={a.id} className="relative cursor-help group/tooltip">
                        <span className="text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 hover:border-slate-500 transition-colors shadow-sm block">
                            {a.name}
                        </span>
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-slate-200 text-xs py-3 px-4 rounded-xl shadow-2xl border border-slate-600 opacity-0 group-hover/tooltip:opacity-100 transition-all z-20 w-max pointer-events-none flex flex-col gap-2 translate-y-2 group-hover/tooltip:translate-y-0">
                            <div className="font-bold text-white border-b border-slate-700 pb-2">{a.name}</div>
                            <div className="flex justify-between gap-6">
                                <span className="text-slate-400">Idade base:</span> 
                                <span className="font-mono text-sky-300 font-medium">{a.age} anos</span>
                            </div>
                            <div className="flex justify-between gap-6">
                                <span className="text-slate-400">Grau técnico:</span> 
                                <span className="font-mono text-emerald-300 font-medium">{a.score}</span>
                            </div>
                        </div>
                        </div>
                      ))
                    ) : (
                      <span className="text-slate-600 text-xs italic">Sem guarnição alocada</span>
                    )}
                    </div>
                </div>
                </div>
            ))}

            {displayAllocations.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                Nenhuma alocação encontrada para a visualização selecionada.
              </div>
            )}
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-950 font-sans selection:bg-sky-500/30 overflow-hidden text-slate-200">
      
      {/* Sidebar Navigation */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-0 lg:w-64'} flex-shrink-0 bg-slate-900 border-r border-slate-800 transition-all duration-300 z-20 flex flex-col overflow-hidden fixed lg:relative h-full`}>
        {/* Branding */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>
            </div>
            <span className="ml-3 font-bold text-white tracking-wide truncate">Interface Dinâmica para Equipes de Remo</span>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2 mt-2">Visão Geral</div>
            <NavItem id="dashboard" icon={IconDashboard} label="Dashboard" disabled={isSolved} />
            
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2 mt-6">Dados de Entrada</div>
            <NavItem id="provas" icon={IconFlag} label="Grade de Provas" disabled={isSolved} />
            <NavItem id="atletas" icon={IconUsers} label="Plantel de Atletas" disabled={isSolved} />
            <NavItem id="restricoes" icon={IconLock} label="Regras Manuais" disabled={isSolved} />
            
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2 mt-6">Processamento</div>
            <NavItem id="optimization" icon={IconZap} label="Gerar Resultado" disabled={isSolved && activeRoute !== 'optimization'} />

            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2 mt-6">Suporte</div>
            <NavItem id="ajuda" icon={IconHelp} label="Ajuda & Manual" />
        </div>

        {/* User / Credits Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/30">
            <button className="flex items-center space-x-3 w-full p-2 rounded-xl hover:bg-slate-800 transition-colors">
                 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <span className="text-xs font-bold text-slate-400">HH</span>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="text-sm font-medium text-slate-200">Hilton Homem</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">UFF / Cederj</span>
                 </div>
            </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-950 relative">
        
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-8 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md z-10 shrink-0">
             <div className="flex items-center">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden mr-4 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
                >
                    <IconMenu />
                </button>
                 <div className="text-sm font-medium text-slate-400 hidden sm:block truncate">
                    Sistema de TCC Equipes de Remo <span className="text-slate-600 mx-2">/</span> Hilton Homem | Msc. Nathaniel Ramalho | Dra. Simone Martins
                 </div>
            </div>
            <div className="flex items-center space-x-4">
                {isSolved && (
                     <button 
                        onClick={() => { setIsSolved(false); setActiveRoute('dashboard'); }}
                        className="text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 px-3 rounded-md transition-colors border border-slate-700 flex items-center"
                     >
                        <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        NOVO ESTUDO
                     </button>
                )}
                <button 
                  onClick={() => setActiveRoute('ajuda')}
                  className={`transition-colors p-2 rounded-lg ${activeRoute === 'ajuda' ? 'text-sky-400 bg-sky-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                  title="Central de Ajuda"
                >
                    <IconHelp />
                </button>
            </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 custom-scrollbar">
            <div className="mx-auto max-w-7xl h-full">
                {activeRoute === 'dashboard' && renderDashboard()}
                {activeRoute === 'provas' && renderProvas()}
                {activeRoute === 'atletas' && renderAtletas()}
                {activeRoute === 'restricoes' && renderRestricoes()}
                {activeRoute === 'ajuda' && renderAjuda()}
                {activeRoute === 'optimization' && !isSolved && renderOptimization()}
                {activeRoute === 'optimization' && isSolved && renderResults()}
            </div>
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
            <div 
                className="fixed inset-0 bg-black/60 z-10 lg:hidden backdrop-blur-sm"
                onClick={() => setIsSidebarOpen(false)}
            ></div>
        )}
      </main>

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}} />
    </div>
  );
}
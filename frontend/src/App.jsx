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
const IconDownload = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const IconUpload = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const IconTrendingDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>;
const IconHelp = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconXCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>;
const IconSave = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>;

export default function App() {
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSolving, setIsSolving] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

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

  // Requirement RF05 (Fix) & RF06 (Block)
  const [restricoes, setRestricoes] = useState([
    { uid: 1, type: 'block', provaUid: 5, atletaId: 21, error: 'Não restam lugares para alocação deste atleta.' },
    { uid: 2, type: 'fix', provaUid: 3, atletaId: 8, error: null }
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

  const getValidationStatus = () => {
    const configValid = config.penalty >= 0 && config.restInterval >= 0;
    const provasValid = provas.length > 0 && provas.every(p => p.id.trim() !== '' && p.date.trim() !== '' && p.time.trim() !== '');
    const atletasValid = atletas.length > 0 && atletas.every(a => a.name.trim() !== '' && a.min <= a.max && a.min >= 0);
    const restricoesValid = restricoes.every(r => provas.some(p => p.uid === r.provaUid) && atletas.some(a => a.id === r.atletaId));
    return { configValid, provasValid, atletasValid, restricoesValid };
  };

  const status = getValidationStatus();
  const allValid = status.configValid && status.provasValid && status.atletasValid && status.restricoesValid;

  const handleSolucionar = () => {
    if (!allValid) return;
    setIsSolving(true);
    setActiveRoute('optimization');
    // Simulate API call to the backend
    setTimeout(() => {
      setIsSolving(false);
      setIsSolved(true);
    }, 2500);
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
           <button className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-sm">
            <IconUpload /> <span className="ml-2">Importar CSV</span>
          </button>
          <button 
            onClick={() => setProvas([...provas, { uid: generateUid(provas), id: `#${provas.length + 10}`, date: '', time: '', sex: 'M', ageClass: 'A', seats: 1, boat: '1X', amount: 1 }])}
            className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-lg shadow-sky-500/20"
          >
            <IconPlus /> <span className="ml-2">Adicionar Regata</span>
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
                        <p>Nenhuma regata cadastrada no sistema.</p>
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
           <button className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-sm">
            <IconUpload /> <span className="ml-2">Importar CSV</span>
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

  const renderRestricoes = () => {
    const safeRestricoes = restricoes.map(r => ({
      ...r,
      pExists: provas.some(p => p.uid === r.provaUid),
      aExists: atletas.some(a => a.id === r.atletaId)
    }));

    return (
      <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Regras de Exceção</h1>
            <p className="text-slate-400 mt-1">Force alocações específicas ou impeça atletas de participarem (RF05, RF06).</p>
          </div>
          <div className="flex gap-3">
             <button 
              onClick={() => setRestricoes([...restricoes, { uid: generateUid(restricoes), type: 'fix', provaUid: provas[0]?.uid || '', atletaId: atletas[0]?.id || '', error: null }])}
               className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={provas.length === 0 || atletas.length === 0}
            >
              <IconPlus /> <span className="ml-2">Nova Restrição</span>
            </button>
          </div>
        </div>

        <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pb-10">
          {safeRestricoes.map((restricao, idx) => (
            <div key={restricao.uid} className="flex flex-col md:flex-row items-stretch md:items-center gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm relative group hover:border-slate-700 transition-colors">
              
              <button 
                onClick={() => { const newR = [...restricoes]; newR[idx].type = restricao.type === 'fix' ? 'block' : 'fix'; setRestricoes(newR); }}
                className={`w-full md:w-32 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${
                  restricao.type === 'fix' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                }`}
              >
                {restricao.type === 'fix' ? '✔ Fixar' : '✖ Bloquear'}
              </button>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">Regata Alvo</label>
                <select 
                  value={restricao.provaUid} 
                  onChange={(e) => { const newR = [...restricoes]; newR[idx].provaUid = parseInt(e.target.value); setRestricoes(newR); }}
                  className={`w-full bg-slate-950 rounded-lg px-4 py-2.5 text-sm outline-none border transition-colors appearance-none cursor-pointer ${!restricao.pExists || restricao.error ? 'border-red-500/50 text-red-300' : 'border-slate-800 focus:border-sky-500 text-slate-200'}`}
                >
                  <option value="" disabled>Selecione uma prova...</option>
                  {provas.map(p => (
                    <option key={p.uid} value={p.uid}>{p.id} — {p.date} {p.time} ({p.sex} {p.seats}{p.boat.replace(/[0-9]/g, '')})</option>
                  ))}
                </select>
              </div>

              <div className="hidden md:flex items-center justify-center mt-5 text-slate-600">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>

              <div className="flex-1 min-w-[200px]">
                 <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">Atleta Específico</label>
                <select 
                  value={restricao.atletaId} 
                  onChange={(e) => { const newR = [...restricoes]; newR[idx].atletaId = parseInt(e.target.value); setRestricoes(newR); }}
                  className={`w-full bg-slate-950 rounded-lg px-4 py-2.5 text-sm outline-none border transition-colors appearance-none cursor-pointer ${!restricao.aExists || restricao.error ? 'border-red-500/50 text-red-300' : 'border-slate-800 focus:border-sky-500 text-slate-200'}`}
                >
                  <option value="" disabled>Selecione um atleta...</option>
                  {atletas.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>

              <button 
                onClick={() => setRestricoes(restricoes.filter(r => r.uid !== restricao.uid))} 
                className="mt-5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 p-2.5 rounded-lg transition-colors self-end md:self-auto"
                title="Remover restrição"
              >
                <IconTrash />
              </button>

              {restricao.error && (
                <div className="absolute top-full left-0 mt-2 bg-red-950/90 text-red-200 text-xs py-2 px-4 rounded-lg shadow-xl border border-red-900/50 z-10 flex items-center gap-2 backdrop-blur-md">
                  <IconAlertCircle /> <span>{restricao.error}</span>
                </div>
              )}
            </div>
          ))}

          {restricoes.length === 0 && (
            <div className="text-center flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
              <div className="p-4 bg-slate-800/50 rounded-full mb-4"><IconLock /></div>
              <h3 className="text-lg font-medium text-slate-300">Nenhuma restrição manual</h3>
              <p className="text-slate-500 mt-1 max-w-sm">O modelo matemático (CPLEX) terá total liberdade para decidir as melhores escalações.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

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
    const solutionData = [
      { id: '#7', num: '1/1', date: '30/03', time: '09:12h', boat: '1X', class: 'B', age: '44', score: '0,300', athletes: [{id: 18, name: 'Atleta 18', age: 44, score: 0.7}] },
      { id: '#9', num: '1/1', date: '30/03', time: '09:26h', boat: '2X', class: 'G', age: '65', score: '0,450', athletes: [{id: 12, name: 'Atleta 12', age: 63, score: 0.1}, {id: 15, name: 'Atleta 15', age: 67, score: 0.8}] },
      { id: '#19', num: '1/1', date: '30/03', time: '10:36h', boat: '2X', class: 'F', age: '60.5', score: '0,775', athletes: [{id: 8, name: 'Atleta 8', age: 62, score: 0.8}, {id: 21, name: 'Atleta 21', age: 59, score: 0.8}] },
      { id: '#24', num: '1/1', date: '30/03', time: '11:11h', boat: '4+', class: 'E', age: '56', score: '0,125', athletes: [{id: 1, name: 'Atleta 1', age: 59, score: 0.2}, {id: 7, name: 'Atleta 7', age: 51, score: 0.7}, {id: 10, name: 'Atleta 10', age: 56, score: 0.4}, {id: 11, name: 'Atleta 11', age: 58, score: 0.3}] },
      { id: '#29', num: '1/1', date: '30/03', time: '11:46h', boat: '2X', class: 'D', age: '52.5', score: '0,275', athletes: [{id: 3, name: 'Atleta 3', age: 67, score: 0.2}, {id: 5, name: 'Atleta 5', age: 38, score: 0.6}] },
    ];

    return (
      <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Resultado da Alocação</h1>
            <p className="text-slate-400 mt-1">Escalação otimizada baseada nos dados do Sul-Americano de Remo Master.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
             <div className="bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 shadow-inner flex flex-col items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Função Objetivo (Máx)</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 font-mono">
                    21,8375
                </span>
            </div>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl flex items-center justify-center text-sm font-medium transition-colors shadow-sm gap-2 border border-slate-700 h-full">
              <IconDownload /> <span>Exportar Solução</span>
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl flex-1 overflow-hidden shadow-sm flex flex-col">
            <div className="p-4 border-b border-slate-800 bg-slate-950/50 flex items-center justify-between">
                <h3 className="text-slate-300 font-medium flex items-center gap-2"><IconFlag /> Tripulações Formadas</h3>
                 <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                    <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-transparent text-slate-500 hover:text-white transition-colors">VISÃO COMPACTA</button>
                    <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-slate-800 text-sky-400 shadow-sm border border-slate-700">VISÃO COMPLETA</button>
                </div>
            </div>
            
            <div className="overflow-y-auto custom-scrollbar flex-1 p-4 space-y-3">
            {solutionData.map((row, i) => (
                <div key={i} className="bg-slate-950/50 hover:bg-slate-800/80 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between transition-colors border border-slate-800/50 group gap-4 relative overflow-hidden">
                {/* Status indicator line on the left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"></div>
                
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
                             <span className="text-slate-200 text-sm">{row.age} anos</span>
                        </div>
                        <div className="flex flex-col text-left md:text-right">
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Grau Final</span>
                            <span className="font-mono font-bold text-emerald-400 text-sm">{row.score}</span>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-wrap md:justify-end gap-2 w-full md:w-64">
                    {row.athletes.map(a => (
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
                    ))}
                    </div>
                </div>
                </div>
            ))}
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
                <button className="text-slate-400 hover:text-white transition-colors p-2" title="Central de Ajuda">
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
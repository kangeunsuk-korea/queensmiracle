import React, { useState } from 'react';
import { 
  Mic, Play, Download, Languages, User, Loader2, Volume2, Sparkles, Zap, Heart, 
  MessageSquare, BookOpen, PenTool, Radio, StopCircle, Headphones, Star, 
  LayoutDashboard, Music, Video, Layout, Share2, Compass, Tv, Search, BadgeCheck, 
  ShieldCheck, ShoppingCart, Globe, ExternalLink, ArrowRight, Activity, Globe2, Link2
} from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState("Dashboard");
  const [inputText, setInputText] = useState("퀸즈미라클의 기적은 상상이 아니라 실행에서 시작됩니다.");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  // Vercel 환경 변수 안전 접근 함수
  const getApiKey = () => {
    try {
      // @ts-ignore
      return import.meta.env.VITE_GEMINI_API_KEY || "";
    } catch (e) {
      return "";
    }
  };
  const apiKey = getApiKey();

  const handleTranslate = async () => {
    if (!inputText.trim() || !apiKey) return;
    setIsTranslating(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: `Translate to English: "${inputText}"` }] }] })
      });
      const data = await response.json();
      setTranslatedText(data.candidates?.[0]?.content?.parts?.[0]?.text || "결과를 가져오지 못했습니다.");
    } catch (err) { console.error(err); } finally { setIsTranslating(false); }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex font-sans text-slate-200 overflow-hidden">
      <aside className="w-72 bg-slate-950/95 border-r border-slate-800 flex flex-col p-8 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-4 px-2 mb-16 group cursor-pointer" onClick={() => setActiveModule("Dashboard")}>
            <div className="bg-gradient-to-tr from-indigo-500 to-blue-600 p-3 rounded-2xl shadow-xl transition-transform group-hover:rotate-6">
                <Zap className="w-8 h-8 text-white fill-white" />
            </div>
            <div>
                <h1 className="text-2xl font-black tracking-tighter uppercase italic leading-none text-white">Queens</h1>
                <p className="text-[9px] font-black text-indigo-400 tracking-[0.5em] uppercase mt-1">Universal Hub</p>
            </div>
        </div>
        <nav className="flex-1 space-y-2.5">
            {[
              { id: "Dashboard", name: "종합 컨트롤타워", icon: <LayoutDashboard className="w-5 h-5" /> },
              { id: "Voice", name: "AI 보이스 랩", icon: <Mic className="w-5 h-5" /> },
              { id: "Ecosystem", name: "퀸즈 생태계", icon: <Globe className="w-5 h-5" /> },
            ].map((item) => (
                <button key={item.id} onClick={() => setActiveModule(item.id)} className={`w-full flex items-center gap-4 px-6 py-5 rounded-[1.5rem] transition-all group ${activeModule === item.id ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-900/50'}`}>
                    {item.icon} <span className="text-sm font-black tracking-tight">{item.name}</span>
                </button>
            ))}
        </nav>
        <div className="mt-auto p-5 bg-slate-900/40 rounded-3xl border border-slate-800/50 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
               <ShieldCheck className="w-4 h-4" /> Hub Active v23.7
            </div>
        </div>
      </aside>

      <main className="flex-1 relative overflow-y-auto p-12 lg:p-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent scrollbar-hide">
        {activeModule === "Dashboard" && (
          <div className="space-y-16 animate-in fade-in duration-1000">
            <header className="space-y-8 text-center md:text-left">
              <div className="flex items-center gap-3 font-black text-indigo-400 uppercase tracking-[0.6em] text-[11px] justify-center md:justify-start">
                <Activity className="w-4 h-4 animate-pulse" /> Global Controller Active
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">THE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 uppercase italic">Queens Hub</span></h2>
              <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed italic mx-auto md:mx-0">아틀리에, 몰, 비즈니스 자동화까지<br/>퀸즈미라클의 모든 세계가 이곳으로 연결됩니다.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <a href="[https://queensmiracle.com](https://queensmiracle.com)" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 p-10 rounded-[4rem] border border-slate-800 shadow-2xl group hover:border-blue-500/50 transition-all hover:-translate-y-3">
                  <Globe2 className="w-10 h-10 text-blue-500 mb-8" />
                  <h4 className="text-2xl font-black text-white italic mb-4 uppercase">Atelier</h4>
                  <p className="text-slate-500 text-sm mb-10 leading-relaxed">아틀리에 홈페이지 연결</p>
                  <div className="w-full py-4 rounded-2xl bg-blue-600/10 text-blue-400 font-black text-center group-hover:bg-blue-600 group-hover:text-white transition-all">Visit Website</div>
               </a>
               <a href="[https://queensmall.kr](https://queensmall.kr)" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 p-10 rounded-[4rem] border border-slate-800 shadow-2xl group hover:border-pink-500/50 transition-all hover:-translate-y-3">
                  <ShoppingCart className="w-10 h-10 text-pink-500 mb-8" />
                  <h4 className="text-2xl font-black text-white italic mb-4 uppercase">Queens Mall</h4>
                  <p className="text-slate-500 text-sm mb-10 leading-relaxed">공식 스토어 연결</p>
                  <div className="w-full py-4 rounded-2xl bg-pink-600/10 text-pink-400 font-black text-center group-hover:bg-pink-600 group-hover:text-white transition-all">Shop Now</div>
               </a>
               <div onClick={() => setActiveModule("Voice")} className="bg-slate-900/50 p-10 rounded-[4rem] border border-slate-800 shadow-2xl group hover:border-indigo-500/50 transition-all hover:-translate-y-3 cursor-pointer">
                  <Mic className="w-10 h-10 text-indigo-500 mb-8" />
                  <h4 className="text-2xl font-black text-white italic mb-4 uppercase">AI BIZ Lab</h4>
                  <p className="text-slate-500 text-sm mb-10 leading-relaxed">통역 및 오디오북 생성</p>
                  <div className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-black text-center">Launch Tool</div>
               </div>
            </div>
          </div>
        )}
        {activeModule === "Voice" && (
          <div className="space-y-12 max-w-5xl mx-auto animate-in slide-in-from-bottom-5">
            <h3 className="text-4xl font-black text-white italic uppercase">AI Voice Lab</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <textarea className="w-full h-80 p-10 rounded-[3.5rem] bg-slate-950 border-4 border-slate-800 text-white text-xl font-medium outline-none focus:border-indigo-600 shadow-inner" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <div className="h-80 p-10 rounded-[3.5rem] bg-emerald-950/10 border-4 border-emerald-900/20 flex items-center justify-center text-center shadow-inner overflow-hidden">
                    {isTranslating ? <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" /> : <div className="text-emerald-50 font-black text-2xl leading-tight">{translatedText || "READY TO SYNC"}</div>}
                </div>
            </div>
            <button onClick={handleTranslate} disabled={isTranslating} className="w-full py-12 rounded-[5rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-900 text-white font-black text-4xl shadow-3xl active:scale-95 transition-all">
                {isTranslating ? <Loader2 className="w-16 h-16 animate-spin mx-auto" /> : <Languages className="w-16 h-16 inline mr-6" />}
                <span className="italic uppercase tracking-tighter">Execute AI</span>
            </button>
          </div>
        )}
        <footer className="mt-40 text-slate-800 text-[10px] font-black tracking-[1.5em] uppercase text-center flex flex-wrap justify-center items-center gap-16 pb-20 border-t border-slate-900 pt-32">
            <span>Queens Miracle Atelier HQ</span>
            <div className="w-4 h-4 bg-slate-900 rounded-full"></div>
            <Heart className="w-12 h-12 text-pink-950 fill-pink-950 opacity-10" />
        </footer>
      </main>
    </div>
  );
}

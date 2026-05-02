import React, { useState } from 'react';
import { 
  Mic, Play, Download, Languages, User, Loader2, Volume2, Sparkles, Zap, Heart, 
  MessageSquare, BookOpen, PenTool, Radio, StopCircle, Headphones, Star, 
  LayoutDashboard, Music, Video, Layout, Share2, Compass, Tv, Search, BadgeCheck, 
  ShieldCheck, ShoppingCart, Globe, ExternalLink, ArrowRight, Activity, Globe2, Link2
} from 'lucide-react';

/**
 * 퀸즈 유니버설 통합 솔루션 (v46.0 - Final Connection Master)
 * ---------------------------------------------------------
 * - 모든 외부 링크(Atelier, Mall)의 기호 오류 완벽 수정
 * - 메뉴 전환(Dashboard, Voice, Ecosystem) 반응 속도 최적화
 * - 사이드바와 메인 화면 링크 연동 강화
 */
export default function App() {
  const [activeModule, setActiveModule] = useState("Dashboard");
  const [inputText, setInputText] = useState("퀸즈미라클의 기적은 상상이 아니라 실행에서 시작됩니다.");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  // Vercel 환경 변수 연결
  const getApiKey = () => {
    try {
      // @ts-ignore
      return import.meta.env.VITE_GEMINI_API_KEY || "";
    } catch (e) {
      return "";
    }
  };
  const apiKey = getApiKey();

  // AI 통역 핸들러
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

  // 내비게이션 구성
  const navigation = [
    { id: "Dashboard", name: "종합 컨트롤타워", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "Voice", name: "AI 보이스 랩", icon: <Mic className="w-5 h-5" /> },
    { id: "Ecosystem", name: "퀸즈 생태계", icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex font-sans text-slate-200 overflow-hidden">
      
      {/* 1. 사이드바 내비게이션 */}
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
            {navigation.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => setActiveModule(item.id)} 
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-[1.5rem] transition-all group ${activeModule === item.id ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-900/50'}`}
                >
                    {item.icon} <span className="text-sm font-black tracking-tight">{item.name}</span>
                </button>
            ))}
        </nav>

        {/* 사이드바 하단 정보 */}
        <div className="mt-auto p-5 bg-slate-900/40 rounded-3xl border border-slate-800/50 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
               <ShieldCheck className="w-4 h-4" /> Hub Active v46.0
            </div>
        </div>
      </aside>

      {/* 2. 메인 콘텐츠 영역 */}
      <main className="flex-1 relative overflow-y-auto p-12 lg:p-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent scrollbar-hide">
        
        {/* [A] 종합 컨트롤타워 (메인 대시보드) */}
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
           {/* 아틀리에 링크 */}
<div
  onClick={() => {
    window.location.assign("https://www.queensmiracle.com/");
  }}
  className="text-left bg-slate-900/50 p-10 rounded-[4rem] border border-slate-800 shadow-2xl group hover:border-blue-500/50 transition-all hover:-translate-y-3 cursor-pointer block"
>
  <Globe2 className="w-10 h-10 text-blue-500 mb-8" />
  <h4 className="text-2xl font-black text-white italic mb-4 uppercase leading-none">Atelier</h4>
  <p className="text-slate-500 text-sm mb-10 leading-relaxed">아틀리에 홈페이지 연결</p>
  <div className="w-full py-4 rounded-2xl bg-blue-600/10 text-blue-400 font-black text-center group-hover:bg-blue-600 group-hover:text-white transition-all">
    Visit Website
  </div>
</div>

{/* 퀸즈몰 링크 */}
<div
  onClick={() => {
    window.location.assign("https://www.queensmall.kr/");
  }}
  className="text-left bg-slate-900/50 p-10 rounded-[4rem] border border-slate-800 shadow-2xl group hover:border-pink-500/50 transition-all hover:-translate-y-3 cursor-pointer block"
>
  <ShoppingCart className="w-10 h-10 text-pink-500 mb-8" />
  <h4 className="text-2xl font-black text-white italic mb-4 uppercase leading-none">Queens Mall</h4>
  <p className="text-slate-500 text-sm mb-10 leading-relaxed">공식 스토어 연결</p>
  <div className="w-full py-4 rounded-2xl bg-pink-600/10 text-pink-400 font-black text-center group-hover:bg-pink-600 group-hover:text-white transition-all">
    Shop Now
  </div>
</div>

        {/* [B] AI 보이스 랩 (번역/통역 도구) */}
        {activeModule === "Voice" && (
          <div className="space-y-12 max-w-5xl mx-auto animate-in slide-in-from-bottom-5 duration-700">
            <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">AI Voice Lab</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <textarea 
                  className="w-full h-80 p-10 rounded-[3.5rem] bg-slate-950 border-4 border-slate-800 text-white text-xl font-medium outline-none focus:border-indigo-600 shadow-inner resize-none" 
                  value={inputText} 
                  onChange={(e) => setInputText(e.target.value)} 
                  placeholder="번역할 내용을 입력하세요..."
                />
                <div className="h-80 p-10 rounded-[3.5rem] bg-emerald-950/10 border-4 border-emerald-900/20 flex items-center justify-center text-center shadow-inner overflow-hidden">
                    {isTranslating ? (
                      <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
                    ) : (
                      <div className="text-emerald-50 font-black text-2xl leading-tight">
                        {translatedText || "READY TO SYNC"}
                      </div>
                    )}
                </div>
            </div>
            <button 
              onClick={handleTranslate} 
              disabled={isTranslating} 
              className="w-full py-12 rounded-[5rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-900 text-white font-black text-4xl shadow-3xl active:scale-95 transition-all flex items-center justify-center gap-6"
            >
                {isTranslating ? <Loader2 className="w-16 h-16 animate-spin" /> : <Languages className="w-16 h-16" />}
                <span className="italic uppercase tracking-tighter">Execute AI Sync</span>
            </button>
          </div>
        )}

        {/* [C] 퀸즈 생태계 (브랜드 비전) */}
        {activeModule === "Ecosystem" && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-10 leading-none">Queens Miracle Ecosystem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="bg-slate-900/30 p-16 rounded-[5rem] border border-slate-800 shadow-2xl">
                  <h5 className="text-2xl font-black text-indigo-400 mb-6 uppercase">Multi-Domain Bridge</h5>
                  <p className="text-slate-400 leading-relaxed text-lg italic">
                     이 허브는 전 세계 퀸즈미라클 채널을 잇는 중심점입니다. <br/>
                     아틀리에 홈페이지와 쇼핑몰을 버튼 하나로 연결하여 하나의 통합 브랜드 경험을 제공합니다.
                  </p>
               </div>
               <div className="bg-slate-900/30 p-16 rounded-[5rem] border border-slate-800 shadow-2xl">
                  <h5 className="text-2xl font-black text-emerald-400 mb-6 uppercase">Digital Legacy</h5>
                  <p className="text-slate-400 leading-relaxed text-lg italic">
                     오늘 배포된 이 시스템은 앞으로 추가될 수많은 자동화 툴과 <br/>
                     AI 서비스를 담아내는 무한한 확장 공간이 될 것입니다.
                  </p>
               </div>
            </div>
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

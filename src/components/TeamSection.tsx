import React, { useState } from "react";
import { Users, User, ArrowRight, LayoutGrid, ChevronDown } from "lucide-react";

const teamData = [
  {
    category: "기술/개발",
    totalTeams: 13,
    color: "indigo",
    pairs: [
      { id: 1, members: ["김민지 사원", "김민 사원"] },
      { id: 2, members: ["김채은 사원", "김태현 과장"] },
    ],
    individuals: [
      "감한범", "강병헌", "금창익", "김동욱", "김은겸", "박성한", 
      "박찬혁", "오아람", "조형준", "최미진", "하현식"
    ]
  },
  {
    category: "기획/행정",
    totalTeams: 5,
    color: "blue",
    pairs: [
      { id: 1, members: ["최정욱 전무", "이호진 부장"] },
      { id: 2, members: ["권영남 상무", "이치원 부장"] },
      { id: 3, members: ["임윤현 과장", "임한진 과장"] },
    ],
    individuals: ["승중호", "조현아", "전의원"]
  },
  {
    category: "디자인",
    totalTeams: 5,
    color: "purple",
    pairs: [
      { id: 1, members: ["김태희 전무, 민지훈 부장", "최현서 차장"] },
      { id: 2, members: ["김영진 이사", "백승종 상무"] },
      { id: 3, members: ["이천호 이사", "김동희 차장"] },
      { id: 4, members: ["김연재 대리", "박수리 대리"] },
    ],
    individuals: ["정규봉"]
  },
  {
    category: "사업관리",
    totalTeams: 4,
    color: "amber",
    pairs: [
      { id: 1, members: ["주혁돈 부장", "박상원 과장"] },
    ],
    individuals: ["정광섭", "홍원표"]
  },
  {
    category: "해외사업제안",
    totalTeams: 1,
    color: "rose",
    pairs: [
      { id: 1, members: ["김정식 부장", "김민지 과장"] },
    ],
    individuals: []
  }
];

const getColorClasses = (color) => {
  const map = {
    indigo: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-500/20",
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20",
    amber: "bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20",
    rose: "bg-rose-500/10 border-rose-500/30 text-rose-400 group-hover:bg-rose-500/20",
  };
  return map[color] || map.indigo;
};

const getBadgeClasses = (color) => {
  const map = {
    indigo: "bg-indigo-500/20 text-indigo-300",
    blue: "bg-blue-500/20 text-blue-300",
    purple: "bg-purple-500/20 text-purple-300",
    amber: "bg-amber-500/20 text-amber-300",
    rose: "bg-rose-500/20 text-rose-300",
  };
  return map[color] || map.indigo;
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("전체");

  const categories = ["전체", ...teamData.map(d => d.category)];
  
  const filteredData = activeTab === "전체" 
    ? teamData 
    : teamData.filter(d => d.category === activeTab);

  return (
    <section className="py-24 px-6 relative z-10 bg-slate-900/40 border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-md">
              <LayoutGrid className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300 font-medium whitespace-nowrap">
                총 28개 팀 확정 완료
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-slate-400 bg-clip-text text-transparent">
              대회 팀 구성 현황
            </h2>
            <p className="text-lg text-slate-400 break-keep">
              다양한 직군이 모여 AI로 업무를 혁신할 준비를 마쳤습니다.
            </p>
          </div>

          <div className="flex p-1.5 space-x-1 bg-slate-800/60 rounded-2xl border border-slate-700/50 backdrop-blur-md overflow-x-auto w-full xl:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative shrink-0 whitespace-nowrap z-10 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 ${
                  activeTab === cat
                    ? "text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeTab === cat && (
                  <div 
                    className="absolute inset-0 bg-indigo-500 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.5)] -z-10 animate-fade-in" 
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12 h-[600px] overflow-y-auto pr-2 md:pr-4 pb-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          {filteredData.map((data, idx) => (
            <div key={idx} className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                <h3 className={`text-2xl font-bold ${getColorClasses(data.color).split(" ")[2]}`}>
                  {data.category}
                </h3>
                <span className={`px-3 py-1 rounded-md text-xs font-bold ${getBadgeClasses(data.color)}`}>
                  총 {data.totalTeams}팀
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Pairs */}
                {data.pairs.map((pair, pIdx) => (
                  <div 
                    key={`pair-${pIdx}`} 
                    className="group relative glass-card p-6 rounded-xl overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative z-10 flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-black opacity-30 group-hover:opacity-60 transition-opacity">
                          {String(pIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-semibold text-white translate-y-1">팀</span>
                      </div>
                      <div className="bg-slate-900/50 p-1.5 rounded-lg border border-white/10 shrink-0">
                        <Users className="w-4 h-4 opacity-70" />
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col gap-2">
                      {pair.members.map((member, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-slate-200 font-medium">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Individuals */}
                {data.individuals.map((ind, iIdx) => (
                  <div 
                    key={`ind-${iIdx}`} 
                    className="group relative glass-card p-6 rounded-xl overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative z-10 flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-black opacity-20 text-slate-500 group-hover:opacity-40 transition-opacity">
                           {String(data.pairs.length + iIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-semibold text-slate-300 translate-y-1">팀</span>
                      </div>
                      <div className="bg-slate-900/50 px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1 shrink-0">
                        <User className="w-3 h-3 text-slate-400" />
                        <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">개인 (1인)</span>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col gap-2 h-full justify-end">
                      <div className="flex items-center gap-2 text-slate-200 font-medium pb-1.5">
                        {ind}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

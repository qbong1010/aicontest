import React from "react";
import { createRoot } from "react-dom/client";
import {
  Calendar,
  Users,
  Zap,
  Award,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              참가 의향 조사 진행 중 (~2/20)
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fade-in-delay-1">
            도시단지1부
            <br />
            <span className="gradient-text">AI 업무혁신 경진대회</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            단순히 "잘 만든 아이디어"가 아닌, <br className="md:hidden" />
            <span className="text-indigo-400 font-semibold">
              "바로 써먹을 수 있는 업무 혁신"
            </span>
            을 찾습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-2">
            <a
              href="https://forms.gle/KPMj3YhUWftA1YTY6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              참가 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#schedule"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-medium"
            >
              일정 확인하기
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-8 h-8 text-blue-400" />}
            title="AI 기반 팀 빌딩"
            desc="참가자의 성향과 강점을 AI가 분석하여 최적의 팀을 매칭해 드립니다."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-yellow-400" />}
            title="즉시 적용 가능성"
            desc="화려한 이론보다는 내일 당장 업무에 쓸 수 있는 실용적인 결과를 지향합니다."
          />
          <FeatureCard
            icon={<Award className="w-8 h-8 text-purple-400" />}
            title="공정한 블라인드 심사"
            desc="AI 심사위원과 블라인드 테스트를 통해 오직 결과물로만 평가합니다."
          />
        </div>
      </section>

      {/* Process / Timeline */}
      <section id="schedule" className="py-24 px-6 bg-white/5 relative">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">진행 일정</h2>
            <p className="text-gray-400">
              도시단지1부 AI경진대회 진행일정
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            <TimelineItem
              date="~ 2.10 (화) 16:00"
              title="사전 참가 조사 및 팀 구성"
              desc="Google 설문을 통한 참가 의향 및 성향 조사, AI 기반 팀 매칭 진행"
              status="current"
            />
            <TimelineItem
              date="2.20 (금)"
              title="팀 구성 확정"
              desc="최종 팀 배정 완료 및 공지"
              status="upcoming"
            />
            <TimelineItem
              date="~ 4.30 (목)"
              title="예선 결과물 제출"
              desc={`아이디어 제안서(PPT) 제출.\n기존 업무 대비 개선 포인트 및 기대 성과 중심`}
              status="upcoming"
            />
            <TimelineItem
              date="5.14 (목)"
              title="예선 결과 발표"
              desc="블라인드 심사를 통해 상위 10개 팀/개인 선정"
              status="upcoming"
            />
            <TimelineItem
              date="6.18 (목)"
              title="본선 발표 및 시상"
              desc="워크샵 당일 발표 진행. 실무 적용 시연 및 최종 심사"
              status="upcoming"
            />
          </div>
        </div>
      </section>

      {/* Participation Guide */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <h2 className="text-3xl font-bold mb-8 relative z-10">참가 가이드</h2>

          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-300">
                <CheckCircle2 className="w-5 h-5" />
                모집 분야
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "기획 / 행정",
                    desc: "행정 절차, 내부 기획·보고 업무를 효율화하는 아이디어",
                  },
                  {
                    title: "기술 / 개발",
                    desc: "GIS·CAD·엑셀 데이터 처리 등 기술 업무를 자동화하거나 도구화하는 아이디어",
                  },
                  {
                    title: "사업관리",
                    desc: "프로젝트 진행 현황, 성과, 비용·수급 등을 관리·분석하는 아이디어",
                  },
                  {
                    title: "디자인",
                    desc: "보고·발표·제안 자료 등 문서와 시각 표현을 개선하는 아이디어",
                  },
                  {
                    title: "기타",
                    desc: "위 분야에 포함되지 않는 자유로운 아이디어",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col gap-2 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="font-bold text-indigo-300">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-300">
                <CheckCircle2 className="w-5 h-5" />
                예선 제출 양식
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>자유 형식 (PPT 권장, 5~15페이지)</li>
                <li>
                  필수 포함: AI 활용 아이디어, 개선 포인트, 적용 시나리오, 기대
                  성과
                </li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-500 mb-1">
                  참고 사항
                </h4>
                <p className="text-sm text-gray-400">
                  추후 변경사항은 공지사항을 통해 알려드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">도시단지1부</h3>
            <p className="text-sm text-gray-500">
              © 2026 AI Work Innovation Contest
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="https://forms.gle/KPMj3YhUWftA1YTY6"
              className="text-gray-400 hover:text-white transition-colors"
            >
              참가신청
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const FeatureCard = ({ icon, title, desc }) => (
  <div className="glass-card p-8 rounded-2xl space-y-4">
    <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/10">
      {icon}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const TimelineItem = ({ date, title, desc, status }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    {/* Icon */}
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 
      ${status === "current" ? "bg-indigo-500 text-white" : "bg-gray-800 text-gray-400"}`}
    >
      {status === "current" ? (
        <Zap className="w-5 h-5" />
      ) : (
        <div className="w-3 h-3 rounded-full bg-current" />
      )}
    </div>

    {/* Card */}
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5">
      <div className="flex items-center justify-between mb-2">
        <time
          className={`font-mono text-sm ${status === "current" ? "text-indigo-400 font-bold" : "text-gray-500"}`}
        >
          {date}
        </time>
        {status === "current" && (
          <span className="text-[10px] uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">
            Now
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm whitespace-pre-line">{desc}</p>
    </div>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

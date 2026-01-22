"use client";

import { useState } from "react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Modal } from "../components/ui/Modal";
import { Progress } from "../components/ui/Progress";
import { Toggle } from "../components/ui/Toggle";
import { Tooltip } from "../components/ui/Tooltip";

const gradeOptions = [
  { label: "저학년", value: "low" },
  { label: "중학년", value: "mid" },
  { label: "고학년", value: "high" }
];

export default function Home() {
  const [isPracticeOn, setIsPracticeOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [grade, setGrade] = useState("mid");

  const handleGradeChange = (value) => {
    setGrade(value);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.grade = value;
    }
  };

  return (
    <main className="min-h-screen bg-surface px-6 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Harmony Stack</p>
            <h1 className="text-3xl font-bold">초등 음악 에듀테크 교사용 UI</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {gradeOptions.map((option) => (
              <Button
                key={option.value}
                variant={grade === option.value ? "primary" : "secondary"}
                size="sm"
                onClick={() => handleGradeChange(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">수업 모드</h2>
                <p className="text-sm text-slate-500">
                  스택 느낌의 블록 구성과 미니멀한 톤을 유지합니다.
                </p>
              </div>
              <Badge>교사용</Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="flex flex-col gap-3 bg-slate-50">
                <p className="text-sm font-semibold text-slate-500">
                  리듬 블록 진행도
                </p>
                <Progress value={68} />
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>현재 곡</span>
                  <span>8/12</span>
                </div>
              </Card>
              <Card className="flex flex-col gap-3 bg-slate-50">
                <p className="text-sm font-semibold text-slate-500">
                  반응형 피드백
                </p>
                <div className="flex items-center gap-3">
                  <Toggle
                    checked={isPracticeOn}
                    onChange={setIsPracticeOn}
                    label="연습 모드 토글"
                  />
                  <span className="text-sm font-semibold">
                    {isPracticeOn ? "연습 중" : "정지"}
                  </span>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setModalOpen(true)}>새 세션 열기</Button>
              <Button variant="secondary">학생 화면 공유</Button>
              <Tooltip label="스택 블록을 길게 눌러 편집">
                <Button variant="ghost">블록 편집 도움말</Button>
              </Tooltip>
            </div>
          </Card>

          <Card className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">오늘의 진행</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>출석 체크</span>
                <Badge tone="neutral">완료</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>리듬 퀘스트</span>
                <Badge>진행 중</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>합주 기록</span>
                <Badge tone="neutral">대기</Badge>
              </div>
            </div>
            <Button variant="secondary">보고서 보기</Button>
          </Card>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <Card className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-slate-500">접근성</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>모든 버튼과 토글은 최소 44px 터치 타겟 확보</li>
              <li>대비가 높은 잉크 컬러와 액센트로 구분</li>
              <li>툴팁/모달에 시각적 집중 레이어 제공</li>
            </ul>
          </Card>
          <Card className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-slate-500">디자인 토큰</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Spacing: 4px 기준 8단계</li>
              <li>Radius: 2xl(20px) 중심</li>
              <li>Shadow: Soft / Lift 2단계</li>
              <li>Typography: 12-36px 스케일</li>
            </ul>
          </Card>
        </section>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="새로운 연습 세션"
      >
        학생들에게 새로운 리듬 세트를 공유할 준비가 되었어요. 세션을
        시작해볼까요?
      </Modal>
    </main>
  );
}

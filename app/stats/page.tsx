"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StatsPage() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function fetchStats() {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      const res = await fetch("/api/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        router.push("/login");
        return;
      }

      const data = await res.json();
      setStats(data);
    }

    fetchStats();
  }, [router]);

  if (!stats) {
    return (
      <div className="text-slate-400 text-center py-20">
        Loading stats...
      </div>
    );
  }

  const { myStats, platformStats } = stats;

  return (
    <div className="space-y-14">

      {/* MY ANALYTICS */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          My Analytics
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="My Quizzes" value={myStats.totalQuizzes} />
        <StatCard title="My Attempts" value={myStats.totalAttempts} />
        <StatCard title="Highest Score" value={myStats.highestScore} />
        <StatCard
          title="Average Percentage"
          value={`${myStats.averagePercentage}%`}
        />
      </div>

      {/* PLATFORM ANALYTICS */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Platform Analytics
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          title="Total Quizzes"
          value={platformStats.totalQuizzes}
        />
        <StatCard
          title="Total Attempts"
          value={platformStats.totalAttempts}
        />
        <StatCard
          title="Highest Score"
          value={platformStats.highestScore}
        />
        <StatCard
          title="Platform Average"
          value={`${platformStats.averagePercentage}%`}
        />
      </div>

    </div>
  );
}

function StatCard({ title, value }: any) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
      <p className="text-slate-400 text-sm">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
}

"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {
  Bookmark,
  ClipboardList,
  Calendar,
  GraduationCap,
  UserCheck,
  Briefcase,
  Clock,
  Settings,
  PlayCircle,
  Lightbulb,
} from "lucide-react";
import { JobCard, JobCardProps } from "@/components/JobCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { TooltipProps } from "recharts";

const mockUser = {
  name: "Jane Doe",
  avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
};

const mockStats = {
  savedJobs: 8,
  applications: 3,
  upcomingInterviews: 1,
  interviewPrep: { completed: 5, total: 20 },
  profileCompletion: 80, // percent
};

const mockActivity = [
  {
    type: "saved-job",
    icon: <Bookmark className="w-5 h-5 text-blue-500" />,
    description: "Saved job: Frontend Developer at Acme Corp",
    time: "2 hours ago",
  },
  {
    type: "application",
    icon: <Briefcase className="w-5 h-5 text-green-500" />,
    description: "Applied to Backend Engineer at CloudCore",
    time: "Yesterday",
  },
  {
    type: "interview-prep",
    icon: <GraduationCap className="w-5 h-5 text-purple-500" />,
    description: "Completed 3 interview prep questions (React)",
    time: "2 days ago",
  },
  {
    type: "saved-job",
    icon: <Bookmark className="w-5 h-5 text-blue-500" />,
    description: "Saved job: UI/UX Designer at Creative Minds",
    time: "3 days ago",
  },
];

const mockRecommendedJobs: JobCardProps[] = [
  {
    jobId: "1",
    title: "Frontend Developer",
    company: "Acme Corp",
    companyLogoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Remote",
    salary: "$120k - $140k",
    tags: ["React", "TypeScript", "Remote"],
    description: "Work on modern web apps with a talented frontend team.",
    datePosted: "2 days ago",
  },
  {
    jobId: "2",
    title: "Backend Engineer",
    company: "CloudCore",
    companyLogoUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    location: "New York, NY",
    salary: "$130k - $150k",
    tags: ["Node.js", "API", "AWS"],
    description: "Build scalable backend services for cloud products.",
    datePosted: "3 days ago",
  },
  {
    jobId: "3",
    title: "UI/UX Designer",
    company: "Creative Minds",
    companyLogoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "San Francisco, CA",
    salary: "$100k - $120k",
    tags: ["Figma", "UX", "Design"],
    description: "Design beautiful and user-friendly interfaces.",
    datePosted: "1 day ago",
  },
];

const mockInterviewQuestions = [
  {
    question: "What is a closure in JavaScript?",
    role: "Frontend",
    lang: "JavaScript",
  },
  {
    question: "Explain the GIL in Python.",
    role: "Backend",
    lang: "Python",
  },
  {
    question: "How would you optimize app startup time in React Native?",
    role: "Mobile",
    lang: "React Native",
  },
  {
    question: "What are React hooks?",
    role: "Frontend",
    lang: "React",
  },
];

function getRandomQuestion() {
  return mockInterviewQuestions[
    Math.floor(Math.random() * mockInterviewQuestions.length)
  ];
}

const randomQuestion = getRandomQuestion();

const statCards = [
  {
    label: "Saved Jobs",
    value: mockStats.savedJobs,
    icon: <Bookmark className="w-6 h-6 text-primary" />,
    href: "/saved-jobs",
    color: "bg-blue-100 text-blue-700",
  },
  {
    label: "Applications",
    value: mockStats.applications,
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    href: "/applications",
    color: "bg-green-100 text-green-700",
  },
  {
    label: "Upcoming Interviews",
    value: mockStats.upcomingInterviews,
    icon: <Calendar className="w-6 h-6 text-primary" />,
    href: "/applications",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    label: "Interview Prep",
    value: `${mockStats.interviewPrep.completed}/${mockStats.interviewPrep.total}`,
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    href: "/interview-prep",
    color: "bg-purple-100 text-purple-700",
  },
  {
    label: "Profile Completion",
    value: `${mockStats.profileCompletion}%`,
    icon: <UserCheck className="w-6 h-6 text-primary" />,
    href: "/settings",
    color: "bg-pink-100 text-pink-700",
    progress: mockStats.profileCompletion,
  },
];

const quickActions = [
  {
    label: "Start Interview Prep",
    href: "/interview-prep",
    icon: <PlayCircle className="w-5 h-5" />,
    color: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    label: "View Saved Jobs",
    href: "/saved-jobs",
    icon: <Bookmark className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  },
  {
    label: "View Applications",
    href: "/applications",
    icon: <ClipboardList className="w-5 h-5" />,
    color: "bg-green-100 text-green-700 hover:bg-green-200",
  },
  {
    label: "Update Profile/Settings",
    href: "/settings",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-muted text-foreground hover:bg-accent",
  },
];

const applicationsData = [
  { week: "Week 1", applications: 2 },
  { week: "Week 2", applications: 4 },
  { week: "Week 3", applications: 1 },
  { week: "Week 4", applications: 3 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    const value = typeof payload[0].value === "number" ? payload[0].value : 0;
    return (
      <div className="rounded-lg bg-background/90 border border-border px-3 py-2 shadow text-sm">
        <div className="font-semibold text-primary">{label}</div>
        <div className="text-muted-foreground">
          Applications: <span className="font-bold">{value}</span>
        </div>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="flex items-center gap-4 bg-muted rounded-xl p-6 mb-8 shadow-sm hover:shadow-lg transition-shadow">
        <Avatar className="w-16 h-16">
          <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
          <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
            Welcome back, {mockUser.name}!
          </h1>
          <p className="text-muted-foreground text-base">
            Here&apos;s your dashboard overview.
          </p>
        </div>
      </div>
      {/* Quick Stats / Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group rounded-xl bg-white border border-muted p-5 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary/50 outline-none"
          >
            <div
              className={`rounded-lg p-3 ${card.color} flex items-center justify-center`}
            >
              {card.icon}
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                {card.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {card.label}
              </div>
              {card.progress !== undefined && (
                <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      {/* Applications Over Time Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Applications Over Time</h2>
        <div className="bg-muted rounded-xl p-5">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={applicationsData} barCategoryGap={32}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 6"
                stroke="#e5e7eb"
                vertical={false}
              />
              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                className="text-sm fill-muted-foreground"
              />
              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                className="text-sm fill-muted-foreground"
              />
              <Tooltip
                content={(props) => <CustomTooltip {...props} />}
                cursor={{ fill: "#6366f1", fillOpacity: 0.08 }}
              />
              <Bar
                dataKey="applications"
                fill="url(#barGradient)"
                radius={[8, 8, 4, 4]}
                isAnimationActive={true}
                animationDuration={900}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Recent Activity / Timeline */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Recent Activity
        </h2>
        <div className="bg-muted rounded-xl p-5 divide-y divide-border">
          {mockActivity.length === 0 ? (
            <div className="text-muted-foreground text-center py-8">
              No recent activity yet.
            </div>
          ) : (
            mockActivity.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex-shrink-0">{activity.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    {activity.description}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {activity.time}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Quick Actions / Shortcuts */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`flex items-center gap-3 rounded-xl px-5 py-4 font-medium shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-primary/50 outline-none group ${action.color}`}
            >
              <span className="flex-shrink-0">{action.icon}</span>
              <span className="text-base group-hover:underline">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* Recommended Jobs */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          <Link
            href="/recommended-jobs"
            className="text-primary text-sm font-medium hover:underline"
          >
            See all
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {mockRecommendedJobs.map((job) => (
            <JobCard key={job.jobId} {...job} />
          ))}
        </div>
      </div>
      {/* Interview Prep Spotlight */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-semibold">Interview Prep Spotlight</h2>
        </div>
        <div className="bg-muted rounded-xl p-5 flex flex-col gap-3">
          <div className="text-base font-medium">{randomQuestion.question}</div>
          <div className="text-xs text-muted-foreground">
            {randomQuestion.role} &middot; {randomQuestion.lang}
          </div>
          <div>
            <Link
              href="/interview-prep"
              className="inline-block mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
            >
              Continue Interview Prep
            </Link>
          </div>
        </div>
      </div>
      {/* ...rest of dashboard content... */}
    </div>
  );
};

export default Dashboard;

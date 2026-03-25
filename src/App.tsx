import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type IconProps = { size?: number; className?: string };

function IcHome({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 10.7 12 4l8 6.7V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
}
function IcBudget({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 18h16M6 15V9m6 6V6m6 9v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcBrain({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 4.5A3.5 3.5 0 0 0 5.5 8v.3a3 3 0 0 0-1.5 2.6 3 3 0 0 0 1.5 2.6v.8A3.7 3.7 0 0 0 9.2 18H10V4.5zm6 0A3.5 3.5 0 0 1 18.5 8v.3a3 3 0 0 1 1.5 2.6 3 3 0 0 1-1.5 2.6v.8a3.7 3.7 0 0 1-3.7 3.7H14V4.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>;
}
function IcGoal({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>;
}
function IcUser({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcSpark({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function IcArrow({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IcPlus({ size = 20, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="11" y="5" width="2" height="14" rx="1" fill="currentColor"/><rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor"/></svg>;
}
function IcClose({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcScan({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8 4H6a2 2 0 0 0-2 2v2m14 0V6a2 2 0 0 0-2-2h-2M8 20H6a2 2 0 0 1-2-2v-2m14 0v2a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcUpload({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 16V7m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcMic({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="9" y="4" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M6.5 11.5a5.5 5.5 0 1 0 11 0M12 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcWallet({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M16 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcCalendar({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M8 4v4M16 4v4M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcFood({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7 4v7M10 4v7M13 4v7M8 11v9m8-16v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcCar({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m5 14 1.8-4a2 2 0 0 1 1.9-1.2h6.6A2 2 0 0 1 17.2 10L19 14v4h-2v-1H7v1H5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><circle cx="8" cy="15" r="1.2" fill="currentColor"/><circle cx="16" cy="15" r="1.2" fill="currentColor"/></svg>;
}
function IcBag({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6 8h12l-1 11H7z" stroke="currentColor" strokeWidth="1.7"/><path d="M9 8V6a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcBolt({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M13 2 5 13h6l-1 9 9-13h-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function IcMoney({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcKeyboard({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="6.5" width="18" height="11" rx="3" stroke="currentColor" strokeWidth="1.7"/><path d="M7 11h.01M10 11h.01M13 11h.01M16 11h.01M8 14h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}

type Tab = 'home' | 'budget' | 'insights' | 'goals' | 'profile';
type TxCategory = 'Food' | 'Transport' | 'Shopping' | 'Bills' | 'Income';
type GoalPriority = 'High' | 'Medium' | 'Low';
type GoalCategory = 'Home' | 'Car' | 'Travel' | 'Debt' | 'Emergency' | 'Other';

type CategoryItem = {
  id: TxCategory;
  label: string;
  icon: ReactNode;
  bg: string;
  color: string;
};

type Transaction = {
  id: number;
  name: string;
  category: TxCategory;
  amount: number;
  time: string;
  date: string;
};

type Goal = {
  id: number;
  title: string;
  category: GoalCategory;
  target: number;
  saved: number;
  deadline: string;
  priority: GoalPriority;
  monthlyContribution: number;
  thisMonthSaved: number;
  primary?: boolean;
};

function initialTabFromLocation(): Tab {
  if (typeof window === 'undefined') return 'home';
  const searchTab = new URL(window.location.href).searchParams.get('tab');
  if (searchTab === 'home' || searchTab === 'budget' || searchTab === 'insights' || searchTab === 'goals' || searchTab === 'profile') {
    return searchTab;
  }
  return 'home';
}

function isoDateWithOffset(days: number) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function isoDateWithMonthOffset(months: number) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setMonth(date.getMonth() + months);
  return date.toISOString().slice(0, 10);
}

const expenseCategories: CategoryItem[] = [
  { id: 'Food', label: 'Food', icon: <IcFood size={20} />, bg: '#FEF3C7', color: '#B45309' },
  { id: 'Transport', label: 'Transport', icon: <IcCar size={20} />, bg: '#E0F2FE', color: '#0369A1' },
  { id: 'Shopping', label: 'Shopping', icon: <IcBag size={20} />, bg: '#EDE9FE', color: '#6D28D9' },
  { id: 'Bills', label: 'Bills', icon: <IcBolt size={20} />, bg: '#FFE4E6', color: '#BE123C' },
];

const incomeCategories: CategoryItem[] = [
  { id: 'Income', label: 'Salary', icon: <IcMoney size={20} />, bg: '#D1FAE5', color: '#047857' },
  { id: 'Income', label: 'Freelance', icon: <IcWallet size={20} />, bg: '#DBEAFE', color: '#1D4ED8' },
  { id: 'Income', label: 'Gift', icon: <IcSpark size={20} />, bg: '#FEF3C7', color: '#B45309' },
  { id: 'Income', label: 'Invest', icon: <IcGoal size={20} />, bg: '#E0F2FE', color: '#075985' },
];

const seedTransactions: Transaction[] = [
  { id: 1, name: 'Whole Foods Market', category: 'Food', amount: -85.3, time: '2:45 PM', date: isoDateWithOffset(0) },
  { id: 2, name: 'Uber Ride', category: 'Transport', amount: -18.5, time: '11:20 AM', date: isoDateWithOffset(0) },
  { id: 3, name: 'Amazon Purchase', category: 'Shopping', amount: -124.99, time: '6:15 PM', date: isoDateWithOffset(-1) },
  { id: 4, name: 'Electric Bill', category: 'Bills', amount: -142, time: '12:00 PM', date: isoDateWithOffset(-1) },
  { id: 5, name: 'Freelance Income', category: 'Income', amount: 850, time: '9:00 AM', date: isoDateWithOffset(-2) },
];

const seedGoals: Goal[] = [
  { id: 101, title: 'Own Home', category: 'Home', target: 15000, saved: 12000, deadline: isoDateWithMonthOffset(44), priority: 'High', monthlyContribution: 193, thisMonthSaved: 193, primary: true },
  { id: 102, title: 'Car Purchase', category: 'Car', target: 3000, saved: 1350, deadline: isoDateWithMonthOffset(15), priority: 'High', monthlyContribution: 110, thisMonthSaved: 110 },
  { id: 103, title: 'Japan Travel', category: 'Travel', target: 2500, saved: 900, deadline: isoDateWithMonthOffset(8), priority: 'Medium', monthlyContribution: 180, thisMonthSaved: 180 },
  { id: 104, title: 'Pay Off Credit Card', category: 'Debt', target: 2000, saved: 300, deadline: isoDateWithMonthOffset(6), priority: 'High', monthlyContribution: 260, thisMonthSaved: 260 },
  { id: 105, title: 'Emergency Fund', category: 'Emergency', target: 4000, saved: 700, deadline: isoDateWithMonthOffset(18), priority: 'Low', monthlyContribution: 140, thisMonthSaved: 140 },
];

function statCurrency(value: number) {
  return `$${Math.abs(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function categoryMetaById(id: TxCategory): CategoryItem {
  if (id === 'Income') return incomeCategories[0];
  return expenseCategories.find((c) => c.id === id) ?? expenseCategories[0];
}

function transactionDayLabel(dateString: string) {
  const today = isoDateWithOffset(0);
  const yesterday = isoDateWithOffset(-1);

  if (dateString === today) return 'Today';
  if (dateString === yesterday) return 'Yesterday';

  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(date);
}

function monthsUntil(dateString: string) {
  const today = new Date();
  const deadline = new Date(`${dateString}T12:00:00`);
  const diffMs = deadline.getTime() - today.getTime();
  const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  return Math.max(1, Math.ceil(diffDays / 30));
}

function goalProgress(goal: Goal) {
  return Math.min(100, Math.round((goal.saved / goal.target) * 100));
}

function goalRemaining(goal: Goal) {
  return Math.max(0, goal.target - goal.saved);
}

function priorityClass(priority: GoalPriority) {
  if (priority === 'High') return 'priority-chip priority-chip--high';
  if (priority === 'Medium') return 'priority-chip priority-chip--medium';
  return 'priority-chip priority-chip--low';
}

function priorityRank(priority: GoalPriority) {
  if (priority === 'High') return 3;
  if (priority === 'Medium') return 2;
  return 1;
}

function goalCategoryMeta(category: GoalCategory) {
  if (category === 'Home') return { icon: <IcHome size={20} />, bg: '#DBEAFE', color: '#1D4ED8' };
  if (category === 'Car') return { icon: <IcCar size={20} />, bg: '#E0F2FE', color: '#0369A1' };
  if (category === 'Travel') return { icon: <IcSpark size={20} />, bg: '#EDE9FE', color: '#6D28D9' };
  if (category === 'Debt') return { icon: <IcBolt size={20} />, bg: '#FFE4E6', color: '#BE123C' };
  if (category === 'Emergency') return { icon: <IcWallet size={20} />, bg: '#D1FAE5', color: '#047857' };
  return { icon: <IcGoal size={20} />, bg: '#F1F5F9', color: '#475569' };
}

function goalTheme(goal: Goal) {
  const progress = goalProgress(goal);
  if (goal.category === 'Home') {
    return {
      accent: progress >= 70 ? '#2563EB' : '#60A5FA',
      accentSoft: 'rgba(191, 219, 254, 0.42)',
      accentBg: 'rgba(239, 246, 255, 0.94)',
    };
  }
  if (goal.category === 'Car') {
    return {
      accent: progress >= 70 ? '#0284C7' : '#38BDF8',
      accentSoft: 'rgba(186, 230, 253, 0.42)',
      accentBg: 'rgba(240, 249, 255, 0.94)',
    };
  }
  if (goal.category === 'Travel') {
    return {
      accent: progress >= 70 ? '#7C3AED' : '#A78BFA',
      accentSoft: 'rgba(221, 214, 254, 0.42)',
      accentBg: 'rgba(245, 243, 255, 0.94)',
    };
  }
  if (goal.category === 'Debt') {
    return {
      accent: progress >= 70 ? '#E11D48' : '#FB7185',
      accentSoft: 'rgba(253, 164, 175, 0.34)',
      accentBg: 'rgba(255, 241, 242, 0.95)',
    };
  }
  if (goal.category === 'Emergency') {
    return {
      accent: progress >= 70 ? '#059669' : '#34D399',
      accentSoft: 'rgba(167, 243, 208, 0.36)',
      accentBg: 'rgba(236, 253, 245, 0.94)',
    };
  }
  return {
    accent: progress >= 70 ? '#475569' : '#94A3B8',
    accentSoft: 'rgba(226, 232, 240, 0.5)',
    accentBg: 'rgba(248, 250, 252, 0.95)',
  };
}

function goalMomentumLabel(goal: Goal) {
  const progress = goalProgress(goal);
  if (progress >= 100) return 'Completed';
  if (progress >= 75) return 'Closing in';
  if (progress >= 40) return 'In motion';
  return 'Getting started';
}

function goalProjectedMonths(goal: Goal) {
  return Math.max(1, Math.ceil(goalRemaining(goal) / Math.max(goal.monthlyContribution, 1)));
}

function goalProjectedDateLabel(goal: Goal) {
  const projected = new Date();
  projected.setMonth(projected.getMonth() + goalProjectedMonths(goal));
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(projected);
}

function goalNextMilestone(goal: Goal) {
  const progress = goalProgress(goal);
  if (progress >= 100) return null;
  const nextStep = Math.min(100, Math.ceil((progress + 1) / 10) * 10);
  const amount = Math.ceil((goal.target * nextStep) / 100);
  return {
    percent: nextStep,
    amount,
    remaining: Math.max(0, amount - goal.saved),
  };
}

function goalIllustrationShape(category: GoalCategory) {
  if (category === 'Home') {
    return 'M100 16 30 70v78c0 14 10 24 24 24h30v-48c0-8 6-14 14-14h4c8 0 14 6 14 14v48h30c14 0 24-10 24-24V70L100 16Z';
  }
  if (category === 'Car') {
    return 'M56 86c4-12 14-20 26-20h36c12 0 22 8 26 20l8 24h6c10 0 18 8 18 18v18h-20v-10H44v10H24v-18c0-10 8-18 18-18h6l8-24Z';
  }
  if (category === 'Travel') {
    return 'M66 36h68c16 0 28 12 28 28v72c0 16-12 28-28 28H66c-16 0-28-12-28-28V64c0-16 12-28 28-28ZM84 36v-8c0-8 6-14 14-14h4c8 0 14 6 14 14v8';
  }
  if (category === 'Debt') {
    return 'M38 54c0-14 10-24 24-24h76c14 0 24 10 24 24v72c0 14-10 24-24 24H62c-14 0-24-10-24-24V54Zm18 22h88v16H56V76Zm0 30h54v14H56v-14Z';
  }
  if (category === 'Emergency') {
    return 'M100 18 154 38v44c0 42-22 70-54 88-32-18-54-46-54-88V38l54-20Z';
  }
  return 'M54 28h92c18 0 30 12 30 30v64c0 18-12 30-30 30H54c-18 0-30-12-30-30V58c0-18 12-30 30-30Z';
}

function GoalProgressIllustration({ goal }: { goal: Goal }) {
  const progress = goalProgress(goal);
  const remaining = Math.max(0, 100 - progress);
  const fillHeight = 146 * (progress / 100);
  const fillY = 170 - fillHeight;
  const waterlineTop = Math.max(18, Math.min(82, (fillY / 180) * 100));
  const clipId = `goal-shape-${goal.id}`;
  const gradientId = `goal-fill-${goal.id}`;
  const theme = goalTheme(goal);
  const accent = theme.accent;

  return (
    <div
      className="goal-visual"
      style={{
        ['--goal-accent' as string]: accent,
        ['--goal-accent-soft' as string]: theme.accentSoft,
        ['--goal-waterline' as string]: `${waterlineTop}%`,
      }}
    >
      <svg viewBox="0 0 200 180" aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <path d={goalIllustrationShape(goal.category)} />
          </clipPath>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        <path
          d={goalIllustrationShape(goal.category)}
          fill="rgba(255,255,255,0.96)"
          stroke="rgba(148,163,184,0.36)"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="18" y={fillY} width="164" height={fillHeight} fill={`url(#${gradientId})`} opacity="0.96" />
          <rect x="18" y={fillY - 2} width="164" height="4" fill="rgba(255,255,255,0.52)" />
        </g>
      </svg>
      <span className="goal-visual__badge goal-visual__badge--light">{remaining}%</span>
      <span className="goal-visual__badge goal-visual__badge--accent">{progress}%</span>
    </div>
  );
}

function LiquidCard({ className = '', style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return <section className={`card ${className}`} style={style}>{children}</section>;
}

export default function App() {
  const [tab, setTab] = useState<Tab>(() => initialTabFromLocation());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null);
  const [aiStep, setAiStep] = useState<'methods' | 'form'>('methods');
  const [transactions, setTransactions] = useState(seedTransactions);
  const [goals, setGoals] = useState(seedGoals);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('0');
  const [category, setCategory] = useState<TxCategory>('Food');
  const [entryType, setEntryType] = useState<'expense' | 'income'>('expense');
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('5000');
  const [goalSaved, setGoalSaved] = useState('0');
  const [goalDeadline, setGoalDeadline] = useState(isoDateWithMonthOffset(12));
  const [goalPriority, setGoalPriority] = useState<GoalPriority>('Medium');
  const [goalCategory, setGoalCategory] = useState<GoalCategory>('Other');
  const [goalMonthly, setGoalMonthly] = useState('');

  const totalSpent = useMemo(
    () => transactions.filter((t) => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0),
    [transactions],
  );
  const totalIncome = useMemo(
    () => transactions.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0),
    [transactions],
  );
  const totalGoalTarget = useMemo(() => goals.reduce((sum, goal) => sum + goal.target, 0), [goals]);
  const groupedTransactions = useMemo(() => {
    const groups: Array<{ label: string; items: Transaction[] }> = [];
    const seen = new Map<string, Transaction[]>();

    for (const transaction of transactions) {
      const key = transaction.date;
      if (!seen.has(key)) seen.set(key, []);
      seen.get(key)?.push(transaction);
    }

    for (const [date, items] of seen.entries()) {
      groups.push({ label: transactionDayLabel(date), items });
    }

    return groups;
  }, [transactions]);
  const sortedGoals = useMemo(
    () =>
      [...goals].sort((a, b) => {
        if (a.primary && !b.primary) return -1;
        if (!a.primary && b.primary) return 1;
        if (priorityRank(a.priority) !== priorityRank(b.priority)) {
          return priorityRank(b.priority) - priorityRank(a.priority);
        }
        return goalRemaining(b) - goalRemaining(a);
      }),
    [goals],
  );
  const primaryGoal = useMemo(() => sortedGoals.find((goal) => goal.primary) ?? sortedGoals[0], [sortedGoals]);
  const activeGoalsCount = useMemo(() => goals.filter((goal) => goal.saved < goal.target).length, [goals]);
  const totalGoalSaved = useMemo(() => goals.reduce((sum, goal) => sum + goal.saved, 0), [goals]);
  const thisMonthGoalsAdded = useMemo(() => goals.reduce((sum, goal) => sum + goal.thisMonthSaved, 0), [goals]);
  const totalGoalProgress = useMemo(
    () => (totalGoalTarget > 0 ? Math.min(100, Math.round((totalGoalSaved / totalGoalTarget) * 100)) : 0),
    [totalGoalSaved, totalGoalTarget],
  );
  const selectedGoal = useMemo(
    () => goals.find((goal) => goal.id === selectedGoalId) ?? null,
    [goals, selectedGoalId],
  );

  const addTransaction = () => {
    const parsed = Number(amount);
    if (!name || Number.isNaN(parsed) || parsed <= 0) return;

    const finalCategory = entryType === 'income' ? 'Income' : category;
    setTransactions((prev) => [
      {
        id: Date.now(),
        name,
        amount: entryType === 'income' ? parsed : -parsed,
        category: finalCategory,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: isoDateWithOffset(0),
      },
      ...prev,
    ]);

    setName('');
    setAmount('0');
    setCategory('Food');
    setEntryType('expense');
    setShowAddModal(false);
    setAiStep('methods');
  };

  const cyclePriority = (goalId: number) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id !== goalId) return goal;
        const nextPriority: Record<GoalPriority, GoalPriority> = { Low: 'Medium', Medium: 'High', High: 'Low' };
        return { ...goal, priority: nextPriority[goal.priority] };
      }),
    );
  };

  const setPrimaryGoal = (goalId: number) => {
    setGoals((prev) => prev.map((goal) => ({ ...goal, primary: goal.id === goalId })));
  };

  const addFundsToGoal = (goalId: number, amountToAdd = 500) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              saved: Math.min(goal.target, goal.saved + amountToAdd),
              thisMonthSaved: goal.thisMonthSaved + amountToAdd,
            }
          : goal,
      ),
    );
  };

  const createGoal = () => {
    const parsedTarget = Number(goalTarget);
    const parsedSaved = Number(goalSaved);
    const parsedMonthly = Number(goalMonthly);

    if (!goalTitle || Number.isNaN(parsedTarget) || parsedTarget <= 0 || Number.isNaN(parsedSaved) || parsedSaved < 0) return;

    const draftGoal: Goal = {
      id: Date.now(),
      title: goalTitle,
      category: goalCategory,
      target: parsedTarget,
      saved: parsedSaved,
      deadline: goalDeadline,
      priority: goalPriority,
      monthlyContribution:
        !Number.isNaN(parsedMonthly) && parsedMonthly > 0
          ? parsedMonthly
          : Math.ceil(Math.max(0, parsedTarget - parsedSaved) / monthsUntil(goalDeadline)),
      thisMonthSaved: 0,
      primary: goals.length === 0,
    };

    setGoals((prev) => [...prev, draftGoal]);
    setGoalTitle('');
    setGoalTarget('5000');
    setGoalSaved('0');
    setGoalDeadline(isoDateWithMonthOffset(12));
    setGoalPriority('Medium');
    setGoalCategory('Other');
    setGoalMonthly('');
    setShowGoalModal(false);
  };

  const Screen = () => {
    if (tab === 'home') {
      return (
        <div className="stack">
          <LiquidCard className="hero-card">
            <div className="row between">
              <div>
                <p className="eyebrow">Total Balance</p>
                <h1>${(totalIncome - totalSpent + 3450).toLocaleString()}</h1>
              </div>
              <div className="liquid-icon"><IcWallet size={17} /></div>
            </div>
            <div className="grid two mt16">
              <div className="metric-tile">
                <p className="muted">Income</p>
                <strong className="ok">+{statCurrency(totalIncome)}</strong>
              </div>
              <div className="metric-tile">
                <p className="muted">Expenses</p>
                <strong className="bad">-{statCurrency(totalSpent)}</strong>
              </div>
            </div>
          </LiquidCard>

          <LiquidCard>
            <div className="row between">
              <h3>Primary Goal</h3>
              <strong>65%</strong>
            </div>
            <p className="muted">Car Purchase</p>
            <div className="bar mt12"><span style={{ width: '65%' }} /></div>
          </LiquidCard>

          <LiquidCard>
            <div className="row between">
              <h3>Recent Transactions</h3>
              <button className="ghost" onClick={() => setTab('budget')}>View all</button>
            </div>
            <div className="stack sm mt12">
              {transactions.slice(0, 3).map((t) => {
                const meta = categoryMetaById(t.category);
                return (
                  <div key={t.id} className="tx">
                    <div className="tx-icon" style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.icon}</div>
                    <div className="grow">
                      <p>{t.name}</p>
                      <small>{t.category} • {t.time}</small>
                    </div>
                    <strong className={t.amount > 0 ? 'ok' : ''}>
                      {t.amount > 0 ? '+' : '-'}{statCurrency(t.amount)}
                    </strong>
                  </div>
                );
              })}
            </div>
          </LiquidCard>
        </div>
      );
    }

    if (tab === 'budget') {
      return (
        <div className="stack">
          <LiquidCard className="summary-card">
            <div className="row between">
              <div>
                <p className="eyebrow summary-eyebrow">Budget Overview</p>
                <h3>March Summary</h3>
              </div>
              <div className="summary-chip">March 2026</div>
            </div>
            <div className="grid two mt12">
              <div className="metric-tile light summary-metric summary-metric--primary">
                <p className="muted">Total Spent</p>
                <strong className="bad">-{statCurrency(totalSpent)}</strong>
                <small>Expenses this month</small>
              </div>
              <div className="metric-tile light summary-metric">
                <p className="muted">Transactions</p>
                <strong>{transactions.length}</strong>
                <small>Entries recorded</small>
              </div>
            </div>
          </LiquidCard>

          <LiquidCard>
            <h3>Transactions</h3>
            <div className="tx-groups mt12">
              {groupedTransactions.map((group) => (
                <div key={group.label} className="tx-group">
                  <div className="tx-group__header">{group.label}</div>
                  <div className="stack sm">
                    {group.items.map((t) => {
                      const meta = categoryMetaById(t.category);
                      return (
                        <div key={t.id} className="tx">
                          <div className="tx-icon" style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.icon}</div>
                          <div className="grow">
                            <p>{t.name}</p>
                            <small>{t.time} • {t.category}</small>
                          </div>
                          <strong className={t.amount > 0 ? 'ok' : ''}>
                            {t.amount > 0 ? '+' : '-'}{statCurrency(t.amount)}
                          </strong>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </LiquidCard>
        </div>
      );
    }

    if (tab === 'insights') {
      return (
        <div className="stack">
          <LiquidCard className="hero-card">
            <div className="row between">
              <div>
                <p className="eyebrow">Financial Health Score</p>
                <h1>8.4 / 10</h1>
              </div>
              <div className="liquid-icon"><IcGoal size={17} /></div>
            </div>
          </LiquidCard>

          {[
            { title: 'High Food Spending', desc: 'You spent 23% more on food this month.' },
            { title: 'Savings Goal Reached', desc: 'You saved $500 this month as planned.' },
            { title: 'Smart Saving Tip', desc: 'Cancel unused subscriptions to save $45/month.' },
          ].map((i, idx) => (
            <LiquidCard key={i.title}>
              <div className="row gap">
                <div className="tx-icon" style={{ backgroundColor: ['#FFE4E6', '#D1FAE5', '#E0F2FE'][idx], color: ['#BE123C', '#047857', '#075985'][idx] }}>
                  {idx === 0 ? <IcBudget size={13} /> : idx === 1 ? <IcGoal size={13} /> : <IcSpark size={13} />}
                </div>
                <div className="grow">
                  <p>{i.title}</p>
                  <small>{i.desc}</small>
                </div>
                <IcArrow size={15} />
              </div>
            </LiquidCard>
          ))}
        </div>
      );
    }

    if (tab === 'goals') {
      return (
        <div className="stack goals-pocket-layout">
          <LiquidCard className="goals-pocket-hero">
            <div className="row between">
              <div>
                <p className="eyebrow goals-pocket-eyebrow">Monthly Savings</p>
                <h3>{primaryGoal?.title ?? 'Goals'}</h3>
                <small>{activeGoalsCount} active pockets</small>
              </div>
              <button className="summary-chip goals-pocket-chip" onClick={() => setShowGoalModal(true)}>New Goal</button>
            </div>
            <div className="goals-pocket-balance">{statCurrency(totalGoalSaved)}</div>
            <div className="goals-pocket-progress">
              <div className="row between">
                <small>This month +{statCurrency(thisMonthGoalsAdded)}</small>
                <small>{totalGoalProgress}%</small>
              </div>
              <div className="bar goal-pocket-bar mt8"><span style={{ width: `${totalGoalProgress}%` }} /></div>
              <div className="row between mt8">
                <small>Saved {statCurrency(totalGoalSaved)}</small>
                <small>Goals {statCurrency(totalGoalTarget)}</small>
              </div>
            </div>
          </LiquidCard>

          {primaryGoal && (
            <LiquidCard
              className="goal-focus-card"
              style={{
                ['--goal-accent' as string]: goalTheme(primaryGoal).accent,
              }}
            >
              <div className="row between">
                <div className="row gap">
                  <div
                    className="goal-icon"
                    style={{
                      backgroundColor: goalCategoryMeta(primaryGoal.category).bg,
                      color: goalCategoryMeta(primaryGoal.category).color,
                    }}
                  >
                    {goalCategoryMeta(primaryGoal.category).icon}
                  </div>
                  <div>
                    <h3>{primaryGoal.title}</h3>
                    <small className="goal-focus-story">
                      +{statCurrency(primaryGoal.thisMonthSaved)} this month. {statCurrency(goalRemaining(primaryGoal))} left to finish.
                    </small>
                  </div>
                </div>
                <div className="goal-badges">
                  <button className={priorityClass(primaryGoal.priority)} onClick={() => cyclePriority(primaryGoal.id)}>{primaryGoal.priority}</button>
                  <span className="goal-pocket-label">{goalMomentumLabel(primaryGoal)}</span>
                </div>
              </div>

              <GoalProgressIllustration goal={primaryGoal} />

              <div className="goal-focus-progress-label">Progress</div>

              <div className="goal-focus-stats">
                <div>
                  <small>Saved</small>
                  <p>{statCurrency(primaryGoal.saved)}</p>
                </div>
                <div>
                  <small>Target</small>
                  <p>{statCurrency(primaryGoal.target)}</p>
                </div>
                <div>
                  <small>Remaining</small>
                  <p>{statCurrency(goalRemaining(primaryGoal))}</p>
                </div>
              </div>

              <div className="goal-card__footer mt12">
                <small>Projected finish {goalProjectedDateLabel(primaryGoal)}</small>
                <div className="goal-inline-actions">
                  <button className="goal-mini-action goal-mini-action--filled" onClick={() => addFundsToGoal(primaryGoal.id)}>Add $500</button>
                  <button className="goal-mini-action" onClick={() => setSelectedGoalId(primaryGoal.id)}>Details</button>
                </div>
              </div>
            </LiquidCard>
          )}

          <div className="section-head row between">
            <div>
              <h3>My Pockets</h3>
              <small>Tap a pocket to see details</small>
            </div>
            <small>{sortedGoals.length} total</small>
          </div>

          <div className="goal-pocket-grid">
            {sortedGoals.map((goal) => {
              const meta = goalCategoryMeta(goal.category);
              return (
                <button
                  key={goal.id}
                  className="goal-pocket-card"
                  onClick={() => setSelectedGoalId(goal.id)}
                  style={{
                    ['--goal-accent' as string]: goalTheme(goal).accent,
                    ['--goal-accent-bg' as string]: goalTheme(goal).accentBg,
                  }}
                >
                  <div className="row between">
                    <div className="goal-pocket-icon" style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.icon}</div>
                    {goal.primary ? <span className="goal-pocket-label">Primary</span> : <span className={priorityClass(goal.priority)}>{goal.priority}</span>}
                  </div>
                  <div className="goal-pocket-copy">
                    <p>{goal.title}</p>
                    <strong>{statCurrency(goal.saved)}</strong>
                  </div>
                  <div className="bar goal-pocket-progress-bar mt8"><span style={{ width: `${goalProgress(goal)}%` }} /></div>
                  <div className="row between mt8">
                    <small>{goalProgress(goal)}% funded</small>
                    <small>{goal.saved >= goal.target ? 'Completed' : `+${statCurrency(goal.thisMonthSaved)} month`}</small>
                  </div>
                </button>
              );
            })}

            <button className="goal-pocket-create" onClick={() => setShowGoalModal(true)}>
              <span className="goal-pocket-create__plus"><IcPlus size={18} /></span>
              <span>Create pocket</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="stack">
        <LiquidCard>
          <div className="row gap">
            <div className="avatar"><IcUser size={16} /></div>
            <div>
              <h3>Alex Morgan</h3>
              <small>Liquid Minimal Edition</small>
            </div>
          </div>
        </LiquidCard>
      </div>
    );
  };

  const currentCategoryList = entryType === 'income' ? incomeCategories : expenseCategories;
  const headerTitle =
    tab === 'home' ? 'Budget Tracker' :
    tab === 'budget' ? 'Budget' :
    tab === 'insights' ? 'Insights' :
    tab === 'goals' ? 'Goals' :
    'Profile';
  const headerSubtitle =
    tab === 'home' ? 'Qalta-inspired manual flow' :
    tab === 'budget' ? 'Track and review monthly spending' :
    tab === 'insights' ? 'Signals and financial nudges' :
    tab === 'goals' ? 'Plan, prioritize, and fund your next milestones' :
    'Manage your account and settings';

  return (
    <div className="phone-shell">
      <div className="content">
        <div className={`header ${(tab === 'home' || tab === 'goals') ? 'header-home' : ''}`}>
          <div>
            <h2>{headerTitle}</h2>
            <small>{headerSubtitle}</small>
          </div>
          {tab === 'home' && (
            <div className="currency-chip">
              <IcWallet size={14} />
              <span>KZT</span>
            </div>
          )}
          {tab === 'goals' && (
            <div className="currency-chip">
              <span>{activeGoalsCount} active</span>
            </div>
          )}
        </div>
        <Screen />
      </div>

      <div className="tab-wrap">
        <nav className="tabbar">
          {[
            { id: 'home', icon: <IcHome size={21} />, label: 'Home' },
            { id: 'budget', icon: <IcBudget size={21} />, label: 'Budget' },
            { id: 'insights', icon: <IcBrain size={21} />, label: 'Insights' },
            { id: 'goals', icon: <IcGoal size={21} />, label: 'Goals' },
            { id: 'profile', icon: <IcUser size={21} />, label: 'Profile' },
          ].map((item) => (
            <button key={item.id} onClick={() => setTab(item.id as Tab)} className={`tab ${tab === item.id ? 'active' : ''}`}>
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="add-pill" onClick={() => (tab === 'goals' ? setShowGoalModal(true) : setShowAddModal(true))} aria-label="Add">
          <IcPlus size={20} />
        </button>
      </div>

      <AnimatePresence>
        {showGoalModal && (
          <>
            <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowGoalModal(false)} />
            <motion.div className="modal" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}>
              <div className="handle" />
              <div className="row between">
                <div>
                  <h3>New Goal</h3>
                  <small>Create and prioritize a financial target</small>
                </div>
                <button className="ghost icon-btn" onClick={() => setShowGoalModal(false)}><IcClose size={17} /></button>
              </div>
              <div className="stack sm mt12">
                <input value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} placeholder="Goal name" />
                <div className="grid two">
                  <input value={goalTarget} onChange={(e) => setGoalTarget(e.target.value)} placeholder="Target amount" />
                  <input value={goalSaved} onChange={(e) => setGoalSaved(e.target.value)} placeholder="Already saved" />
                </div>
                <input type="date" value={goalDeadline} onChange={(e) => setGoalDeadline(e.target.value)} />
                <div className="grid two">
                  <select value={goalCategory} onChange={(e) => setGoalCategory(e.target.value as GoalCategory)}>
                    {(['Home', 'Car', 'Travel', 'Debt', 'Emergency', 'Other'] as GoalCategory[]).map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  <select value={goalPriority} onChange={(e) => setGoalPriority(e.target.value as GoalPriority)}>
                    {(['High', 'Medium', 'Low'] as GoalPriority[]).map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <input value={goalMonthly} onChange={(e) => setGoalMonthly(e.target.value)} placeholder="Monthly contribution (optional)" />
                <button className="save-btn" onClick={createGoal}>Create Goal</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedGoal && (
          <>
            <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedGoalId(null)} />
            <motion.div className="modal goal-detail-modal" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}>
              <div className="handle" />
              <div className="row between">
                <div>
                  <h3>Pocket Details</h3>
                  <small>{selectedGoal.category} • {goalMomentumLabel(selectedGoal)}</small>
                </div>
                <button className="ghost icon-btn" onClick={() => setSelectedGoalId(null)}><IcClose size={17} /></button>
              </div>

              <div className="goal-detail-head mt12">
                <div
                  className="goal-detail-icon"
                  style={{
                    backgroundColor: goalCategoryMeta(selectedGoal.category).bg,
                    color: goalCategoryMeta(selectedGoal.category).color,
                  }}
                >
                  {goalCategoryMeta(selectedGoal.category).icon}
                </div>
                <p className="goal-detail-title">{selectedGoal.title}</p>
                <small>{selectedGoal.category} pocket</small>
                <div className="goal-detail-amount">{statCurrency(selectedGoal.saved)}</div>
                <div className="row between mt8">
                  <small>Goal {statCurrency(selectedGoal.target)}</small>
                  <small>{goalProgress(selectedGoal)}%</small>
                </div>
                <div
                  className="bar goal-pocket-progress-bar mt8"
                  style={{
                    ['--goal-accent' as string]: goalTheme(selectedGoal).accent,
                  }}
                >
                  <span style={{ width: `${goalProgress(selectedGoal)}%` }} />
                </div>
              </div>

              <div className="goal-detail-actions mt16">
                <button className="goal-detail-action" onClick={() => addFundsToGoal(selectedGoal.id)}>
                  <span className="goal-detail-action__icon"><IcPlus size={16} /></span>
                  <span>Add money</span>
                </button>
                <button className="goal-detail-action" onClick={() => setPrimaryGoal(selectedGoal.id)}>
                  <span className="goal-detail-action__icon"><IcGoal size={16} /></span>
                  <span>Make primary</span>
                </button>
                <button className="goal-detail-action" onClick={() => cyclePriority(selectedGoal.id)}>
                  <span className="goal-detail-action__icon"><IcArrow size={16} /></span>
                  <span>Priority</span>
                </button>
              </div>

              <div className="goal-detail-list mt16">
                <div className="goal-detail-item">
                  <div>
                    <p>Monthly transfer</p>
                    <small>Added this month</small>
                  </div>
                  <strong className="ok">+{statCurrency(selectedGoal.thisMonthSaved)}</strong>
                </div>
                <div className="goal-detail-item">
                  <div>
                    <p>Next milestone</p>
                    <small>{goalNextMilestone(selectedGoal) ? `${goalNextMilestone(selectedGoal)!.percent}% funded` : 'Completed'}</small>
                  </div>
                  <strong>{goalNextMilestone(selectedGoal) ? statCurrency(goalNextMilestone(selectedGoal)!.remaining) : statCurrency(0)}</strong>
                </div>
                <div className="goal-detail-item">
                  <div>
                    <p>Projected finish</p>
                    <small>At current pace</small>
                  </div>
                  <strong>{goalProjectedDateLabel(selectedGoal)}</strong>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddModal(false)} />
            <motion.div className="modal" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}>
              <div className="handle" />
              <div className="row between">
                <div>
                  <h3>Add Transaction</h3>
                  <small>Use AI or fill manually</small>
                </div>
                <button className="ghost icon-btn" onClick={() => setShowAddModal(false)}><IcClose size={17} /></button>
              </div>

              {aiStep === 'methods' ? (
                <div className="stack sm mt12">
                  <button className="method liquid-method method-scan" onClick={() => { setAiStep('form'); setName('Grocery Store'); setAmount('45.5'); setCategory('Food'); setEntryType('expense'); }}>
                    <span className="method-main">
                      <span className="method-ico"><IcScan size={17} /></span>
                      <span className="method-copy">
                        <b>Scan QR / Check</b>
                        <small>Auto detect amount and category</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">Instant</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                  <button className="method liquid-method method-upload" onClick={() => { setAiStep('form'); setName('Restaurant Bill'); setAmount('67.8'); setCategory('Food'); setEntryType('expense'); }}>
                    <span className="method-main">
                      <span className="method-ico"><IcUpload size={17} /></span>
                      <span className="method-copy">
                        <b>Upload screenshot</b>
                        <small>Extract expense from image</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">Photo</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                  <button className="method liquid-method method-voice" onClick={() => { setAiStep('form'); setName('Uber ride'); setAmount('12.3'); setCategory('Transport'); setEntryType('expense'); }}>
                    <span className="method-main">
                      <span className="method-ico"><IcMic size={17} /></span>
                      <span className="method-copy">
                        <b>Voice input</b>
                        <small>Convert speech to transaction</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">Speak</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                  <button className="method liquid-method method-manual" onClick={() => setAiStep('form')}>
                    <span className="method-main">
                      <span className="method-ico"><IcKeyboard size={17} /></span>
                      <span className="method-copy">
                        <b>Enter manually</b>
                        <small>Type amount and category yourself</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">Manual</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                </div>
              ) : (
                <div className="stack sm mt12">
                  <div className="income-expense-toggle">
                    <button type="button" className={entryType === 'income' ? 'ie-btn active income' : 'ie-btn income'} onClick={() => { setEntryType('income'); setCategory('Income'); }}>
                      ↙ Доход
                    </button>
                    <button type="button" className={entryType === 'expense' ? 'ie-btn active expense' : 'ie-btn expense'} onClick={() => { setEntryType('expense'); setCategory('Food'); }}>
                      ↗ Расход
                    </button>
                  </div>

                  <div className="amount-view">{amount || '0'} KZT</div>

                  <div className="quick-row">
                    <div className="quick-pill"><IcWallet size={13} /> Wallet</div>
                    <div className="quick-pill"><IcCalendar size={13} /> Today</div>
                    <div className="quick-pill">KZT</div>
                  </div>

                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Note" />

                  <div className="category-strip">
                    {currentCategoryList.map((c, i) => {
                      const active = (entryType === 'income' && i === 0) || (entryType === 'expense' && category === c.id);
                      return (
                        <button
                          key={`${c.label}-${i}`}
                          type="button"
                          className={active ? 'cat-box active' : 'cat-box'}
                          onClick={() => setCategory(c.id)}
                          style={{ backgroundColor: c.bg, color: c.color }}
                        >
                          <span className="cat-ico">{c.icon}</span>
                          <span>{c.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <button className="save-btn" onClick={addTransaction}>Сохранить</button>
                  <button className="ghost wide" onClick={() => setAiStep('methods')}>Back to AI options</button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

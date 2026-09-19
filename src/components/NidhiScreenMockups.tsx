import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Target, 
  Sliders, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Sparkles,
  ChevronRight,
  Bell,
  PiggyBank,
  Coffee,
  Laptop,
  ShoppingBag,
  Layers
} from 'lucide-react';

interface ScreenMockupProps {
  screenId: 'safe-to-spend' | 'dashboard' | 'transactions' | 'savings-goals' | 'settings' | 'login';
  className?: string;
  isInteractive?: boolean;
}

export const NidhiScreenMockup: React.FC<ScreenMockupProps> = ({ screenId, className = '' }) => {
  switch (screenId) {
    case 'safe-to-spend':
      return (
        <div className={`w-full bg-[#080a0a] text-neutral-200 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden ${className}`}>
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Wallet className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">Safe to Spend Overview</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>78% Confidence</span>
            </div>
          </div>

          {/* Main Safe to Spend Metric */}
          <div className="text-center py-5 px-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 mb-5 relative">
            <span className="text-xs font-medium uppercase tracking-widest text-emerald-400/90 mb-1 block">
              Actual Safe Spending Power
            </span>
            <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white my-1 font-editorial italic">
              ₹12,450
            </div>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto mt-1">
              Guaranteed free to spend without encroaching on goals or bills.
            </p>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center space-x-4 text-xs">
              <div className="text-neutral-400">
                Safe Daily Spend: <span className="text-emerald-300 font-semibold">₹415/day</span>
              </div>
              <div className="text-neutral-500">•</div>
              <div className="text-neutral-400">
                Cycle: <span className="text-neutral-300">22 days left</span>
              </div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-neutral-400 mb-1 flex items-center justify-between">
                <span>Available Balance</span>
                <Wallet className="w-3.5 h-3.5 text-neutral-400" />
              </div>
              <div className="text-base font-semibold text-white">₹28,500</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">Total unallocated bank funds</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-neutral-400 mb-1 flex items-center justify-between">
                <span>Planned Spending</span>
                <Calendar className="w-3.5 h-3.5 text-amber-400/80" />
              </div>
              <div className="text-base font-semibold text-amber-300">-₹9,250</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">Rent, utilities & groceries</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-neutral-400 mb-1 flex items-center justify-between">
                <span>Savings Goals</span>
                <Target className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div className="text-base font-semibold text-teal-300">-₹4,000</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">Protected monthly deposits</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-neutral-400 mb-1 flex items-center justify-between">
                <span>Emergency Reserve</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-base font-semibold text-emerald-300">-₹2,800</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">Untouchable safety cushion</div>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300/90 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All upcoming commitments for this pay cycle are 100% covered.</span>
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className={`w-full bg-[#080a0a] text-neutral-200 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden ${className}`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-black font-bold text-xs">
                N
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Financial Dashboard</div>
                <div className="text-[10px] text-neutral-400">Welcome back, Alex</div>
              </div>
            </div>
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
              <Bell className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Top card */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Safe to Spend</span>
                <div className="text-3xl font-bold text-white font-editorial italic">₹12,450</div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                +4.2% pace
              </span>
            </div>
            <div className="w-full bg-neutral-800/80 h-1.5 rounded-full overflow-hidden mb-2">
              <div className="bg-emerald-500 h-full rounded-full w-[42%]" />
            </div>
            <div className="flex justify-between text-[10px] text-neutral-400">
              <span>₹8,450 spent this cycle</span>
              <span>₹20,900 target cap</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-[10px] text-neutral-400">Total Net Worth</span>
              <div className="text-sm font-semibold text-white mt-0.5">₹2,85,000</div>
              <span className="text-[10px] text-emerald-400 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-0.5" /> +₹12,400 this month
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-[10px] text-neutral-400">Active Goals</span>
              <div className="text-sm font-semibold text-white mt-0.5">3 on track</div>
              <span className="text-[10px] text-teal-400 flex items-center mt-1">
                <CheckCircle2 className="w-3 h-3 mr-0.5" /> 84% completed
              </span>
            </div>
          </div>

          {/* Recent Activity Mini */}
          <div className="text-[11px]">
            <div className="text-neutral-400 font-medium mb-2 flex justify-between">
              <span>Recent Activity</span>
              <span className="text-emerald-400 hover:underline cursor-pointer">View all</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.015] border border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-neutral-800 text-neutral-300">
                    <Coffee className="w-3 h-3" />
                  </div>
                  <span className="text-neutral-200">Blue Tokai Coffee</span>
                </div>
                <span className="text-neutral-300 font-medium">-₹240</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.015] border border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-emerald-950/60 text-emerald-400">
                    <ArrowDownLeft className="w-3 h-3" />
                  </div>
                  <span className="text-neutral-200">Freelance Retainer</span>
                </div>
                <span className="text-emerald-400 font-medium">+₹15,000</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'transactions':
      return (
        <div className={`w-full bg-[#080a0a] text-neutral-200 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
            <div>
              <div className="text-xs font-semibold text-white">Smart Spending Log</div>
              <div className="text-[10px] text-neutral-400">Real-time classification</div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-300 border border-white/10">
              Filter: This Month
            </span>
          </div>

          {/* Summary pill */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-xs">
            <div>
              <div className="text-[10px] text-neutral-400">Total Spent</div>
              <div className="text-base font-bold text-white">₹8,450</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-neutral-400">Within Budget</div>
              <div className="text-emerald-400 font-semibold text-xs flex items-center justify-end">
                <ShieldCheck className="w-3 h-3 mr-1" /> ₹1,850 under pace
              </div>
            </div>
          </div>

          {/* Transactions List */}
          <div className="space-y-2 text-xs">
            {[
              { title: 'Nature\'s Basket', cat: 'Planned • Groceries', amount: '-₹1,850', date: 'Today, 2:15 PM', icon: ShoppingBag, color: 'text-amber-400' },
              { title: 'Figma Cloud Workspace', cat: 'Planned • Work Tools', amount: '-₹1,200', date: 'Yesterday', icon: Laptop, color: 'text-neutral-300' },
              { title: 'Client Retainer Deposit', cat: 'Income • Consulting', amount: '+₹25,000', date: 'Sep 17', icon: ArrowDownLeft, color: 'text-emerald-400' },
              { title: 'Metro Mobility Smart Card', cat: 'Safe Spend • Commute', amount: '-₹450', date: 'Sep 15', icon: Coffee, color: 'text-neutral-300' }
            ].map((tx, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-neutral-800/80 flex items-center justify-center text-neutral-300">
                    <tx.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-xs">{tx.title}</div>
                    <div className="text-[10px] text-neutral-500">{tx.cat}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-semibold text-xs ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-neutral-200'}`}>
                    {tx.amount}
                  </div>
                  <div className="text-[10px] text-neutral-500">{tx.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'savings-goals':
      return (
        <div className={`w-full bg-[#080a0a] text-neutral-200 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
            <div>
              <div className="text-xs font-semibold text-white">Savings Goals Tracker</div>
              <div className="text-[10px] text-neutral-400">Safeguarded from everyday spending</div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] bg-teal-500/10 text-teal-300 border border-teal-500/20">
              3 Active Goals
            </span>
          </div>

          <div className="space-y-3 text-xs">
            {/* Goal 1 */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-white text-xs">Emergency Cushion</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium">75% (₹75,000 / ₹1,00,000)</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[75%]" />
              </div>
              <div className="mt-2 text-[10px] text-neutral-400 flex justify-between">
                <span>Monthly Auto-Protect: ₹5,000</span>
                <span className="text-neutral-300">10 mos remaining</span>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-white text-xs">Studio Hardware</span>
                </div>
                <span className="text-[10px] text-teal-400 font-medium">72% (₹36,000 / ₹50,000)</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full rounded-full w-[72%]" />
              </div>
              <div className="mt-2 text-[10px] text-neutral-400 flex justify-between">
                <span>Monthly Auto-Protect: ₹4,000</span>
                <span className="text-neutral-300">Target: Dec 2026</span>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <PiggyBank className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-white text-xs">Kyoto Travel Fund</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-medium">65% (₹39,000 / ₹60,000)</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full rounded-full w-[65%]" />
              </div>
              <div className="mt-2 text-[10px] text-neutral-400 flex justify-between">
                <span>Monthly Auto-Protect: ₹6,500</span>
                <span className="text-neutral-300">Target: Spring</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'settings':
      return (
        <div className={`w-full bg-[#080a0a] text-neutral-200 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden ${className}`}>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5">
            <div>
              <div className="text-xs font-semibold text-white">NIDHI Preferences</div>
              <div className="text-[10px] text-neutral-400">Customize safe spend rules</div>
            </div>
            <Sliders className="w-4 h-4 text-neutral-400" />
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Primary Currency</div>
                <div className="text-[10px] text-neutral-400">Used for all safe spend formulas</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-white/5 text-emerald-300 font-semibold text-xs border border-white/10">
                INR (₹)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Cycle Reset Date</div>
                <div className="text-[10px] text-neutral-400">Matches paycheck or 1st of month</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-200 text-xs border border-white/10">
                1st of every month
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Emergency Safety Buffer</div>
                <div className="text-[10px] text-neutral-400">Minimum untouched reserve margin</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 font-medium">
                Active (15%)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Daily Spend Alert</div>
                <div className="text-[10px] text-neutral-400">Notify when daily pace exceeds limit</div>
              </div>
              <div className="w-8 h-4 rounded-full bg-emerald-500/80 p-0.5 flex justify-end">
                <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'login':
      return (
        <div className={`w-full bg-[#080a0a] text-neutral-200 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center ${className}`}>
          <div className="text-center mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-black font-bold text-base flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-emerald-500/20">
              <Wallet className="w-5 h-5 text-black" />
            </div>
            <div className="text-base font-bold text-white tracking-wide">Welcome to NIDHI</div>
            <div className="text-xs text-neutral-400 mt-0.5">Know before you spend.</div>
          </div>

          <div className="space-y-3 text-xs max-w-xs mx-auto w-full">
            <div>
              <label className="text-[10px] text-neutral-400 block mb-1">Email address</label>
              <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs">
                alex.turner@example.com
              </div>
            </div>

            <div>
              <label className="text-[10px] text-neutral-400 block mb-1">Password</label>
              <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs flex justify-between items-center">
                <span>••••••••••••</span>
                <Eye className="w-3.5 h-3.5 text-neutral-500" />
              </div>
            </div>

            <button 
              type="button" 
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-500/25 mt-2"
            >
              <span>Sign In to NIDHI</span>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>

            <div className="text-center text-[10px] text-neutral-500 pt-1">
              Protected by bank-grade client encryption
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

import React from 'react';
import { Wallet, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 py-12 px-4 sm:px-6 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo and brand */}
        <div className="flex items-center space-x-2.5">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
              <Wallet className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
          <span className="font-bold tracking-widest text-sm text-white">NIDHI</span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400 text-xs">v1.0</span>
        </div>

        {/* Center: Tagline */}
        <div className="text-neutral-400 font-medium text-center">
          Personal finance, simplified.
        </div>

        {/* Right: Quick Links */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <a
            href="https://nidhi-money.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-try-link"
            className="btn-nidhi-primary !min-h-[34px] !py-1 !px-3.5 !text-xs !font-bold group"
          >
            <span>Try NIDHI</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </a>
          <a
            href="https://nidhi-money.vercel.app/feedback"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-feedback-link"
            className="btn-nidhi-secondary !min-h-[34px] !py-1 !px-3.5 !text-xs !font-medium group"
          >
            <MessageSquare className="w-3 h-3 text-emerald-300 group-hover:text-white transition-colors" />
            <span>Give Feedback</span>
          </a>
        </div>
      </div>

      {/* Mandatory Disclaimer Note */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-neutral-400">
        NIDHI is a personal finance tool and does not provide financial advice.
      </div>
    </footer>
  );
};

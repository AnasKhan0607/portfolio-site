"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { income } from "./data";

export default function IncomeQuiz() {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);

  const revealed = picked !== null;

  return (
    <div className="mt-8 rounded-xl border border-[#1E4636]/15 bg-[#1E4636]/[0.03] p-6">
      <AnimatePresence mode="wait" initial={false}>
        {!open && (
          <motion.div
            key="closed"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-serif text-lg text-[#2A2724]">Income</p>
              <p className="mt-0.5 text-sm text-[#6F675E]">
                Behind a very short quiz. Sorry — I had to.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="shrink-0 rounded-full bg-[#1E4636] px-5 py-2.5 text-sm font-medium tracking-wide text-[#FAF7F0] transition hover:bg-[#173628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A98650]"
            >
              Unlock
            </button>
          </motion.div>
        )}

        {open && !revealed && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-serif text-lg text-[#2A2724]">{income.question}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {income.options.map((option, i) => (
                <button
                  key={option.text}
                  type="button"
                  onClick={() => setPicked(i)}
                  className="rounded-full border border-[#1E4636]/25 px-4 py-2 text-sm text-[#2A2724] transition hover:border-[#1E4636] hover:bg-[#1E4636] hover:text-[#FAF7F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A98650]"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {revealed && (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm italic text-[#6F675E]">
              {income.options[picked].quip}
            </p>
            {income.options[picked].reveal && (
              <p className="mt-3 font-serif text-3xl tracking-tight text-[#1E4636]">
                {income.options[picked].reveal}
              </p>
            )}
            {income.options[picked].note && (
              <p className="mt-2 text-sm text-[#6F675E]">
                {income.options[picked].note}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

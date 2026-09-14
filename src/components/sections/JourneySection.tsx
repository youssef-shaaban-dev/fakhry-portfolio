import { FadeUp } from '@/components/animations/FadeUp';

export function JourneySection() {
  return (
    <section id="journey" className="w-full py-32 px-6 lg:px-12 relative z-10 flex flex-col items-center">
      <FadeUp>
        <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-center">
          My <span className="text-[var(--accent)]">Journey</span>
        </h2>
        <p className="text-[var(--foreground)]/60 text-center mb-24 max-w-2xl text-lg">
          A seven-year arc from creating content to streaming live and shipping full products end to end.
        </p>
      </FadeUp>

      <div className="relative w-full max-w-[1000px] mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-[var(--accent)] -translate-x-1/2 hidden md:block opacity-50"></div>
        
        <div className="space-y-24 relative z-10">
          {/* 2019 */}
          <FadeUp delay={0.1} y={30}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              <div className="w-full md:w-[45%] flex justify-end">
                <div className="bg-[#111116] border border-blue-500/20 p-8 rounded-2xl shadow-xl hover:border-blue-500/40 transition-colors w-full text-right group">
                  <div className="flex items-center justify-end gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-blue-500 font-heading">2019</h3>
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">f</div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Facebook Beginnings</h4>
                  <p className="text-sm text-[var(--foreground)]/60">Started creating content on Facebook and growing an audience from zero.</p>
                </div>
              </div>
              {/* Center Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-black hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <div className="hidden md:block w-[45%]"></div>
            </div>
          </FadeUp>

          {/* 2020 */}
          <FadeUp delay={0.2} y={30}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              <div className="hidden md:block w-[45%]"></div>
              {/* Center Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-black hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
              <div className="w-full md:w-[45%] flex justify-start">
                <div className="bg-[#111116] border border-indigo-500/20 p-8 rounded-2xl shadow-xl hover:border-indigo-500/40 transition-colors w-full text-left group">
                  <div className="flex items-center justify-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xs">🏆</div>
                    <h3 className="text-3xl font-bold text-indigo-500 font-heading">2020</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Facebook Partner</h4>
                  <p className="text-sm text-[var(--foreground)]/60">Became an official Facebook content partner.</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 2022 */}
          <FadeUp delay={0.3} y={30}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              <div className="w-full md:w-[45%] flex justify-end">
                <div className="bg-[#111116] border border-purple-500/20 p-8 rounded-2xl shadow-xl hover:border-purple-500/40 transition-colors w-full text-right group">
                  <div className="flex items-center justify-end gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-purple-500 font-heading">2022</h3>
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">W</div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Streaming on Twitch</h4>
                  <p className="text-sm text-[var(--foreground)]/60">Left Facebook and moved to live streaming on Twitch.</p>
                </div>
              </div>
              {/* Center Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-black hidden md:block shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              <div className="hidden md:block w-[45%]"></div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

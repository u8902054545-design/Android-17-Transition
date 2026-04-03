import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, MessageCircle, Settings, Menu, Search, Bell, User, ChevronRight, Plus } from 'lucide-react';

function HomeApp() {
  return (
    <div className="flex flex-col h-full w-full bg-[#141218] overflow-y-auto pt-14 pb-32">
      <header className="px-4 py-6 flex justify-between items-center sticky top-0 bg-[#141218]/90 backdrop-blur-md z-10">
        <h1 className="text-3xl font-normal tracking-tight text-[#E6E1E5]">My Day</h1>
        <button className="p-2 rounded-full bg-[#2B2930] text-[#CAC4D0] hover:bg-[#49454F] transition-colors">
          <User size={24} />
        </button>
      </header>
      
      <main className="px-4 flex flex-col gap-4">
        <div className="bg-[#D0BCFF] text-[#381E72] p-6 rounded-[28px] flex flex-col gap-2 shadow-sm">
          <span className="text-sm font-medium">Current Location</span>
          <div className="flex justify-between items-end">
            <span className="text-5xl font-light">72°</span>
            <span className="text-lg font-medium">Sunny</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#2B2930] p-5 rounded-[24px] flex flex-col gap-4 aspect-square justify-between hover:bg-[#36343B] transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#4A4458] flex items-center justify-center text-[#E8DEF8]">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="font-medium text-[#E6E1E5]">Notifications</h3>
              <p className="text-sm text-[#CAC4D0]">3 new</p>
            </div>
          </div>
          <div className="bg-[#2B2930] p-5 rounded-[24px] flex flex-col gap-4 aspect-square justify-between hover:bg-[#36343B] transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#4A4458] flex items-center justify-center text-[#E8DEF8]">
              <Search size={24} />
            </div>
            <div>
              <h3 className="font-medium text-[#E6E1E5]">Search</h3>
              <p className="text-sm text-[#CAC4D0]">Find anything</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2B2930] rounded-[28px] p-2 flex flex-col mt-2">
          <h3 className="text-sm font-medium text-[#CAC4D0] px-4 py-3">Recent Activity</h3>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-[20px] hover:bg-[#49454F] transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#4A4458] flex items-center justify-center text-[#E8DEF8]">
                <User size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-[#E6E1E5]">Activity Item {i}</h4>
                <p className="text-sm text-[#CAC4D0]">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function MessagesApp() {
  return (
    <div className="flex flex-col h-full w-full bg-[#141218] overflow-y-auto pt-14 pb-32">
      <header className="px-4 py-4 flex items-center gap-4 sticky top-0 bg-[#141218]/90 backdrop-blur-md z-10">
        <button className="p-2 rounded-full hover:bg-[#2B2930] text-[#E6E1E5] transition-colors">
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-normal text-[#E6E1E5]">Messages</h1>
      </header>

      <div className="px-4 py-2">
        <div className="bg-[#2B2930] rounded-full flex items-center px-4 py-3.5 gap-3 text-[#CAC4D0] focus-within:bg-[#36343B] transition-colors">
          <Search size={20} />
          <input type="text" placeholder="Search messages" className="bg-transparent border-none outline-none flex-1 text-[#E6E1E5] placeholder:text-[#CAC4D0] text-base" />
        </div>
      </div>
      
      <main className="flex flex-col mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="flex items-center gap-4 px-4 py-4 hover:bg-[#2B2930] transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D0BCFF] to-[#4A4458] flex-shrink-0 flex items-center justify-center text-[#381E72] font-medium text-lg">
              {String.fromCharCode(64 + i)}
            </div>
            <div className="flex-1 min-w-0 border-b border-[#49454F]/30 pb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-medium text-[#E6E1E5] text-lg truncate">Contact Name {i}</h4>
                <span className="text-xs text-[#CAC4D0]">12:3{i} PM</span>
              </div>
              <p className="text-sm text-[#CAC4D0] truncate">This is a preview of the latest message received...</p>
            </div>
          </div>
        ))}
      </main>

      <button className="fixed bottom-28 right-6 w-16 h-16 bg-[#D0BCFF] text-[#381E72] rounded-[16px] flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#E8DEF8] transition-all z-20">
        <Plus size={28} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function SettingsApp() {
  return (
    <div className="flex flex-col h-full w-full bg-[#141218] overflow-y-auto pt-14 pb-32">
      <header className="px-4 py-8 sticky top-0 bg-[#141218]/90 backdrop-blur-md z-10">
        <h1 className="text-4xl font-normal text-[#E6E1E5]">Settings</h1>
      </header>
      
      <main className="flex flex-col gap-6 px-4">
        <div className="bg-[#2B2930] rounded-[28px] p-5 flex items-center gap-4 hover:bg-[#36343B] transition-colors cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-[#4A4458] flex items-center justify-center">
            <User size={32} className="text-[#E8DEF8]" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-medium text-[#E6E1E5]">Google User</h3>
            <p className="text-sm text-[#CAC4D0]">user@example.com</p>
          </div>
          <ChevronRight className="text-[#CAC4D0]" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-[#D0BCFF] px-4 py-2">Network & internet</h2>
          <div className="bg-[#2B2930] rounded-[28px] overflow-hidden">
            {['Wi-Fi', 'Mobile network', 'Airplane mode', 'Hotspot & tethering'].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-5 hover:bg-[#49454F] transition-colors border-b border-[#49454F]/30 last:border-0 cursor-pointer">
                <span className="text-[#E6E1E5] text-lg">{item}</span>
                {i === 2 ? (
                  <div className="w-12 h-6 bg-[#D0BCFF] rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-[#381E72] rounded-full absolute right-1 top-1"></div>
                  </div>
                ) : (
                  <ChevronRight className="text-[#CAC4D0]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-medium text-[#D0BCFF] px-4 py-2">Display</h2>
          <div className="bg-[#2B2930] rounded-[28px] overflow-hidden">
            {['Dark theme', 'Display size and text', 'Colors'].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-5 hover:bg-[#49454F] transition-colors border-b border-[#49454F]/30 last:border-0 cursor-pointer">
                <span className="text-[#E6E1E5] text-lg">{item}</span>
                {i === 0 ? (
                  <div className="w-12 h-6 bg-[#D0BCFF] rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-[#381E72] rounded-full absolute right-1 top-1"></div>
                  </div>
                ) : (
                  <ChevronRight className="text-[#CAC4D0]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const apps = [
  { id: 'home', name: 'Home', icon: Home, component: HomeApp },
  { id: 'messages', name: 'Messages', icon: MessageCircle, component: MessagesApp },
  { id: 'settings', name: 'Settings', icon: Settings, component: SettingsApp },
];

export default function App() {
  const [currentApp, setCurrentApp] = useState(0);
  const [direction, setDirection] = useState(1);

  const switchApp = (index: number) => {
    if (index === currentApp) return;
    setDirection(index > currentApp ? 1 : -1);
    setCurrentApp(index);
  };

  const CurrentComponent = apps[currentApp].component;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '60%' : '-60%',
      scale: 0.8,
      opacity: 0,
      borderRadius: '48px',
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      borderRadius: '0px',
      transition: {
        duration: 0.6,
        ease: [0.2, 0, 0, 1], // Emphasized decelerate
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-60%' : '60%',
      scale: 0.8,
      opacity: 0,
      borderRadius: '48px',
      transition: {
        duration: 0.6,
        ease: [0.2, 0, 0, 1],
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 p-4 md:p-8 font-sans">
      {/* Device Mockup Container */}
      <div className="relative w-full max-w-[412px] h-[892px] bg-black rounded-[48px] overflow-hidden shadow-2xl border-[8px] border-neutral-800 ring-1 ring-white/10">
        
        {/* Status Bar Mock */}
        <div className="flex justify-between items-center px-6 py-3 text-sm font-medium text-[#E6E1E5] z-50 absolute top-0 w-full pointer-events-none">
          <span>12:30</span>
          <div className="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L15.6 16.2C14.6 15.45 13.35 15 12 15C10.65 15 9.4 15.45 8.4 16.2L12 21ZM12 3C7.95 3 4.2 4.65 1.2 7.35L12 21.5L22.8 7.35C19.8 4.65 16.05 3 12 3Z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.67C7 21.4 7.6 22 8.33 22H15.67C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4Z"/></svg>
          </div>
        </div>

        {/* App Container */}
        <div className="relative flex-1 w-full h-full overflow-hidden bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentApp}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full bg-[#141218] shadow-2xl overflow-hidden origin-center will-change-transform"
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Bar Mock (System Navigation) */}
        <div className="flex justify-center items-center h-12 bg-transparent z-50 absolute bottom-0 w-full pointer-events-none">
          <div className="w-1/3 h-1.5 bg-[#E6E1E5] rounded-full mb-2"></div>
        </div>

        {/* App Switcher UI (for demo purposes) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-[#2B2930]/90 backdrop-blur-xl rounded-full z-50 shadow-lg border border-[#49454F]/50">
          {apps.map((app, index) => {
            const Icon = app.icon;
            const isActive = index === currentApp;
            return (
              <button
                key={app.id}
                onClick={() => switchApp(index)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 relative ${
                  isActive ? 'bg-[#D0BCFF] text-[#381E72]' : 'text-[#CAC4D0] hover:bg-[#49454F]'
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute inset-0 rounded-full border-2 border-[#D0BCFF]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

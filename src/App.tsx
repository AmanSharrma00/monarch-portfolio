import { useState } from 'react';
import { BootScreen } from '@/components/BootScreen';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Capabilities } from '@/components/Capabilities';
import { Constellation } from '@/components/Constellation';
import { Projects } from '@/components/Projects';
import { Journey } from '@/components/Journey';
import { Achievements } from '@/components/Achievements';
import { Resume } from '@/components/Resume';
import { SystemMap } from '@/components/SystemMap';
import { BuildPipeline } from '@/components/BuildPipeline';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { CommandInterface } from '@/components/CommandInterface';
import { AIAssistant } from '@/components/AIAssistant';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      <CustomCursor />

      <div className="relative min-h-screen bg-ink-950 text-ink-100">
        <Navigation />

        <main>
          <Hero />
          <About />
          <Capabilities />
          <Constellation />
          <Projects />
          <Journey />
          <Achievements />
          <SystemMap />
          <BuildPipeline />
          <Resume />
          <Contact />
        </main>

        <Footer />

        <CommandInterface />
        <AIAssistant />
      </div>
    </>
  );
}

export default App;

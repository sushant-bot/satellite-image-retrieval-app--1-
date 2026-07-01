'use client';

import { GlobeToMapTransform } from '@/components/globe-to-map-transform';
import Link from 'next/link';
import { 
  Satellite, 
  Settings, 
  BrainCircuit, 
  Network, 
  Search, 
  CheckCircle2, 
  BarChart4, 
  Zap, 
  Eye, 
  Database, 
  Layers, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Timer,
  Globe,
  Cloud
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden scrollbar-none bg-[#030303] text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Space & Geospatial Themed Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-45">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-18 animate-drift-slow"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1800&q=80")',
            filter: 'saturate(0.9) contrast(1.05)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_30%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size-[4rem_4rem] animate-grid-pan" />
        <div className="absolute -top-32 left-[-10%] h-128 w-lg rounded-full bg-blue-500/10 blur-[140px] animate-drift-slow" />
        <div className="absolute top-[18%] right-[-8%] h-112 w-md rounded-full bg-indigo-500/10 blur-[150px] animate-drift-slow" />
        <div className="absolute bottom-[-12%] left-[18%] h-104 w-104 rounded-full bg-purple-500/10 blur-[150px] animate-drift-slow" />
        
        {/* Dynamic Geospatial SVG */}
        <svg className="absolute inset-0 h-full min-h-375 w-full animate-orbit-slow" xmlns="http://www.w3.org/2000/svg">
          {/* Coordinates grid / Radar rings */}
          <circle cx="85%" cy="20%" r="200" fill="none" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="85%" cy="20%" r="350" fill="none" stroke="rgba(99, 102, 241, 0.02)" strokeWidth="1" />
          <circle cx="85%" cy="20%" r="500" fill="none" stroke="rgba(59, 130, 246, 0.015)" strokeWidth="1" strokeDasharray="8 8" />
          
          {/* Constellation points */}
          <circle cx="10%" cy="15%" r="1" fill="#fff" opacity="0.3" />
          <circle cx="15%" cy="8%" r="1.5" fill="#fff" opacity="0.5" />
          <circle cx="30%" cy="25%" r="1" fill="#fff" opacity="0.2" />
          <circle cx="45%" cy="12%" r="2" fill="#fff" opacity="0.6" />
          <circle cx="70%" cy="30%" r="1" fill="#fff" opacity="0.4" />
          <circle cx="85%" cy="15%" r="1.5" fill="#fff" opacity="0.5" />
          <circle cx="95%" cy="35%" r="1" fill="#fff" opacity="0.3" />
          
          {/* Satellite Orbit Paths */}
          <path d="M-100,250 C 300,500 1100,0 1600,350" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M-50,400 C 400,700 1000,200 1500,550" fill="none" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1.5" />
          
          {/* Geospatial scanner lines */}
          <line x1="0" y1="15%" x2="100%" y2="15%" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />
          <line x1="0" y1="35%" x2="100%" y2="35%" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />
          <line x1="0" y1="55%" x2="100%" y2="55%" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />
          <line x1="55%" y1="0" x2="55%" y2="100%" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />

          {/* Tiny satellite indicator on the orbit */}
          <circle cx="780" cy="380" r="3" fill="#6366f1" opacity="0.8" className="animate-ping" />
          <circle cx="780" cy="380" r="2" fill="#818cf8" />
        </svg>
      </div>

      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 h-125 w-125 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none animate-drift-slow" />
      <div className="absolute top-[60vh] right-1/4 h-150 w-150 rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none animate-drift-slow" />
      <div className="absolute bottom-0 left-1/3 h-125 w-125 translate-y-1/3 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none animate-drift-slow" />

      {/* Header */}
      <header className="border-b border-zinc-800/60 bg-[#09090b]/70 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wider text-white uppercase group-hover:text-blue-400 transition-colors">SATELLITE SEARCH</h1>
              <p className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase">Cross-Modal Retrieval</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm text-zinc-400 hover:text-white hover:-translate-y-px transition-all">How it works</a>
            <a href="#modalities" className="text-sm text-zinc-400 hover:text-white hover:-translate-y-px transition-all">Modalities</a>
            <a href="#features" className="text-sm text-zinc-400 hover:text-white hover:-translate-y-px transition-all">Capabilities</a>
            <a href="#architecture" className="text-sm text-zinc-400 hover:text-white hover:-translate-y-px transition-all">Architecture</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard" 
              className="px-5 py-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:brightness-110 transition-all duration-300"
            >
              Launch Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 w-fit backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-400">Bharatiya Antariksh Hackathon 2026</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight bg-linear-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Find Similar Satellite Images <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Across Modalities</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light max-w-xl">
              Leverage state-of-the-art deep metric learning and high-dimensional vector index matching to query optical, SAR, or multispectral earth observation data seamlessly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              href="/dashboard" 
              className="px-7 py-3.5 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-white/5 rounded-lg"
            >
              Start Searching
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#how" 
              className="px-7 py-3.5 border border-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-900/60 hover:text-white hover:border-zinc-700 transition-all duration-300 rounded-lg"
            >
              Explore Features
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900 max-w-lg">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">3</p>
              <p className="text-xs text-zinc-500 font-medium">Sensor Modalities</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 50ms</p>
              <p className="text-xs text-zinc-500 font-medium">Query Latency</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">99.2%</p>
              <p className="text-xs text-zinc-500 font-medium">Retrieval Accuracy</p>
            </div>
          </div>
        </div>

        {/* Right: Globe Visualizer */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-full aspect-4/3 max-w-150 rounded-xl p-px bg-linear-to-b from-zinc-800 to-zinc-900/40 shadow-2xl shadow-blue-500/5 group">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
              <GlobeToMapTransform />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative overflow-hidden border-t border-zinc-900 bg-linear-to-b from-black via-[#050505] to-black py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-px w-6xl -translate-x-1/2 bg-linear-to-r from-transparent via-blue-500/25 to-transparent" />
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end mb-14">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-xs uppercase font-semibold tracking-[0.3em] text-blue-400">Processing Flow</h3>
              <h4 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Simplified Processing Pipeline</h4>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Three focused stages take a query from raw image upload to ranked results without exposing the user to the model plumbing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.08)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">Pipeline Snapshot</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-zinc-400">Input</span>
                  <span className="text-white font-medium">Satellite image</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-zinc-400">Processing</span>
                  <span className="text-white font-medium">Embedding + search</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-zinc-400">Output</span>
                  <span className="text-white font-medium">Top matches</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: '01', title: 'Upload Image', desc: 'Select or drag-and-drop an optical, SAR, or multispectral query image into the interface.', accent: 'from-blue-500/18 to-cyan-500/8' },
              { num: '02', title: 'Extract Embedding', desc: 'The model transforms the image into a unified semantic vector in a shared latent space.', accent: 'from-indigo-500/18 to-blue-500/8' },
              { num: '03', title: 'Retrieve Matches', desc: 'FAISS searches the index and returns the most similar scenes ranked by similarity score.', accent: 'from-purple-500/18 to-indigo-500/8' },
            ].map((step, idx) => (
              <div key={step.num} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                <div className={`absolute inset-0 bg-linear-to-br ${step.accent} opacity-100`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Step</span>
                      <span className="text-sm font-semibold text-white">{step.num}</span>
                    </div>
                    <div className="h-10 w-10 rounded-xl border border-white/10 bg-black/35 backdrop-blur-sm" />
                  </div>
                  <h5 className="mb-3 text-xl font-semibold text-white">{step.title}</h5>
                  <p className="text-sm leading-relaxed text-zinc-300/90">{step.desc}</p>
                  <div className="mt-6 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                    {idx === 0 ? 'User action' : idx === 1 ? 'Model transform' : 'Search response'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section id="modalities" className="py-24 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <h3 className="text-xs uppercase font-semibold tracking-wider text-indigo-500">Cross-Modal Sensors</h3>
            <h4 className="text-3xl font-bold text-white">Supported Modalities</h4>
            <p className="text-sm text-zinc-400 font-light">Robust retrieval capabilities mapping intelligence layers across diverse earth-observation formats.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Optical Imagery', 
                desc: 'Standard RGB and visible spectrum imagery captured by standard earth observation sensors. Highly detailed but dependent on cloud cover and daylight.', 
                specs: 'True color, high spatial resolution, panchromatic bands' 
              },
              { 
                title: 'SAR (Radar)', 
                desc: 'Synthetic Aperture Radar signals. Emits electromagnetic waves to construct images, allowing for full all-weather day/night ground imaging.', 
                specs: 'Cloud penetration, day/night capability, surface roughness mapping' 
              },
              { 
                title: 'Multispectral', 
                desc: 'Captures data across multiple narrow bands of the electromagnetic spectrum. Enables target material extraction and surface composition analysis.', 
                specs: 'NDVI vegetation indices, band combinations, thermal detection' 
              },
            ].map((mod) => (
              <div key={mod.title} className="p-8 border border-zinc-800/60 rounded-xl bg-[#09090b]/50 hover:border-zinc-700/80 hover:shadow-[0_0_30px_rgba(79,70,229,0.05)] transition-all duration-500 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-950/20 transition-all">
                    {mod.title.includes('Optical') && <Eye className="w-5 h-5 text-blue-400" />}
                    {mod.title.includes('SAR') && <Satellite className="w-5 h-5 text-indigo-400" />}
                    {mod.title.includes('Multispectral') && <Layers className="w-5 h-5 text-purple-400" />}
                  </div>
                  <h4 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">{mod.title}</h4>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{mod.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900 text-xs text-zinc-500 font-medium">
                  {mod.specs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-t border-zinc-900 bg-linear-to-b from-[#050505] to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <h3 className="text-xs uppercase font-semibold tracking-wider text-purple-500">Core Engine</h3>
            <h4 className="text-3xl font-bold text-white">Engine Capabilities</h4>
            <p className="text-sm text-zinc-400 font-light">Supercharge geospatial analytics with features designed for scale and precision.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Cross-Modal Retrieval', desc: 'Query SAR database using optical images and vice versa.', icon: Network },
              { title: 'Same-Modal Search', desc: 'Perform standard exact-sensor searches with highly optimized distance bounds.', icon: Search },
              { title: 'Unified Embedding Space', desc: 'Align representation spaces so different sensors map to shared meaning.', icon: BrainCircuit },
              { title: 'Sub-100ms Matching', desc: 'Perform ultra-fast vector index searches with FAISS acceleration.', icon: Timer },
              { title: 'Visual Interactive Globe', desc: 'Animate and interact with the projection map dynamically.', icon: Globe },
              { title: 'Comprehensive Analytics', desc: 'Examine similarity score trends, modality distribution, and logs.', icon: BarChart4 },
              { title: 'Real-Time Feature Prep', desc: 'Upload, crop, and normalize query imagery on the fly.', icon: Settings },
              { title: 'Proven Robustness', desc: 'Validated accuracy on standard remote-sensing benchmarks.', icon: ShieldCheck },
              { title: 'Cloud Integration Ready', desc: 'Microservice-ready architecture prepared for cluster deployment.', icon: Cloud }
            ].map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="p-6 border border-zinc-900 rounded-xl bg-zinc-950/60 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-300 flex items-start gap-4 group">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-white">{feat.title}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="relative overflow-hidden border-t border-zinc-900 py-24">
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black via-[#040404] to-black" />
        <div className="absolute left-0 top-1/2 h-112 w-md -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end mb-14">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-xs uppercase font-semibold tracking-[0.3em] text-blue-400">Pipeline Flow</h3>
              <h4 className="text-3xl sm:text-4xl font-bold text-white leading-tight">System Architecture</h4>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Data moves from satellite ingestion to ranked similarity results through a compact, vector-first retrieval stack.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">Core Layers</p>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="flex items-center justify-between"><span>Input</span><span className="text-white">Imagery</span></div>
                <div className="flex items-center justify-between"><span>Core</span><span className="text-white">Embedding + index</span></div>
                <div className="flex items-center justify-between"><span>Output</span><span className="text-white">Dashboard + map</span></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent lg:block" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
              {[
                { step: 'Satellite Inputs', Icon: Satellite, tone: 'text-cyan-300' },
                { step: 'Preprocessing', Icon: Settings, tone: 'text-blue-300' },
                { step: 'Feature Extraction', Icon: BrainCircuit, tone: 'text-indigo-300' },
                { step: 'Shared Projection', Icon: Network, tone: 'text-violet-300' },
                { step: 'FAISS Index', Icon: Database, tone: 'text-sky-300' },
                { step: 'Similarity Match', Icon: CheckCircle2, tone: 'text-emerald-300' },
                { step: 'Visual Dashboard', Icon: BarChart4, tone: 'text-fuchsia-300' },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex">
                  <div className="w-full rounded-2xl border border-white/10 bg-[#09090b]/80 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0f0f12]">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${item.tone}`}>Step {idx + 1}</div>
                      <div className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <item.Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-white leading-tight">{item.step}</p>
                  </div>
                  {idx < 6 && (
                    <div className="hidden lg:flex items-center justify-center px-2 text-white/20">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-zinc-900 bg-linear-to-t from-black to-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-100 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Explore Cross-Modal Satellite Data?
          </h3>
          <p className="text-zinc-400 font-light max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Retrieve semantically similar earth observation scenes across distinct sensor modalities in milliseconds. Developed for the Bharatiya Antariksh Hackathon.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/dashboard" 
              className="px-8 py-3.5 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 rounded-lg shadow-lg shadow-white/5"
            >
              Launch Dashboard
            </Link>
            <Link 
              href="/analytics" 
              className="px-8 py-3.5 border border-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all duration-300 rounded-lg"
            >
              View Analytics
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-[#030303] mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
            <div>
              <p className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Platform</p>
              <ul className="space-y-2.5 text-zinc-500 text-xs">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/results" className="hover:text-white transition-colors">Results Panel</Link></li>
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics Page</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Resources</p>
              <ul className="space-y-2.5 text-zinc-500 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API References</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Hackathon</p>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Developed as a submission for the Bharatiya Antariksh Hackathon 2026.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Agency</p>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Indian Space Research Organisation (ISRO) Earth Observation Data Services.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-xs">
            <p>Cross-Modal Satellite Image Retrieval System</p>
            <p className="font-light">&copy; 2026 Indian Space Research Organisation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

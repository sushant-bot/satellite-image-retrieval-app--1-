'use client';

import { GlobeToMapTransform } from '@/components/globe-to-map-transform';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { SidebarLayout } from '@/components/sidebar-layout';

function MapContent() {
  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-zinc-950 text-white flex flex-col">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />
        <EtheralShadow
          className="absolute inset-0 opacity-45"
          color="rgba(37, 99, 235, 0.42)"
          animation={{ scale: 92, speed: 78 }}
          noise={{ opacity: 0.4, scale: 0.75 }}
          sizing="fill"
        />
      </div>

      {/* Header */}
      <header className="z-10 border-b border-white/10 bg-zinc-950/65 backdrop-blur-xl sticky top-0">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-semibold tracking-[0.2em] uppercase">Interactive Map</h1>
            <p className="text-xs text-zinc-400 mt-1">Globe, match set, and retrieval context in one view</p>
          </div>
          <div className="flex items-center gap-4">
            <select className="text-sm bg-zinc-900/80 border border-white/10 rounded px-3 py-1 text-white backdrop-blur">
              <option>Satellite</option>
              <option>Terrain</option>
              <option>Map</option>
            </select>
            <button className="text-sm text-zinc-300 hover:text-white transition">Filters</button>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex-1 min-h-0 px-6 py-8 overflow-hidden">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_22rem] items-stretch h-full min-h-0">
          <section className="min-h-0 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/30">
            <div className="h-full p-4">
              <div className="h-full rounded-xl overflow-hidden border border-white/10 bg-zinc-950/90">
                <GlobeToMapTransform />
              </div>
            </div>
          </section>

          <aside className="grid gap-4 content-start min-h-0">
            <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 mb-3">Live Query</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-zinc-500">Coordinates</span>
                  <span className="text-white">28.5°N, 77.2°E</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-zinc-500">Region</span>
                  <span className="text-white">New Delhi</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-zinc-500">Country</span>
                  <span className="text-white">India</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-zinc-500">Land Cover</span>
                  <span className="text-white">Urban</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 mb-3">Retrieved Matches</h2>
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {[
                  '28.4°N, 77.1°E - Agricultural',
                  '28.6°N, 77.3°E - Forest',
                  '28.3°N, 77.0°E - Water Body',
                  '28.5°N, 77.2°E - Urban',
                  '28.7°N, 77.4°E - Mixed',
                ].map((loc, i) => (
                  <div key={i} className="text-xs text-zinc-300 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
                    {loc}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300 mb-3">Map State</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The old route was only rendering a static placeholder. This page now uses the interactive globe-to-map surface as the active map view with a layered background.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl p-4 shrink-0">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span>Query Location: 28.5°N, 77.2°E</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
              <span>Retrieved Locations: 5 results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MapPage() {
  return (
    <SidebarLayout>
      <MapContent />
    </SidebarLayout>
  );
}

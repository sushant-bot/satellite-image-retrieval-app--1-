'use client';

import { SidebarLayout } from '@/components/sidebar-layout';
import Link from 'next/link';

function ResultsContent() {
  const mockResults = [
    { id: 1, rank: 1, similarity: 0.95, modality: 'SAR', landcover: 'Urban', coords: '28.5°N, 77.2°E', season: 'Winter', sensor: 'Sentinel-1', date: '2024-01-15' },
    { id: 2, rank: 2, similarity: 0.92, modality: 'Optical', landcover: 'Agricultural', coords: '28.4°N, 77.1°E', season: 'Winter', sensor: 'Sentinel-2', date: '2024-01-14' },
    { id: 3, rank: 3, similarity: 0.89, modality: 'Multispectral', landcover: 'Forest', coords: '28.6°N, 77.3°E', season: 'Winter', sensor: 'Landsat-8', date: '2024-01-13' },
    { id: 4, rank: 4, similarity: 0.86, modality: 'SAR', landcover: 'Water Body', coords: '28.3°N, 77.0°E', season: 'Winter', sensor: 'Sentinel-1', date: '2024-01-12' },
    { id: 5, rank: 5, similarity: 0.83, modality: 'Optical', landcover: 'Urban', coords: '28.5°N, 77.2°E', season: 'Autumn', sensor: 'Sentinel-2', date: '2024-01-11' },
  ];

  return (
    <div className="bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold tracking-tight">Retrieval Results</h1>
          <div className="flex items-center gap-4">
            <button className="text-sm text-zinc-400 hover:text-white transition">Filters</button>
            <button className="text-sm text-zinc-400 hover:text-white transition">Export</button>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 max-w-6xl">
        {/* Query Info Panel */}
        <div className="mb-8 p-6 border border-zinc-800 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Query Image */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide">Query Image</h3>
              <div className="w-full h-40 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
                <span className="text-zinc-500">Query Image Preview</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Modality:</span>
                  <span className="text-white">Optical</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Resolution:</span>
                  <span className="text-white">512x512</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Embedding Size:</span>
                  <span className="text-white">512D</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Retrieval Time:</span>
                  <span className="text-white">45 ms</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide">Results Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-zinc-800 rounded-lg">
                  <p className="text-xs text-zinc-500 mb-2">Total Results</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-lg">
                  <p className="text-xs text-zinc-500 mb-2">Top Similarity</p>
                  <p className="text-2xl font-bold">0.95</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-lg">
                  <p className="text-xs text-zinc-500 mb-2">Avg Similarity</p>
                  <p className="text-2xl font-bold">0.89</p>
                </div>
                <div className="p-4 border border-zinc-800 rounded-lg">
                  <p className="text-xs text-zinc-500 mb-2">Query Time</p>
                  <p className="text-2xl font-bold">45 ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Retrieved Images</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockResults.map((result) => (
              <div key={result.id} className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/50 transition group">
                {/* Image Placeholder */}
                <div className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm">Result #{result.rank}</span>
                </div>

                {/* Rank & Similarity */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-zinc-800 px-2 py-1 rounded">#{result.rank}</span>
                    <span className="text-sm font-semibold">{(result.similarity * 100).toFixed(0)}%</span>
                  </div>
                  <span className="text-xs text-zinc-500">{result.modality}</span>
                </div>

                {/* Metadata */}
                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Land Cover:</span>
                    <span className="text-white">{result.landcover}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Sensor:</span>
                    <span className="text-white">{result.sensor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Date:</span>
                    <span className="text-white">{result.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Coords:</span>
                    <span className="text-white text-right">{result.coords}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border border-zinc-700 text-xs font-medium rounded hover:bg-zinc-800 transition">
                    View
                  </button>
                  <Link href="/compare" className="flex-1 px-3 py-2 border border-zinc-700 text-xs font-medium rounded hover:bg-zinc-800 transition text-center">
                    Compare
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <SidebarLayout>
      <ResultsContent />
    </SidebarLayout>
  );
}

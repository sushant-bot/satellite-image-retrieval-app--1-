'use client';

import { SidebarLayout } from '@/components/sidebar-layout';

function AnalyticsContent() {
  return (
    <div className="bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold tracking-tight">Analytics Dashboard</h1>
          <select className="text-sm bg-zinc-800 border border-zinc-700 rounded px-3 py-1 text-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>All time</option>
          </select>
        </div>
      </header>

      <div className="px-6 py-8 max-w-6xl">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Images Indexed', value: '1.2M', change: '+12%' },
            { label: 'Total Queries', value: '45.8K', change: '+8%' },
            { label: 'Avg Response Time', value: '45ms', change: '-5%' },
            { label: 'Current Model', value: 'ResNet50', change: 'Active' },
          ].map((metric, i) => (
            <div key={i} className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wide mb-2">{metric.label}</p>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">{metric.value}</p>
                <span className="text-xs text-zinc-400">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Query History */}
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Query Distribution</h3>
            <div className="space-y-3">
              {[
                { label: 'Cross-Modal', count: 2450, pct: 65 },
                { label: 'Same-Modal', count: 980, pct: 26 },
                { label: 'Hybrid', count: 370, pct: 9 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-300">{item.label}</span>
                    <span className="text-white font-medium">{item.count} ({item.pct}%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modality Usage */}
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Modality Usage</h3>
            <div className="space-y-3">
              {[
                { label: 'Optical', count: 1840, pct: 50 },
                { label: 'SAR', count: 1380, pct: 37 },
                { label: 'Multispectral', count: 580, pct: 13 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-300">{item.label}</span>
                    <span className="text-white font-medium">{item.count} ({item.pct}%)</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Database Info */}
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Database</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Total Size</span>
                <span className="text-white font-medium">2.1 TB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Images Indexed</span>
                <span className="text-white font-medium">1,200,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Vector Index</span>
                <span className="text-white font-medium">FAISS (IVF)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Embedding Dimension</span>
                <span className="text-white font-medium">512</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Last Updated</span>
                <span className="text-white font-medium">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Model Info */}
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Model</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Current Model</span>
                <span className="text-white font-medium">ResNet50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Training Loss</span>
                <span className="text-white font-medium">0.032</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Validation Accuracy</span>
                <span className="text-white font-medium">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Parameters</span>
                <span className="text-white font-medium">25.5M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Last Trained</span>
                <span className="text-white font-medium">1 week ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Queries Timeline */}
        <div className="border border-zinc-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Recent Queries</h3>
          <div className="space-y-3">
            {[
              { time: '2024-01-15 14:32', type: 'Cross-Modal', mode: 'Optical → SAR', k: 10, duration: '42ms' },
              { time: '2024-01-15 14:28', type: 'Same-Modal', mode: 'Optical', k: 5, duration: '38ms' },
              { time: '2024-01-15 14:15', type: 'Cross-Modal', mode: 'SAR → Multispectral', k: 20, duration: '51ms' },
              { time: '2024-01-15 13:58', type: 'Hybrid', mode: 'All', k: 15, duration: '48ms' },
              { time: '2024-01-15 13:42', type: 'Same-Modal', mode: 'Multispectral', k: 10, duration: '40ms' },
            ].map((query, i) => (
              <div key={i} className="flex items-center justify-between text-sm p-3 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold bg-zinc-800 px-2 py-1 rounded">{query.type}</span>
                    <span className="text-white">{query.mode}</span>
                    <span className="text-zinc-500">Top-{query.k}</span>
                  </div>
                  <p className="text-xs text-zinc-500">{query.time}</p>
                </div>
                <span className="text-xs font-medium text-zinc-300">{query.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <SidebarLayout>
      <AnalyticsContent />
    </SidebarLayout>
  );
}

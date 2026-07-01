'use client';

import { SidebarLayout } from '@/components/sidebar-layout';
import { useState } from 'react';

function CompareContent() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold tracking-tight">Image Comparison</h1>
          <button className="text-sm text-zinc-400 hover:text-white transition">Close</button>
        </div>
      </header>

      <div className="px-6 py-8 max-w-6xl">
        {/* Before/After Slider */}
        <div className="mb-8 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Visual Comparison</h3>
          <div className="relative w-full h-96 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            {/* Left image */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <span className="text-zinc-500">Query Image</span>
            </div>

            {/* Right image with slider */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderValue}%` }}
            >
              <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                <span className="text-zinc-500">Retrieved Image</span>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
              style={{ left: `${sliderValue}%` }}
              onMouseDown={(e) => {
                const startX = e.clientX;
                const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const newX = moveEvent.clientX - rect.left;
                  const newValue = (newX / rect.width) * 100;
                  setSliderValue(Math.max(0, Math.min(100, newValue)));
                };
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">&lt;&gt;</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-zinc-500">Drag the slider to compare images</p>
        </div>

        {/* Metadata Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Query Image Metadata */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Query Image</h3>
            <div className="border border-zinc-800 rounded-lg p-6 space-y-3">
              {[
                { label: 'Modality', value: 'Optical' },
                { label: 'Resolution', value: '512x512' },
                { label: 'Sensor', value: 'Sentinel-2' },
                { label: 'Date', value: '2024-01-15' },
                { label: 'Coordinates', value: '28.5°N, 77.2°E' },
                { label: 'Season', value: 'Winter' },
                { label: 'Land Cover', value: 'Urban' },
                { label: 'Image ID', value: 'IMG_001' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Retrieved Image Metadata */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Retrieved Image</h3>
            <div className="border border-zinc-800 rounded-lg p-6 space-y-3">
              {[
                { label: 'Modality', value: 'SAR' },
                { label: 'Resolution', value: '512x512' },
                { label: 'Sensor', value: 'Sentinel-1' },
                { label: 'Date', value: '2024-01-14' },
                { label: 'Coordinates', value: '28.4°N, 77.1°E' },
                { label: 'Season', value: 'Winter' },
                { label: 'Land Cover', value: 'Urban' },
                { label: 'Image ID', value: 'IMG_002' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Similarity Analysis */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Similarity Analysis</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 mb-2">Cosine Similarity</p>
              <p className="text-3xl font-bold">0.95</p>
              <div className="mt-2 w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 mb-2">Euclidean Distance</p>
              <p className="text-3xl font-bold">0.12</p>
              <div className="mt-2 w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4">
              <p className="text-xs text-zinc-500 mb-2">Dot Product</p>
              <p className="text-3xl font-bold">0.89</p>
              <div className="mt-2 w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <SidebarLayout>
      <CompareContent />
    </SidebarLayout>
  );
}

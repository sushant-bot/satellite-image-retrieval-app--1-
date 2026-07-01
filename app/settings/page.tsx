'use client';

import { SidebarLayout } from '@/components/sidebar-layout';
import { useState } from 'react';

function SettingsContent() {
  const [theme, setTheme] = useState('dark');
  const [model, setModel] = useState('resnet50');
  const [topK, setTopK] = useState('10');
  const [metric, setMetric] = useState('cosine');

  return (
    <div className="bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold tracking-tight">Settings</h1>
        </div>
      </header>

      <div className="px-6 py-8 max-w-2xl">
        {/* Theme Settings */}
        <div className="mb-8 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">Appearance</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-3 block">Theme</label>
              <div className="flex gap-3">
                {[
                  { value: 'dark', label: 'Dark' },
                  { value: 'light', label: 'Light' },
                  { value: 'auto', label: 'Auto' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={option.value}
                      checked={theme === option.value}
                      onChange={(e) => setTheme(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Retrieval Settings */}
        <div className="mb-8 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">Retrieval Model</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-3 block">Feature Extraction Model</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
              >
                <option value="resnet50">ResNet50</option>
                <option value="efficientnet">EfficientNet</option>
                <option value="vit">Vision Transformer</option>
                <option value="dinov2">DINOv2</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Default Top-K Results</label>
              <select
                value={topK}
                onChange={(e) => setTopK(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Similarity Metric</label>
              <select
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
              >
                <option value="cosine">Cosine Similarity</option>
                <option value="euclidean">Euclidean Distance</option>
                <option value="dot">Dot Product</option>
              </select>
            </div>
          </div>
        </div>

        {/* Query Preferences */}
        <div className="mb-8 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">Query Preferences</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm">Enable auto-search on image upload</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm">Show similar images suggestions</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Enable cross-modal search by default</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm">Save search history</span>
            </label>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="mb-8 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">Advanced</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-3 block">Embedding Dimension</label>
              <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm">
                512D (Fixed)
              </div>
              <p className="text-xs text-zinc-500 mt-2">Dimension of feature embeddings used for similarity computation</p>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Vector Index Type</label>
              <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm">
                FAISS (IVF) (Fixed)
              </div>
              <p className="text-xs text-zinc-500 mt-2">Indexing method for fast similarity search</p>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">API Rate Limit</label>
              <select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm">
                <option>100 requests/minute</option>
                <option>500 requests/minute</option>
                <option>1000 requests/minute</option>
              </select>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                defaultValue="user@example.com"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
                disabled
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">API Key</label>
              <div className="flex gap-2">
                <input
                  type="password"
                  defaultValue="••••••••••••••••"
                  className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
                  disabled
                />
                <button className="px-4 py-2 border border-zinc-700 rounded text-sm hover:bg-zinc-900 transition">
                  Reset
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <button className="px-4 py-2 border border-red-700/50 text-red-400 text-sm rounded hover:bg-red-950/20 transition">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <SidebarLayout>
      <SettingsContent />
    </SidebarLayout>
  );
}

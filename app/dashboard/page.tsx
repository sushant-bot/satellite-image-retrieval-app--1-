'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ImageUpload from '@/components/image-upload';
import { AppSidebar } from '@/components/app-sidebar';

export default function DashboardPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [searchType, setSearchType] = useState('cross-modal');
  const [queryModality, setQueryModality] = useState('optical');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSearch = () => {
    if (!uploadedImage) {
      alert('Please upload an image first');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  const sampleImages = [
    { src: '/images/sample-optical-1.png', type: 'Optical' },
    { src: '/images/sample-sar-1.png', type: 'SAR' },
    { src: '/images/sample-multispectral-1.png', type: 'Multispectral' },
  ];

  const resultImages = [
    { src: '/images/result-sar-1.png', type: 'SAR', score: 0.92, rank: 1 },
    { src: '/images/result-optical-1.png', type: 'Optical', score: 0.89, rank: 2 },
    { src: '/images/result-optical-2.png', type: 'Optical', score: 0.86, rank: 3 },
    { src: '/images/result-optical-3.png', type: 'Optical', score: 0.83, rank: 4 },
    { src: '/images/sample-multispectral-1.png', type: 'Optical', score: 0.81, rank: 5 },
  ];

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white">Satellite Image Retrieval</h1>
            <p className="text-sm text-zinc-400">Search across Optical, SAR & Multispectral images</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-zinc-400 hover:text-white transition">Dark Mode</button>
            <button className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-sm">U</button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Step 1: Select Search Type */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold text-white mb-6">1. Select Search Type</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Cross-Modal Option */}
                <button
                  onClick={() => setSearchType('cross-modal')}
                  className={`p-6 rounded-lg border-2 text-left transition ${
                    searchType === 'cross-modal'
                      ? 'border-blue-600 bg-blue-600/10'
                      : 'border-zinc-700 bg-zinc-900/50 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-white mb-1">Cross-Modal Search</h3>
                      <p className="text-sm text-zinc-400">Search similar images across different sensor types (Optical ↔ SAR)</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      searchType === 'cross-modal' ? 'border-blue-600 bg-blue-600' : 'border-zinc-600'
                    }`}>
                      {searchType === 'cross-modal' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </div>
                </button>

                {/* Same-Modal Option */}
                <button
                  onClick={() => setSearchType('same-modal')}
                  className={`p-6 rounded-lg border-2 text-left transition ${
                    searchType === 'same-modal'
                      ? 'border-blue-600 bg-blue-600/10'
                      : 'border-zinc-700 bg-zinc-900/50 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-white mb-1">Same-Modal Search</h3>
                      <p className="text-sm text-zinc-400">Search similar images within the same sensor type (Optical ↔ Optical or SAR ↔ SAR)</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      searchType === 'same-modal' ? 'border-blue-600 bg-blue-600' : 'border-zinc-600'
                    }`}>
                      {searchType === 'same-modal' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column: Upload & Search */}
              <div className="space-y-8">
                {/* Step 2: Select Query Image */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-6">2. Select Query Image & Sensor Type</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">Upload Query Image</label>
                      <ImageUpload onImageChange={setUploadedImage} uploadedImage={uploadedImage} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">Select Sensor Type</label>
                      <select
                        value={queryModality}
                        onChange={(e) => setQueryModality(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm hover:border-zinc-600 focus:border-blue-600 outline-none transition cursor-pointer"
                      >
                        <option value="optical">Optical</option>
                        <option value="sar">SAR</option>
                        <option value="multispectral">Multispectral</option>
                      </select>
                    </div>
                    <Button
                      onClick={handleSearch}
                      disabled={!uploadedImage || isProcessing}
                      className="w-full py-2.5 bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition disabled:opacity-50"
                    >
                      {isProcessing ? 'Processing...' : 'Search Similar Images'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Sample Images */}
              <div className="lg:col-span-2">
                <h2 className="text-lg font-semibold text-white mb-6">Sample Query Images</h2>
                <div className="grid grid-cols-3 gap-4">
                  {sampleImages.map((img, i) => (
                    <div key={i} className="space-y-2">
                      <div className="w-full h-32 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700">
                        <Image
                          src={img.src}
                          alt={img.type}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-zinc-300 text-center font-medium">{img.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top 5 Similar Images */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Top 5 Similar Images</h2>
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                  View Top 10
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {resultImages.map((img, i) => (
                  <div key={i} className="space-y-3">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 group">
                      <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center z-10">
                        {img.rank}
                      </div>
                      <Image
                        src={img.src}
                        alt={`Result ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover group-hover:opacity-80 transition"
                      />
                      <div className="absolute bottom-2 right-2 bg-blue-600/90 text-white px-2 py-1 rounded text-xs font-medium">
                        {img.type}
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 text-center">Similarity Score: {img.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

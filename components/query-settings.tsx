'use client';

interface QuerySettingsProps {
  queryModality: string;
  setQueryModality: (value: string) => void;
  retrievalMode: string;
  setRetrievalMode: (value: string) => void;
  targetModalities: string[];
  setTargetModalities: (value: string[]) => void;
  topK: number;
  setTopK: (value: number) => void;
  similarityMetric: string;
  setSimilarityMetric: (value: string) => void;
}

export default function QuerySettings({
  queryModality,
  setQueryModality,
  retrievalMode,
  setRetrievalMode,
  targetModalities,
  setTargetModalities,
  topK,
  setTopK,
  similarityMetric,
  setSimilarityMetric,
}: QuerySettingsProps) {
  const toggleModality = (modality: string) => {
    const next = targetModalities.includes(modality)
      ? targetModalities.filter((m) => m !== modality)
      : [...targetModalities, modality];
    setTargetModalities(next);
  };

  const SettingSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-2 pb-4 border-b border-zinc-800 last:border-b-0">
      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide">{title}</label>
      {children}
    </div>
  );

  return (
    <div className="space-y-0 p-4 rounded-lg bg-zinc-900 border border-zinc-800">
      {/* Query Modality */}
      <SettingSection title="Query Modality">
        <div className="space-y-1.5">
          {['optical', 'sar', 'multispectral'].map((modality) => (
            <label key={modality} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="queryModality"
                value={modality}
                checked={queryModality === modality}
                onChange={(e) => setQueryModality(e.target.value)}
                className="w-3.5 h-3.5 accent-white"
              />
              <span className="text-sm text-zinc-300 capitalize">
                {modality === 'sar' ? modality.toUpperCase() : modality.charAt(0).toUpperCase() + modality.slice(1)}
              </span>
            </label>
          ))}
        </div>
      </SettingSection>

      {/* Retrieval Mode */}
      <SettingSection title="Retrieval Mode">
        <select
          value={retrievalMode}
          onChange={(e) => setRetrievalMode(e.target.value)}
          className="w-full px-2.5 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-white text-sm hover:border-zinc-600 focus:border-white outline-none transition cursor-pointer"
        >
          <option value="cross-modal">Cross-Modal</option>
          <option value="same-modal">Same Modal</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </SettingSection>

      {/* Target Modalities */}
      <SettingSection title="Search In">
        <div className="space-y-1.5">
          {[
            { id: 'optical', label: 'Optical' },
            { id: 'sar', label: 'SAR' },
            { id: 'multispectral', label: 'Multispectral' },
          ].map((modality) => (
            <label key={modality.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={targetModalities.includes(modality.id)}
                onChange={() => toggleModality(modality.id)}
                className="w-3.5 h-3.5 rounded accent-white"
              />
              <span className="text-sm text-zinc-300">
                {modality.label}
              </span>
            </label>
          ))}
        </div>
      </SettingSection>

      {/* Top K */}
      <SettingSection title="Return Top">
        <select
          value={topK}
          onChange={(e) => setTopK(Number(e.target.value))}
          className="w-full px-2.5 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-white text-sm hover:border-zinc-600 focus:border-white outline-none transition cursor-pointer"
        >
          <option value={5}>5 results</option>
          <option value={10}>10 results</option>
          <option value={20}>20 results</option>
        </select>
      </SettingSection>

      {/* Similarity Metric */}
      <SettingSection title="Similarity Metric">
        <select
          value={similarityMetric}
          onChange={(e) => setSimilarityMetric(e.target.value)}
          className="w-full px-2.5 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-white text-sm hover:border-zinc-600 focus:border-white outline-none transition cursor-pointer"
        >
          <option value="cosine">Cosine</option>
          <option value="euclidean">Euclidean</option>
          <option value="dot">Dot Product</option>
        </select>
      </SettingSection>
    </div>
  );
}

import { X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export default function UIOverlay() {
  const { isModalOpen, activeProfile, closeProfile } = useAppStore();

  // If the modal state is false, render nothing in this layer
  if (!isModalOpen || !activeProfile) return null;

  return (
    <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center p-4">
      {/* The Event Modal Card (pointer-events-auto makes it clickable) */}
      <div className="pointer-events-auto relative w-full max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl p-5 transition-colors">
        
        <button 
          onClick={closeProfile}
          className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <X size={20} stroke="currentColor" />
        </button>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 pr-6">
          {activeProfile.name}
        </h2>
        
        <div className="whitespace-pre-line text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl">
          {activeProfile.status}
        </div>

        <button className="mt-5 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 rounded-xl transition-colors">
          View All Events
        </button>
      </div>
    </div>
  );
}
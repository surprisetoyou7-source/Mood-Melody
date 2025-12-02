import React, { useState, useEffect } from 'react';
import { Camera, Music, Smile, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Mood, Playlist, Track } from './types';
import { PLAYLISTS } from './constants';
import CameraComponent from './components/Camera';
import MusicPlayer from './components/MusicPlayer';
import { detectMoodFromImage } from './services/geminiService';

const App: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<Mood>(Mood.NEUTRAL);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>(PLAYLISTS[Mood.NEUTRAL]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showMoodSelector, setShowMoodSelector] = useState(false);

  // Initialize with neutral
  useEffect(() => {
    updateMood(Mood.NEUTRAL);
  }, []);

  const updateMood = (mood: Mood) => {
    setCurrentMood(mood);
    const playlist = PLAYLISTS[mood];
    setCurrentPlaylist(playlist);
    setCurrentTrackIndex(0);
    // Don't auto-play immediately on load, but auto-play after detection
  };

  const handleCapture = async (base64Image: string) => {
    setIsCameraOpen(false);
    setIsAnalyzing(true);
    
    try {
      const detectedMood = await detectMoodFromImage(base64Image);
      updateMood(detectedMood);
      setIsPlaying(true);
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % currentPlaylist.tracks.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + currentPlaylist.tracks.length) % currentPlaylist.tracks.length);
  };

  const currentTrack = currentPlaylist.tracks[currentTrackIndex];

  // Dynamic background based on mood accent color
  const bgGradient = `bg-gradient-to-br ${currentPlaylist.accentColor}`;

  return (
    <div className={`relative h-screen w-full overflow-hidden transition-colors duration-1000 bg-slate-900`}>
      {/* Background Ambience */}
      <div className={`absolute inset-0 opacity-40 ${bgGradient} blur-3xl transition-all duration-1000 scale-150 animate-pulse`}></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 h-full flex flex-col max-w-md mx-auto bg-black/20 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 flex justify-between items-center glass m-4 rounded-2xl">
          <div className="flex flex-col">
            <span className="text-xs text-white/60 uppercase tracking-widest font-semibold mb-1">Detected Mood</span>
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setShowMoodSelector(!showMoodSelector)}
            >
              <span className="text-2xl">{currentPlaylist.emoji}</span>
              <span className="text-xl font-bold text-white">{currentMood}</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded ml-2 group-hover:bg-white/20 transition">Edit</span>
            </div>
          </div>
          <button 
            onClick={() => setIsCameraOpen(true)}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Camera className="text-white" size={24} />
          </button>
        </div>

        {/* Manual Mood Selector (Overlay) */}
        {showMoodSelector && (
          <div className="absolute top-24 left-4 right-4 z-40 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-4">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-white font-semibold">Select Mood</h3>
               <button onClick={() => setShowMoodSelector(false)} className="text-white/50 hover:text-white">Close</button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(PLAYLISTS) as Mood[]).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    updateMood(m);
                    setIsPlaying(true);
                    setShowMoodSelector(false);
                  }}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all ${currentMood === m ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                  <span className="text-2xl mb-1">{PLAYLISTS[m].emoji}</span>
                  <span className="text-xs font-medium">{m}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Analysis Loading State */}
        {isAnalyzing && (
          <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center">
             <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 animate-pulse rounded-full"></div>
                <Loader2 size={64} className="text-white animate-spin relative z-10" />
             </div>
             <p className="text-white mt-6 font-medium animate-pulse">Analyzing your vibe...</p>
          </div>
        )}

        {/* Music Player */}
        <MusicPlayer 
          track={currentTrack}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrev={handlePrev}
        />

      </div>

      {/* Camera Modal */}
      {isCameraOpen && (
        <CameraComponent 
          onCapture={handleCapture} 
          onClose={() => setIsCameraOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
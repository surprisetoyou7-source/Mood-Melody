export enum Mood {
  HAPPY = 'Happy',
  SAD = 'Sad',
  CALM = 'Calm',
  ENERGETIC = 'Energetic',
  SURPRISED = 'Surprised',
  NEUTRAL = 'Neutral'
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: number; // in seconds
  genre: string;
}

export interface Playlist {
  mood: Mood;
  tracks: Track[];
  accentColor: string;
  emoji: string;
}

export interface MoodAnalysisResult {
  mood: Mood;
  confidence: number;
}

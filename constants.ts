import { Mood, Playlist } from './types';

export const PLAYLISTS: Record<Mood, Playlist> = {
  [Mood.HAPPY]: {
    mood: Mood.HAPPY,
    emoji: '😁',
    accentColor: 'from-yellow-400 to-orange-500',
    tracks: [
      { id: '1', title: 'Walking on Sunshine', artist: 'Katrina & The Waves', coverUrl: 'https://picsum.photos/id/10/400/400', duration: 238, genre: 'Pop' },
      { id: '2', title: 'Happy', artist: 'Pharrell Williams', coverUrl: 'https://picsum.photos/id/11/400/400', duration: 233, genre: 'Pop' },
      { id: '3', title: 'Good Times', artist: 'Chic', coverUrl: 'https://picsum.photos/id/12/400/400', duration: 214, genre: 'Disco' },
    ]
  },
  [Mood.SAD]: {
    mood: Mood.SAD,
    emoji: '😢',
    accentColor: 'from-blue-600 to-indigo-800',
    tracks: [
      { id: '4', title: 'Someone Like You', artist: 'Adele', coverUrl: 'https://picsum.photos/id/20/400/400', duration: 285, genre: 'Ballad' },
      { id: '5', title: 'Fix You', artist: 'Coldplay', coverUrl: 'https://picsum.photos/id/21/400/400', duration: 295, genre: 'Alternative' },
      { id: '6', title: 'Yesterday', artist: 'The Beatles', coverUrl: 'https://picsum.photos/id/22/400/400', duration: 125, genre: 'Classic' },
    ]
  },
  [Mood.CALM]: {
    mood: Mood.CALM,
    emoji: '😌',
    accentColor: 'from-teal-400 to-emerald-600',
    tracks: [
      { id: '7', title: 'Weightless', artist: 'Marconi Union', coverUrl: 'https://picsum.photos/id/30/400/400', duration: 480, genre: 'Ambient' },
      { id: '8', title: 'River Flows in You', artist: 'Yiruma', coverUrl: 'https://picsum.photos/id/31/400/400', duration: 185, genre: 'Piano' },
      { id: '9', title: 'Gymnopédie No.1', artist: 'Erik Satie', coverUrl: 'https://picsum.photos/id/32/400/400', duration: 210, genre: 'Classical' },
    ]
  },
  [Mood.ENERGETIC]: {
    mood: Mood.ENERGETIC,
    emoji: '⚡',
    accentColor: 'from-red-500 to-rose-600',
    tracks: [
      { id: '10', title: 'Eye of the Tiger', artist: 'Survivor', coverUrl: 'https://picsum.photos/id/40/400/400', duration: 245, genre: 'Rock' },
      { id: '11', title: 'Titanium', artist: 'David Guetta', coverUrl: 'https://picsum.photos/id/41/400/400', duration: 245, genre: 'EDM' },
      { id: '12', title: 'Can\'t Hold Us', artist: 'Macklemore', coverUrl: 'https://picsum.photos/id/42/400/400', duration: 258, genre: 'Hip Hop' },
    ]
  },
  [Mood.SURPRISED]: {
    mood: Mood.SURPRISED,
    emoji: '😲',
    accentColor: 'from-purple-500 to-pink-500',
    tracks: [
      { id: '13', title: 'Bohemian Rhapsody', artist: 'Queen', coverUrl: 'https://picsum.photos/id/50/400/400', duration: 355, genre: 'Rock Opera' },
      { id: '14', title: 'Take Five', artist: 'Dave Brubeck', coverUrl: 'https://picsum.photos/id/51/400/400', duration: 324, genre: 'Jazz' },
      { id: '15', title: 'Space Oddity', artist: 'David Bowie', coverUrl: 'https://picsum.photos/id/52/400/400', duration: 315, genre: 'Rock' },
    ]
  },
  [Mood.NEUTRAL]: {
    mood: Mood.NEUTRAL,
    emoji: '😐',
    accentColor: 'from-gray-500 to-slate-700',
    tracks: [
      { id: '16', title: 'Sunday Morning', artist: 'Maroon 5', coverUrl: 'https://picsum.photos/id/60/400/400', duration: 244, genre: 'Pop' },
      { id: '17', title: 'Dreams', artist: 'Fleetwood Mac', coverUrl: 'https://picsum.photos/id/61/400/400', duration: 257, genre: 'Soft Rock' },
    ]
  }
};
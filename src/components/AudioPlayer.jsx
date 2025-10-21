// components/AudioPlayer.js
import React, { useState, useRef } from "react";
import song1 from "../assets/Happy_Diwali_Full_Song_Film_Home_Delivery_Aapko_Ghar_Tak.mp3";
import song2 from "../assets/shubh_din_lyrical_parmanu_john_abraham_diana_jyotica_tangri_ke.mp3";
import song3 from "../assets/आल_दवळ_Aali_Diwali_Official_Song_Superhit_Diwali_Song_Sa.mp3";

const AudioPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  const songs = [
    {
      id: 1,
      title: "🎶 Happy Diwali – Home Delivery",
      artist: "Bollywood Diwali Special",
      src: song1,
      description:
        "A vibrant Bollywood track perfect for kicking off your Diwali celebrations with energy and fun.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "🌟 Shubh Din – Parmanu",
      artist: "John Abraham, Diana Jyotica",
      src: song2,
      description:
        "This uplifting song celebrates auspicious beginnings and is ideal for Diwali puja or family gatherings.",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 3,
      title: "💥 Aali Diwali – Marathi Superhit",
      artist: "Traditional Marathi",
      src: song3,
      description:
        "A high-energy Marathi song that captures the traditional spirit of Diwali with dhol, taasha, and festive fervor.",
      color: "from-red-400 to-pink-500",
    },
  ];

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(song);
      setTimeout(() => {
        audioRef.current.play();
        setIsPlaying(true);
      }, 100);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 diwali-gradient-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-yellow-700 mb-4 font-serif">
            🪔 Diwali Melodies
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Light up your Diwali with these festive tracks that bring joy,
            tradition, and celebration to life!
          </p>
        </div>

        {/* Now Playing */}
        {currentSong && (
          <div className="glass-effect rounded-2xl p-6 mb-8 shadow-2xl border border-white/30 animate-slide-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentSong.color} flex items-center justify-center text-white text-2xl animate-pulse`}
                >
                  {isPlaying ? "🎵" : "⏸️"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {currentSong.title}
                  </h3>
                  <p className="text-gray-600">{currentSong.artist}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">🔊</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  Volume: {Math.round(volume * 100)}%
                </div>
              </div>
            </div>
            <audio
              ref={audioRef}
              src={currentSong.src}
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />
          </div>
        )}

        {/* Songs List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-yellow-200 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${song.color}`}></div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${song.color} flex items-center justify-center text-white text-xl mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {song.id === 1 ? "🎶" : song.id === 2 ? "🌟" : "💥"}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {song.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{song.artist}</p>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {song.description}
                </p>

                <button
                  onClick={() => playSong(song)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentSong?.id === song.id && isPlaying
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : `bg-gradient-to-r ${song.color} text-white hover:shadow-lg`
                  }`}
                >
                  {currentSong?.id === song.id && isPlaying ? (
                    <span className="flex items-center justify-center">
                      ⏸️ Pause
                    </span>
                  ) : currentSong?.id === song.id ? (
                    <span className="flex items-center justify-center">
                      ▶️ Resume
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      🎵 Play Now
                    </span>
                  )}
                </button>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Music Visualizer */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-8 bg-gradient-to-t from-yellow-400 to-orange-500 rounded-full animate-bounce-gentle"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
            <p className="text-gray-700 font-semibold">
              Feel the Diwali Rhythm! 🎶
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

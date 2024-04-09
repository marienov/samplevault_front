import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';

const AudioPlayer = ({ initialPlaylist }) => {
  const [playlist, setPlaylist] = useState(initialPlaylist);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);
  const howlRef = useRef(null);
  const seekRef = useRef(null);

  // Функция для инициализации и обновления Howl
  useEffect(() => {
    const sound = new Howl({
      src: [playlist[currentTrackIndex].src],
      html5: true,
      onplay: () => {
        setDuration(sound.duration());
        setIsPlaying(true);
      },
      onend: () => {
        playNext();
      }
    });

    howlRef.current = sound;

    // Автоматическое воспроизведение при изменении индекса трека, если плеер в состоянии воспроизведения
    if (isPlaying) {
      sound.play();
    }

    // Обновление прогресса воспроизведения
    const updateProgress = () => {
      setSeek(sound.seek());
      if (isPlaying) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      sound.stop();
      sound.unload();
    };
  }, [playlist, currentTrackIndex, isPlaying]);

  // Функции управления воспроизведением
  const play = () => {
    howlRef.current.play();
  };

  const pause = () => {
    howlRef.current.pause();
    setIsPlaying(false);
  };

  const playNext = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true); // Установка в true для автовоспроизведения следующего трека
  };

  const playPrev = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true); // Установка в true для автовоспроизведения предыдущего трека
  };

  // Функция для изменения положения трека
  const onSeek = (e) => {
    const time = (e.target.value * duration) / 100;
    howlRef.current.seek(time);
    setSeek(time);
  };

  // Функция для смены плейлиста и начального трека
  const changePlaylist = (newPlaylist, trackIndex = 0) => {
    setPlaylist(newPlaylist);
    setCurrentTrackIndex(trackIndex);
    setIsPlaying(true); // Установка в true для автовоспроизведения выбранного трека
  };

  return (
    <div className="audio-player">
      <div className="track-info">
        <div className="title">{playlist[currentTrackIndex].name}</div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={(seek / duration) * 100 || 0}
        onChange={onSeek}
        ref={seekRef}
        style={{ width: '100%' }}
      />
      <div className="audio-controls">
        <button onClick={playPrev}>Prev</button>
        {isPlaying ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button onClick={play}>Play</button>
        )}
        <button onClick={playNext}>Next</button>
      </div>
    </div>
  );
};

export default AudioPlayer;

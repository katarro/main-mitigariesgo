"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";
import Image from "next/image";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showThumbnail, setShowThumbnail] = useState(true);

  // Handlers siguiendo principios SOLID
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setShowThumbnail(false); // Ocultar miniatura cuando comience a reproducir
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipTime = (seconds: number): void => {
    if (!videoRef.current) return;

    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Event handlers para el video
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowThumbnail(true); // Mostrar miniatura cuando termine el video
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setShowThumbnail(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  // Formatear tiempo
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Handler específico para el click en la miniatura
  const handleThumbnailClick = () => {
    setShowThumbnail(false);
    togglePlayPause();
  };

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden group">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src="/media/video-demostrativo-2.mp4" type="video/mp4" />

        {/* Fallback para navegadores que no soporten el video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-corporate-orange-primary/20 dark:bg-info-500/30 rounded-full flex items-center justify-center mx-auto">
              <Play className="h-8 w-8 text-corporate-orange-primary dark:text-info-500" />
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-corporate-blue-primary dark:text-white">
                Proceso Zero Risk AI
              </div>
              <div className="text-sm text-corporate-blue-primary/70 dark:text-white/70">
                Video no disponible
              </div>
            </div>
          </div>
        </div>
      </video>

      {/* Miniatura personalizada - Solo se muestra cuando showThumbnail es true */}
      {showThumbnail && (
        <div className="absolute inset-0 bg-black rounded-xl overflow-hidden z-10">
          <Image
            src="/images/miniatura-video.png"
            alt="Vista previa del video - Proceso Zero Risk AI"
            className="w-full h-full object-cover"
            fill
          />

          {/* Overlay clickeable para reproducir */}
          <div
            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
            onClick={handleThumbnailClick}
          >
            <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg">
              <Play className="h-10 w-10 text-black ml-1" />
            </div>
          </div>
        </div>
      )}

      {/* Overlay de controles - Solo visible cuando NO hay miniatura */}
      {!showThumbnail && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Botón de play central (solo cuando está pausado) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlayPause}
                className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Play className="h-10 w-10 text-black ml-1" />
              </button>
            </div>
          )}

          {/* Controles inferiores */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
            {/* Barra de progreso */}
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleTimeChange}
                className="flex-1 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #f97316 0%, #f97316 ${
                    (currentTime / duration) * 100
                  }%, rgba(255,255,255,0.3) ${
                    (currentTime / duration) * 100
                  }%, rgba(255,255,255,0.3) 100%)`,
                }}
              />
              <span>{formatTime(duration)}</span>
            </div>

            {/* Controles principales */}
            <div className="flex items-center justify-between">
              {/* Controles izquierdos */}
              <div className="flex items-center space-x-3">
                {/* Skip atrás */}
                <button
                  onClick={() => skipTime(-10)}
                  className="p-2 text-white hover:text-corporate-orange-primary transition-colors duration-200"
                  title="Retroceder 10s"
                >
                  <SkipBack className="h-5 w-5" />
                </button>

                {/* Play/Pause */}
                <button
                  onClick={togglePlayPause}
                  className="p-2 text-white hover:text-corporate-orange-primary transition-colors duration-200"
                  title={isPlaying ? "Pausar" : "Reproducir"}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </button>

                {/* Skip adelante */}
                <button
                  onClick={() => skipTime(10)}
                  className="p-2 text-white hover:text-corporate-orange-primary transition-colors duration-200"
                  title="Adelantar 10s"
                >
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>

              {/* Controles derechos */}
              <div className="flex items-center space-x-3">
                {/* Control de volumen */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 text-white hover:text-corporate-orange-primary transition-colors duration-200"
                    title={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #f97316 ${
                        (isMuted ? 0 : volume) * 100
                      }%, rgba(255,255,255,0.3) ${
                        (isMuted ? 0 : volume) * 100
                      }%, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

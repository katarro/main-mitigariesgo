'use client';
import React from 'react';
import { X } from 'lucide-react';
import VideoPlayer from './video-player';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full p-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 text-white text-4xl"
        >
          <X size={34} />
        </button>
        <div className="relative w-full rounded-xl overflow-hidden shadow-inner bg-corporate-blue-primary/5 dark:bg-corporate-blue-secondary/30">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

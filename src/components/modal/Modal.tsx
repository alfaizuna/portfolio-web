'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import SuccessIcon from '../../../public/message-success.png';
import FailedIcon from '../../../public/message-failed.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, isSuccess }) => {
  // Lock scroll and handle ESC key when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Handle ESC key
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscapeKey);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscapeKey);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000]">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-[1001] overflow-hidden">
          {/* Top illustration section */}
          <div className={`relative flex items-center justify-center pt-8 pb-4 ${isSuccess ? 'bg-[#F3B64C]' : 'bg-[#E9EAEB]'}`} style={{ height: '200px' }}>
            <div className="relative z-2000">
              {isSuccess ? (
                <Image
                  src={SuccessIcon}
                  width={200}
                  height={200}
                  alt="Message Sent"
                  className="object-contain"
                />
              ) : (
                <Image
                  src={FailedIcon}
                  width={200}
                  height={200}
                  alt="Message Failed"
                  className="object-contain"
                />
              )}
            </div>
          </div>

          {/* Bottom content section */}
          <div className="px-8 py-8">
            {isSuccess ? (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Got Your Message!
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Really appreciate you reaching out. I'll be in touch soon.
                </p>
                
                <div className="pt-4">
                  <button 
                    onClick={onClose}
                    className="w-full py-4 px-6 rounded-full text-white font-semibold transition-all duration-200 bg-[#B76080] hover:bg-[#a0566f] focus:outline-none focus:ring-4 focus:ring-[#B76080]/30 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Message Failed to Send!
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Sorry about that. Please check your connection and try again.
                </p>

                <div className="pt-4">
                  <button 
                    onClick={onClose}
                    className="w-full py-4 px-6 rounded-full text-white font-semibold transition-all duration-200 bg-[#B76080] hover:bg-[#a0566f] focus:outline-none focus:ring-4 focus:ring-[#B76080]/30 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Try Again!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
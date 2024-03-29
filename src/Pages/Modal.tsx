import React from 'react';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-lg w-full rounded-lg relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-900">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

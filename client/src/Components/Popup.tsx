import React, { useEffect, useRef } from 'react';

export default function Popup({ isOpen, onClose, title, children }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      (dialog as HTMLDialogElement).showModal(); // Opens the native accessible modal backdrop
    } else {
      (dialog as HTMLDialogElement).close();
    }
  }, [isOpen]);

  // Handle browser escape key natively
  const handleCancel = (e: any) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog 
      ref={dialogRef} 
      onCancel={handleCancel}
      className="popup-dialog"
    >
      <div className="popup-header">
        <h3>{title}</h3>
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>
      <div className="popup-content">
        {children}
      </div>
    </dialog>
  );
}

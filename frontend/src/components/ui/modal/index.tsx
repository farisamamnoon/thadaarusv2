type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      <div className="bg-primary/40 absolute inset-0" onClick={onClose} />
      <div className="absolute top-10 bg-white rounded p-8 inset-x-1/3">
        {children}
      </div>
    </>
  );
};

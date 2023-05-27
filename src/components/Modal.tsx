import { ReactNode } from "react";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

export const Modal: React.FC<IModal> = ({ isOpen, setOpen, children }) => {
  const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    zIndex: 9999,
  };

  if (isOpen) {
    return (
      <div className="modal" style={modalStyle}>
        {children}
        <button onClick={() => setOpen(false)}>Fechar</button>
      </div>
    );
  } else {
    return null;
  }
};

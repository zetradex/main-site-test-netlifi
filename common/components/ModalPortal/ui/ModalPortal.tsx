import { createPortal } from "react-dom";
import { type MouseEvent, type ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import cls from "./ModalPortal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: (
    e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  children: ReactNode;
}

export const ModalPortal = ({ isOpen, onClose, children }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [modalChildren, setModalChildren] = useState<ReactNode>(children);

  useEffect(() => {
    setModalRoot(document.getElementById("modal"));
  }, []);

  useEffect(() => {
    if (isOpen) {
      setModalChildren(children);
    } else {
      setModalChildren(null);
    }
  }, [isOpen, children]);

  if (!modalRoot) {
    return null;
  }

  const handleClose = (
    e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>
  ) => {
    onClose(e);
    setModalChildren(null); // Очистка содержимого модального окна
  };

  return (
    <div>
      {createPortal(
        <div
          onClick={handleClose}
          className={classNames(cls.modalOverlay, {
            [cls.modalOpen]: isOpen,
          })}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={classNames(cls.modal, {
              [cls.modalContent]: isOpen,
            })}
          >
            <div>{modalChildren}</div>
          </div>
        </div>,
        modalRoot
      )}
    </div>
  );
};

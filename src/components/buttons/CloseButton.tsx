import React from "react";
import { X } from "react-bootstrap-icons";

interface Props {
  onClose: () => void;
}

const CloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <button onClick={onClose} className="button__cross shadow">
      <X height={24} width={24} fill="#98a4ac" />
    </button>
  );
};

export default CloseButton;

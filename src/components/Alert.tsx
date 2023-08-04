import { ReactNode } from "react";

interface AlertProps{
  children: ReactNode; //"children" is a special prop that all components support
  onClose: ()=>void;
}

const Alert = ({children,onClose}:AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      <h1>{children}</h1>
      <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;

import { ReactNode } from "react";

interface AlertProps{
  children: ReactNode; //"children" is a special prop that all components support
}

const Alert = ({children}:AlertProps) => {
  return (
    <div className="alert alert-primary">
      <h1>{children}</h1>
    </div>
  );
};

export default Alert;

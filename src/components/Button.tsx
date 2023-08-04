interface CustomButtonProps {
  children: string;
  color: string;
  onClick: () => void;
}

const CustomButton = ({ children,color, onClick }: CustomButtonProps) => {
  return (
    <button type="button" className={'btn btn-'+color+' btn-lg'} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;

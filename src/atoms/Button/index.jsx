const Button = ({ onFocus, style, children }) => {
  return (
    <button
      onFocus={onFocus}
      className={`${style} rounded-lg py-3 px-4 border flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;

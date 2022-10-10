// import "../../pages/dashboard/style.css";
const Button = ({ onFocus, style, children }) => {
  return (
    <button
      onFocus={onFocus}
      className={`${style} whitespace-nowrap lato rounded-lg py-3 px-4 sm:py-4 sm:px-6 border flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;

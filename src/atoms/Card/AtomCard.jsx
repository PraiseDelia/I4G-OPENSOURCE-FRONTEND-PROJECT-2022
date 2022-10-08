const AtomCard = ({ children, style }) => {
  return <div className={`rounded-lg ${style}`}>{children}</div>;
};

export default AtomCard;

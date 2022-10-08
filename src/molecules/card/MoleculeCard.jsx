import AtomCard from "../../atoms/Card/AtomCard";

const MoleculeCard = ({ image, alt, children }) => {
  return (
    <div>
      <AtomCard>
        <div className="basis-4/5">
          <img src={image} alt={alt} />
        </div>
        <div className="">{children}</div>
      </AtomCard>
    </div>
  );
};

export default MoleculeCard;

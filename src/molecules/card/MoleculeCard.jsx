import AtomCard from "../../atoms/Card/AtomCard";

const MoleculeCard = ({ image, alt, children }) => {
  return (
    <div className="px-5 mb-6 bg-white">
      <AtomCard style="border-2 border-neutral-color-300">
        <div className="basis-4/5 flex justify-center">
          <img src={image} alt={alt} className="w-full" />
        </div>
        <div className="flex py-6 px-7 items-center">{children}</div>
      </AtomCard>
    </div>
  );
};

export default MoleculeCard;

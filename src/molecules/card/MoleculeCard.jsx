import AtomCard from "../../atoms/Card/AtomCard";
import inactiveMessages from "../../atoms/Dashboard/inactive-messages.png";
const MoleculeCard = ({ image, imageStyle, alt, children, atomStyles }) => {
  return (
    <div className="mb-6 bg-white">
      <AtomCard style={`border-2 border-neutral-color-300 ${atomStyles}`}>
        <div className="basis-4/5 flex justify-center relative">
          <img src={image} alt={alt} className="w-full" />
          <div className="absolute w-full flex p-6">
            <div className="ml-auto">
              <button className="rounded-full bg-primary-color-50 p-2.5">
                <img
                  src={inactiveMessages}
                  alt="Message icon"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex py-6 px-7 lg:px-5 items-center">{children}</div>
      </AtomCard>
    </div>
  );
};

export default MoleculeCard;

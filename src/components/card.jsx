import "../styles/card.scss";

const card = ({ props }) => {
  return (
    <>
      {props.map((card,i) => (
        // eslint-disable-next-line react/jsx-key
        <div className="w-[350px] h-[590px] bg-transparent cursor-pointer group rounded-3xl perspective-1000" key={i} style= {{ padding: "0px 5px"}}>
          <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
            <div className="w-full h-full absolute rounded-3xl overflow-hidden">
              <div>
                <img src={card.img} className="w-full h-full" />
                <div className="flex flex-col space-y-5">{card.description}</div>
              </div>
            </div>
            <div className="absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden">
              <div>
                <span className="font-bold text-3xl">{card.title}</span>
              </div>

              <div className="flex flex-col space-y-5">
                <span>{card.description}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default card;

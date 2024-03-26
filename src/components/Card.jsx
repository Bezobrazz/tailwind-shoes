const Card = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-8">
        <h2 className="mb-10 text-2xl font-bold">{item.title}</h2>
        <a className="underline underline-offset-4 font-semibold">SHOP NOW +</a>
      </div>
      <img
        className="absolute top-5 left-[40%] h-40 w-26"
        src={item.src}
        alt={item.title}
      />
    </div>
  );
};

export default Card;

import Card from "./Card";

const NewArrivalsSection = ({ items }) => {
  return (
    <div className=" mt-20">
      <div className="flex-center mb-10">
        <h2 className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </h2>
      </div>
      <ul className="justify-between grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewArrivalsSection;

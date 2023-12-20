import CardItem from './card-item';

function CardGrid(props) {
  const { items } = props; // applied object destructring
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-2 md:gap-6 p-4 lg:p-20 xl:p-24">
      {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default CardGrid;

import Link from 'next/link';

function CardItem(props) {
  const { id, name, image } = props;
  const exploreLink = `/characters/${id}`;
  return (
    <div className="bg-gray-50 shadow-md shadow-gray-50 px-4 pt-4 pb-1 rounded-md">
      <div className="flex flex-col justify-between gap-2">
        <div>
          <img src={image} alt={`image-${name}`} />
          <h3 className="text-black text-xs md:text-base lg:text-lg">{name}</h3>
        </div>
        <div>
          <div className="flex flex-row justify-between text-black text-xs md:text-base lg:text-lg">
            <Link href={exploreLink}>Explore</Link>
            <button type="button">+Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

import client from '@/apolloClient';
import { gql } from '@apollo/client';

import CardGrid from '@/components/cards/card-grid';

export default function AllCharacters({ characters }) {
  return (
    <div className="mx-auto pt-6 lg:pt-16">
      <h1 className="text-lg md:text-xl lg:text-2xl text-center">
        Explore and Select Your Squad
      </h1>
      <CardGrid items={characters} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Characters {
        allPeople {
          id
          name
          gender
          height
          mass
          image
        }
      }
    `,
  });

  return {
    props: {
      characters: data?.allPeople,
    },
  };
}

import client from '@/apolloClient';
import { gql } from '@apollo/client';
import Link from 'next/link';

export default function CharacterDetailsPage({ characterDetails }) {
  const { name, height, mass, image } = characterDetails;
  return (
    <template className="flex flex-col gap-8 m-16 mx-auto md:ml-8 py-8 px-6 md:p-16 lg:p-32 border-2 w-fit shadow-md shadow-gray-50 rounded-lg">
      <div>
        <h1 className="text-base md:text-lg pb-6">{name}'s Profile</h1>
        <img src={image} alt={`details-${name}`} />
      </div>
      <div>
        {name && <p>Name: {name}</p>}
        {height && <p>Height: {height}</p>}
        {mass && <p>Mass: {height}</p>}
      </div>
      <Link
        href="/characters"
        className="bg-gray-300 text-black text-center rounded-md"
      >
        Back
      </Link>
    </template>
  );
}

// make a seperate async getData function to query one time that returned promise can be used in both getStaticProps and getStaticPath
async function getData() {
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
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const characterId = params?.charId;
  const data = await getData();
  const character = data?.allPeople.find((item) => item.id === characterId);

  if (!character) {
    return { notFound: true };
  }

  return {
    props: {
      characterDetails: character,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data?.allPeople.map((item) => item.id); // nullish operator
  const pathsWithParams = ids.map((id) => ({ params: { charId: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

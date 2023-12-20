export default function CharacterDetailsPage() {}

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

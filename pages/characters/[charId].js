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

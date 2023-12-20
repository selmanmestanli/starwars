import { gql, useMutation } from '@apollo/client';

const CREATE_SQUAD = gql`
  mutation createSquad($name: String!, characters: [ID!]! ) {
    addTodo(name: $name, characters: $characters) {
      name
      characters
    }
  }
`;
/* ---- This section taken from apollograph official docs (https://www.apollographql.com/docs/react/data/mutations/)
/* ---- Unfortunately, the squad mutaion section couldn't be completed
/* 
function AddTodo() {
    let input;
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  } */

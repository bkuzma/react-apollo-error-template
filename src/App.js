import React, { Component } from "react";
import { graphql, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

export const query = gql`
  query ErrorTemplate {
    people {
      id
      name
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  render() {
    return (
      <ApolloConsumer>
        {(client) => (
          <main>
            <header>
              <h1>Apollo Client Error Template</h1>
              <p>
                This is a template that you can use to demonstrate an error in
                Apollo Client. Edit the source code and watch your browser window
                reload with the changes.
              </p>
              <p>
                The code which renders this component lives in{" "}
                <code>./src/App.js</code>.
              </p>
              <p>
                The GraphQL schema is in <code>./src/graphql/schema</code>.
                Currently the schema just serves a list of people with names and
                ids.
              </p>
              <button onClick={(event) => {
                client.query({
                  query
                }).then(response => {
                  this.setState({ people: response.data.people });
                });

                event.preventDefault();
              }}>Fetch People</button>
            </header>
            <ul>
              {this.state.people.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
          </main>
        )}
      </ApolloConsumer>
    );
  }
}

export default App;

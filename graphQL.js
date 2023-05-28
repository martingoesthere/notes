import { useQuery } from "@apollo/client";
import { GET_USERS } from "./queries";

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./mutations";

function CreateUserForm() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    createUser({ variables: { name, email } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit" disabled={loading}>
        {loading ? "Creating user..." : "Create user"}
      </button>
      {error && <p>Error creating user: {error.message}</p>}
    </form>
  );
}

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

import { useSubscription } from "@apollo/client";
import { NEW_MESSAGES } from "./subscriptions";

function MessageList() {
  const { loading, error, data } = useSubscription(NEW_MESSAGES);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p>Error fetching messages: {error.message}</p>;

  return (
    <ul>
      {data.messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { composeWithDevTools } from "redux-devtools-extension";

import tasksReducer from "./reducers/tasksReducer";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // Your GraphQL server URL
});

const authLink = setContext((_, { headers }) => {
  // Include an authorization token if you have one
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const middleware = [thunk.withExtraArgument(client)];

if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, tasks: action.payload, loading: false };
      case 'FETCH_TASKS_FAILURE':
        return { ...state, error: action.payload, loading: false };
      case 'ADD_TASK_REQUEST':
        return { ...state, loading: true };
      case 'ADD_TASK_SUCCESS':
        return { ...state, tasks: [...state.tasks, action.payload], loading: false };
      case 'ADD_TASK_FAILURE':
        return { ...state, error: action.payload, loading: false };
      case 'UPDATE_TASK_REQUEST':
        return { ...state, loading: true };
      case 'UPDATE_TASK_SUCCESS':
        const updatedTask = action.payload;
        const updatedTasks = state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        return { ...state, tasks: updatedTasks, loading: false };
      case 'UPDATE_TASK_FAILURE':
        return { ...state, error: action.payload, loading: false };
      case 'DELETE_TASK_REQUEST':
        return { ...state, loading: true };
      case 'DELETE_TASK_SUCCESS':
        const deletedTaskId = action.payload;
        const filteredTasks = state.tasks.filter((task) => task.id !== deletedTaskId);
        return { ...state, tasks: filteredTasks, loading: false };
      case 'DELETE_TASK_FAILURE':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default tasksReducer;  

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/

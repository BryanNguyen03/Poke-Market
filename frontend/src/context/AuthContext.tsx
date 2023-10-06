import { createContext, useEffect, useReducer, ReactNode } from "react";

interface User {
  email: string;
  password: string;
}

// Define state and action for our reducer
interface AuthState {
  user: User | null;
}

interface AuthAction {
  type: string;
  payload?: User;
}

// Define context type
interface AuthContextType {
  user: User | null;
  dispatch: React.Dispatch<AuthAction>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

/**
 * reducer function to change the state depending on the action
 * @param state previous state (logged in, logged out)
 * @param action object that describes the type of action being performed (logging in or logging out)
 */
export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    // If user wants to login, set user to the payload of our action parameter
    case "LOGIN":
      return { user: action.payload };
    // If we're logging out, we can simply just set user back to NULL
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(
    authReducer as React.Reducer<AuthState, AuthAction>, // Type assertion
    { user: null } as AuthState // Type assertion for initial state
  );

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: any = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const persistConfig = {
      key: "app",
      whitelist: [],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store: any = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );

    store.__persistor = persistStore(store);

    return store;
  }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);

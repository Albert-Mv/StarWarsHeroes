import React from "react";
import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getHeroes } from "./api/v1.0/api";
import {
  setErrorMessage,
  addHeroes,
  setIsLoading,
  setPagination,
} from "./redux/slices/heroes";
import { RootState } from "./redux/store";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";
import Hero from "./pages/hero/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "heroes/:id",
    element: <Hero />,
  },
]);

const App: FC = () => {
  const errorMessage = useSelector<RootState, string>(
    (state) => state.heroes.errorMessage
  );
  const isStoreDirty = useSelector<RootState, boolean>(
    (state) => state.heroes.isDirty
  );
  const dispatch = useDispatch();

  useEffect(() => {
    errorMessage &&
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
  }, [errorMessage]);

  useEffect(() => {
    if (!isStoreDirty) {
      dispatch(setIsLoading(true));
      getHeroes().then((res) => {
        if (!res.error) {
          dispatch(addHeroes(res.response?.results!));
          dispatch(
            setPagination({
              prev: res.response?.previous!,
              next: res.response?.next!,
              heroesCount: res.response?.count!,
            })
          );
        } else {
          dispatch(setErrorMessage(res.message!));
        }
        dispatch(setIsLoading(false));
      });
    }
  }, [isStoreDirty]);

  return <RouterProvider router={router} />;
};

export default App;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getHeroes } from "../api/v1.0/api";
import {
  addHeroes,
  setErrorMessage,
  setIsLoading,
} from "../redux/slices/heroes";
import { useDispatch, useSelector } from "react-redux";
import { IPagination } from "../types/IPagination";
import { RootState } from "../redux/store";
import { useSearchParams } from "react-router-dom";

const Pagination: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const { heroesCount } = useSelector<RootState, IPagination>(
    (state) => state.heroes.pagination
  );
  const dispatch = useDispatch();
  const totalPages = useMemo(() => Math.ceil(heroesCount / 10), [heroesCount]);

  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);
    setPages(
      [...Array(endPage - startPage + 1)].map(
        (_, i) => startPage + i
      ) as number[]
    );
  }, [currentPage, totalPages]);

  const loadData = useCallback((page: number) => {
    setCurrentPage(page);
    dispatch(setIsLoading(true));
    getHeroes(page).then((res) => {
      if (!res.error) {
        dispatch(addHeroes(res.response?.results!));
      } else {
        dispatch(setErrorMessage(res.message!));
      }
      dispatch(setIsLoading(false));
    });
  }, []);

  const handleClick = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        loadData(page);
      }
    },
    [loadData, totalPages]
  );

  return (
    <div>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

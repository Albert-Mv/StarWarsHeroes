import React, { useCallback, useMemo, useState } from 'react';
import { getHeroes } from '../api/v1.0/api';
import { addHeroes, setErrorMessage, setIsLoading } from '../redux/slices/heroes';
import { useDispatch, useSelector } from 'react-redux';
import { IPagination } from '../types/IPagination';
import { RootState } from '../redux/store';
import { useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination/Pagination';

const CustomPagination: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);

  const { heroesCount } = useSelector<RootState, IPagination>((state) => state.heroes.pagination);
  const dispatch = useDispatch();
  const totalPages = useMemo<number>(() => Math.ceil(heroesCount / 10), [heroesCount]);

  const loadData = useCallback((page: number) => {
    setCurrentPage(page);
    dispatch(setIsLoading(true));
    getHeroes(page)
      .then((res) => {
        if (!res.error) {
          // eslint-disable-next-line
          dispatch(addHeroes(res.response?.results!))
        } else {
          // eslint-disable-next-line
          dispatch(setErrorMessage(res.message!))
        }
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    loadData(page);
  };

  return <Pagination count={totalPages} page={currentPage} onChange={handleChange} />;
};

export default CustomPagination;

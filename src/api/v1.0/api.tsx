import { IHero } from '../../types/IHero';

export interface ApiResponse<T> {
  error: boolean
  response?: T
  message?: string
}

export async function makeRequest<T>(
  url: string,
  method: 'GET' | 'POST' = 'GET',
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      return {
        error: true,
        message: `Request failed with status ${response.status}`,
      };
    }

    const data = await response.json();
    return { error: false, response: data };
  } catch (error) {
    if (error instanceof Error) {
      return { error: true, message: error.message };
    }
    return { error: true, message: 'Unknown error occurred' };
  }
}

export interface IGetHeroes {
  count: number
  next: string | null
  previous: string | null
  results: IHero[]
}

export const getHeroes = async (page?: number): Promise<ApiResponse<IGetHeroes>> => {
  const response = await makeRequest<IGetHeroes>(
    `https://swapi.dev/api/people/${page ? `?page=${page}` : ''}`,
  );

  return response;
};

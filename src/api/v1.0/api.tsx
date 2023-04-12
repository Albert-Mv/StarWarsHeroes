import { IHero } from "../../types/IHero";

interface ApiResponse<T> {
  error: boolean;
  response?: T;
  message?: string;
}

async function makeRequest<T>(
  url: string,
  method: "GET" | "POST" = "GET"
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
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
    return { error: true, message: "Unknown error occurred" };
  }
}

interface IGetHeroes {
  count: number;
  next: string;
  previous: string;
  results: IHero[];
}

export const getHeroes = async (page?: number): Promise<ApiResponse<IGetHeroes>> => {
  const response = await makeRequest<IGetHeroes>(
    `https://swapi.dev/api/people/${page ? `?page=${page}` :''}`
  );

  return response;
};

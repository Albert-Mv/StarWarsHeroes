import { IGetHeroes, ApiResponse, makeRequest, getHeroes } from '../src/api/v1.0/api';
import fetchMock from 'jest-fetch-mock';

describe('API v1.0: makeRequest function test', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const baseUrl = 'https://swapi.dev/api/';

  it('makeRequest returns successful response with heroes data array', async () => {
    const url = `${baseUrl}people/`;

    const expectedResponse: ApiResponse<IGetHeroes> = {
      error: false,
      response: {
        count: 82,
        next: 'https://swapi.dev/api/people/?page=2',
        previous: null,
        results: [
          {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.dev/api/planets/1/',
            films: [
              'https://swapi.dev/api/films/1/',
              'https://swapi.dev/api/films/2/',
              'https://swapi.dev/api/films/3/',
              'https://swapi.dev/api/films/6/',
            ],
            species: [],
            vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
            starships: [
              'https://swapi.dev/api/starships/12/',
              'https://swapi.dev/api/starships/22/',
            ],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: 'https://swapi.dev/api/people/1/',
          },
        ],
      },
    };

    fetchMock.mockResponseOnce(JSON.stringify(expectedResponse.response));

    const result = await makeRequest<IGetHeroes>(url);
    expect(result).toEqual(expectedResponse);
  });

  it('makeRequest returns response with status 404', async () => {
    const url = `${baseUrl}people/404`;
    const expectedResponse: ApiResponse<IGetHeroes> = {
      error: true,
      message: 'Request failed with status 404',
    };
    fetchMock.mockResponseOnce('Not found', { status: 404 });
    const result = await makeRequest<IGetHeroes>(url);

    expect(result).toEqual(expectedResponse);
  });

  it('makeRequest returns error object when an error is thrown', async () => {
    const url = `${baseUrl}people/`;
    const expectedResponse = { error: true, message: 'Test error message' };
    fetchMock.mockReject(new Error('Test error message'));

    const result = await makeRequest<IGetHeroes>(url);

    expect(result).toEqual(expectedResponse);
  });

  it('makeRequest should return unknown error', async () => {
    const expectedResponse = {
      error: true,
      message: 'Unknown error occurred',
    };
    fetchMock.mockImplementation(async () => {
      return Promise.reject(expectedResponse);
    });
    const result = await makeRequest<IGetHeroes>(baseUrl);

    expect(result).toEqual(expectedResponse);
  });
});

it('API v1.0: getHeroes function test', async () => {
  const expectedResponse: ApiResponse<IGetHeroes> = {
    error: false,
    response: {
      count: 82,
      next: 'https://swapi.dev/api/people/?page=2',
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'https://swapi.dev/api/planets/1/',
          films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/',
          ],
          species: [],
          vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
          starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/',
        },
      ],
    },
  };

  fetchMock.mockResponseOnce(JSON.stringify(expectedResponse.response));

  const result = await getHeroes();
  expect(result).toEqual(expectedResponse);
});

it('API v1.0: getHeroes argument passing test', async () => {
  const expectedResponse: ApiResponse<IGetHeroes> = {
    error: false,
    response: {
      count: 82,
      next: 'https://swapi.dev/api/people/?page=2',
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'https://swapi.dev/api/planets/1/',
          films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/',
          ],
          species: [],
          vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
          starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/',
        },
      ],
    },
  };

  fetchMock.mockResponseOnce(JSON.stringify(expectedResponse.response));

  const result = await getHeroes(1);
  expect(result).toEqual(expectedResponse);
});

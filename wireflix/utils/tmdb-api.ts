import { Movie } from "../typings";
import { apiGet } from "./api";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if(API_KEY === undefined){
  throw new Error('environment variable NEXT_PUBLIC_TMDB_API_KEY is required.');
}

const BASE_URL = 'https://api.themoviedb.org/3';

type ReqParam = {
  api_key: string,
  language: 'ja',
  with_junre?: number,
  with_networks?: number
}

type ResParam = {
  page: 1,
  results: Array<Movie>,
  total_pages: number,
  total_results: number
}

export const fetchTrending = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/trending/all/week`, {api_key: API_KEY, language: 'ja'})
  return response.results;
}

export const fetchNetflixOriginals = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/discover/movie`, {api_key: API_KEY, language: 'ja', with_networks: 213})
  return response.results;
}

export const fetchTopRated = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/top_rated`, {api_key: API_KEY, language: 'ja'})
  return response.results;
}

export const fetchActionMovies = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/discover/movie`, {api_key: API_KEY, language: 'ja', with_junre: 28})
  return response.results;
}

export const fetchComedyMovies = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/discover/movie`, {api_key: API_KEY, language: 'ja', with_junre: 35})
  return response.results;
}

export const fetchRomanceMovies = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/discover/movie`, {api_key: API_KEY, language: 'ja', with_junre: 10749})
  return response.results;
}

export const fetchDocumentaries = async(): Promise<Array<Movie>> => {
  const response = await apiGet<ReqParam, ResParam>(`${BASE_URL}/discover/movie`, {api_key: API_KEY, language: 'ja', with_junre: 99})
  return response.results;
}


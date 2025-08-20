import axios  from 'axios';
import type { AxiosResponse } from 'axios';
import type { Note } from '../types/note';
const TOKEN= import.meta.env.VITE_NOTEHUB_TOKEN;
const BASE_URL = 'https://notehub-public.goit.study/api/notes';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});


export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  
   totalPages: number;
  
}


export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const { data }: AxiosResponse<FetchNotesResponse> = await client.get('', {
    params,
  });
  return data;
};

export const createNote = async (note: Omit<Note, 'id'>): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await client.post('', note);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data }: AxiosResponse<Note> = await client.delete(`/${id}`);
  return data;
};
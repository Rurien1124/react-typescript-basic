import { Dispatch, SetStateAction, useRef } from 'react';
import { ENDPOINTS } from '../common/Endpoints';
import { HTTP_METHODS } from '../common/Constants';
import { dogApiRequest } from './API';

export interface DogProps {
  readonly id: string;
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export const getDogsList = async (
  page: number,
  limit: number,
  setDogs: Dispatch<SetStateAction<readonly DogProps[]>>,
  loadingRef: ReturnType<typeof useRef<boolean>>
) => {
  try {
    loadingRef.current = true;

    const response = await dogApiRequest({
      url: ENDPOINTS.GET_DOGS_LIST,
      method: HTTP_METHODS.GET,
      params: {
        page,
        limit,
      },
    });

    setDogs((prev) => [...prev, ...response.data]);
  } catch (error) {
    console.error(error);
  } finally {
    loadingRef.current = false;
    console.log('Dogs are ready to show');
  }
};

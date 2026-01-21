import { Dispatch, SetStateAction } from 'react';
import { JobProps } from './Axios';
import { ENDPOINTS } from '../common/Endpoints';
import { HTTP_METHODS } from '../common/Constants';
import { jsonPlaceholderRequest } from './API';

export const getJobsList = async (
  setJobs: Dispatch<SetStateAction<readonly JobProps[]>>
) => {
  try {
    const response = await jsonPlaceholderRequest({
      url: ENDPOINTS.GET_JOBS_LIST,
      method: HTTP_METHODS.GET,
    });

    setJobs(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Get jobs list done');
  }
};

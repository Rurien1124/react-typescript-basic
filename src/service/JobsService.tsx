import { Dispatch, SetStateAction } from 'react';
import { ENDPOINTS } from '../common/Endpoints';
import { HTTP_METHODS } from '../common/Constants';
import { JobProps } from '../examples/axios';
import { jsonPlaceholderRequest } from '../api/JobsApi';

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

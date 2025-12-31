import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const JobItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

const JobText = styled.span<CompletedProps>`
  margin-left: 10px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

interface CompletedProps {
  readonly completed: boolean;
}

export interface JobProps {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
}

export const Jobs = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos/'
        );
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getJobs();
  }, []);

  return (
    <Container>
      <Title>Jobs List</Title>
      <ul>
        {jobs.map(({ id, title, completed }: JobProps) => (
          <JobItem key={id}>
            <input type='checkbox' checked={completed} readOnly />
            <JobText completed={completed}>{title}</JobText>
          </JobItem>
        ))}
      </ul>
    </Container>
  );
};

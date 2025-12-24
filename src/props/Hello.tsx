interface Props {
  name: string;
  color?: string;
}

export const Hello = ({name, color = 'blue'}: Props) => {
  return <div style={{color}}>Hello {name}</div>;
};
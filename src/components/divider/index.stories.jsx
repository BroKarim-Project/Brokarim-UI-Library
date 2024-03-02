import Divider from '.';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = () => {
  return <Divider color={'black'}>OR</Divider>;
};

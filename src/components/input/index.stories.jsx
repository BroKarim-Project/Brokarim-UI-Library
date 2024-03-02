import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

const Template = (arguments_) => <Input {...arguments_} />;

export const Email = Template.bind({});

Email.args = {
  type: 'text',
  border: 'brutalism',
  rounded: 'hard',
  placeholder: 'Email...',
};

export const Password = () => {
  return (
    <>
      <Input type="password" placeholder="password..." border={'brutalism'} className="focus:border-none focus:rounded-none focus:border-transparent" />
    </>
  );
};
export const Date = () => {
  return (
    <>
      <Input type="date" placeholder="password..." border={'brutalism'} className="focus:border-none focus:rounded-none focus:border-transparent" />
    </>
  );
};

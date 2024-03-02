import LoginForm from './LoginForm';

export default {
  tittle: 'Example/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

const Template = (arguments_) => <LoginForm {...arguments_} />;

export const Normal = Template.bind({});

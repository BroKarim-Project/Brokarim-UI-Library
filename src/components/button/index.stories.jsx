import { ButtonShadow, ButtonShadow2, Button } from '.';

export default {
  title: 'Components/Button',
  component: ButtonShadow,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  tags: ['autodocs'], //auto generate docs file in Components/Button
};

const Template = (arguments_) => <ButtonShadow {...arguments_} />;

export const primary = () => {
  return <Button variant={'default'}>Click me</Button>;
};
export const Starter = Template.bind({});
export const Brutalism = Template.bind({});

Starter.args = {
  disabled: true,
  textColor: 'black',

  children: 'Click me',
};

Brutalism.args = {
  textColor: 'black',
  disabled: false,
  children: 'Click me',
};

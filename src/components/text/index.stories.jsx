import Text from '.';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

const Template = (arguments_) => <Text {...arguments_} />;

export const Title = Template.bind({});
export const Paragraph = Template.bind({});

Title.args = {
  size: '2xl',
  children: 'Login',
  weight: 'bold',
};
Paragraph.args = {
  size: 'base',
  children: 'You can, for example, display a table with all component props listed with useful information like the type expected or the default value. Or you can add easily additional information, show snippets, and possibilit',
  weight: 'normal',
  align: 'center',
  padding: 'normal',
  italic: 'true'
};

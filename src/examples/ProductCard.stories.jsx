import ProductCard from './ProductCard';

export default {
  tittle: 'Example/ProductCard',
  component: ProductCard,
  // parameters: {
  //   layout: 'centered',
  // },

  tags: ['autodocs'],
};

const Template = (arguments_) => <ProductCard {...arguments_} />;

export const Normal = Template.bind({});

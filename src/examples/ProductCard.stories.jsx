import ProductCard from './ProductCard';

export default {
  tittle: 'Example/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
};

const Template = (arguments_) => <ProductCard {...arguments_} />;

export const Normal = Template.bind({});

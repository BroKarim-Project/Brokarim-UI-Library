import { Tabs, Tab } from '../components/tab';
import { AllCollection, BestSeller, NewArrival } from '../components/ui/Collection';

const ProductCard = () => {
  return (
    <>
      <div className="px-6  py-2 bg-white">
        {/* page headingh */}
        <h1 className="sm:py-4 font-semibold text-3xl">Shop By Essentials</h1>
        {/* <Tabs renderContent={renderContent} /> */}
        <Tabs>
          <Tab label={'all'} tabName={'All'}>
            <AllCollection />
          </Tab>
          <Tab label={'best'} tabName={'Best Seller'}>
            <BestSeller />
          </Tab>
          <Tab label={'new'} tabName={'New Arrival'}>
            <NewArrival />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ProductCard;

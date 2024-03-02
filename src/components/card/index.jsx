import { Button } from '../button';

const Card = ({ label, imgUrl }) => {
  return (
    <div className="group relative block h-96 w-80 bg-black rounded-lg">
      <img className=" absolute inset-0 h-full rounded-lg  w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" src={imgUrl} />
      <div className="relative p-4 ">
        <div className="flex items-center justify-center rounded-full bg-white w-1/3  ">
          <p className="text-sm uppercase font-medium text-center text-black">{label}</p>
        </div>

        <div className="mt-32 ">
          <div className="translate-y-8   transform opacity-0 flex justify-center items-center flex-col gap-4  transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <Button size={'default'} className={'bg-white rounded-full text-black font-semibold hover:text-white'}>
              Add to cart
            </Button>
            <Button size={'sm'} className={'border-2 border-white bg-transparent rounded-full text-white font-semibold hover:border-none'}>
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

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
  return (
    <div className="flex gap-2 items-center w-[50vw] ">
      <Divider variant={'default'}>OR</Divider>
    </div>
  );
};
export const Secondary = () => {
  return (
    <div className="flex gap-2 items-center w-[50vw] ">
      <Divider variant={'secondary'} className=" text-pink-400 ">
        OR
      </Divider>
    </div>
  );
};

export const NoText = () => {
  return (
    <div className="flex items-center w-[50vw] ">
      <Divider variant={'default'}></Divider>
    </div>
  );
};

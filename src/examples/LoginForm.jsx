import Text from '../components/text';
import Input from '../components/input';
import Divider from '../components/divider';
import { ButtonShadow, ButtonShadow2 } from '../components/button/index';

const LoginForm = () => {
  return (
    <section className="px-10 w-full bg-[#ffeacb] py-10 flex flex-col border border-gray-300 rounded-md">
      <Text size={'xl'} weight={'bold'} align={'center'} className="mb-2">
        Login
      </Text>
      <Text size={'sm'} weight={'normal'} align={'center'} className="mb-4 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <div className="px-10 w-full ">
        <Input type={'text'} border={'brutalism'} placeholder="email ..." className={'px-10 rounded-md mb-4 h-10'}></Input>
        <Input type={'password'} border={'brutalism'} placeholder="password ..." className={'px-10 rounded-md mb-4 h-10'}></Input>
        <Text size={'sm'} weight={'normal'} align={'right'} className="mb-2 text-[#64C4ED]">
          Forgot password?
        </Text>
        <ButtonShadow disabled={true} children={'Login'} className={'flex w-full justify-center text-center items-center mb-4'} />

        <Divider color={'black/90'}>OR</Divider>

        <div className="flex justify-between py-4 w-full px-10">
          <ButtonShadow2 disabled={true} className="px-8 flex justify-center items-center">
            <img src="/google.png" className="w-8 h-8" alt="" />
          </ButtonShadow2>
          <ButtonShadow2 disabled={true} className="px-8 flex justify-center items-center" children={'Google'}>
            <img src="/facebook.svg" className="w-8 h-8" />
          </ButtonShadow2>
        </div>

        <Text size={'sm'} weight={'bold'} align={'center'}>
          Not have account yet? <span className="text-white">Sign Up</span>
        </Text>
      </div>
    </section>
  );
};

export default LoginForm;

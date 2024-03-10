import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  return (
    <div className='flex flex-col items-center mt-52 text-center mx-10 h-screen'>
      <div>
        <h1 className='font-bold text-2xl'>Forgot Password</h1>
      </div>
      <div className='mt-2'>
        <label className=''>
          Please enter your email address so we can send you further
          instructions on resetting your password.
        </label>
      </div>
      <div className='mt-2'>
        <Input type='email' autoComplete='email' placeholder='example@mail.ru' className='w-52 border-black ' />
      </div>
      <div className='mt-4'><button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white px-8 py-2 hover:text-purple-900'>Submit</button></div>
    </div>
  );
}

import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='w-full h-20 bg-footer flex flex-row justify-center'>
        <div className='flex flex-col items-center'>
          <p className='font-bold mt-6 text-white'>
            © 2024 HeavenlyWeiner Все права защищены.
          </p>
          <div>
            <div className='flex flex-row gap-2 text-xl text-white'>
              <a href='https://discord.gg/hBzsDYcGZg'><FaDiscord className='cursor-pointer hover:text-purple-500' /></a>
              <a href='https://vk.com/heavenlyweiner'><FaVk className='cursor-pointer hover:text-purple-500' /></a>
              <a href='t.me/heavenlyweiner'><FaTelegramPlane className='cursor-pointer hover:text-purple-500' /></a>
              {/* <a href=''><FaYoutube className='cursor-pointer hover:text-purple-500' /></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

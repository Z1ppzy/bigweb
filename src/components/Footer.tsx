import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='px-5 bg-footer flex flex-row justify-center '>
        <div className='flex flex-col items-center py-7'>
          <p className='font-bold text-white'>
            © 2024 HeavenlyWeiner Все права защищены.
          </p>
          <div>
            <div className='flex flex-row gap-2 text-xl text-white '>
              <a href='https://discord.gg/hBzsDYcGZg'><FaDiscord className='cursor-pointer hover:text-purple-500' /></a>
              <a href='https://vk.com/heavenlyweiner'><FaVk className='cursor-pointer hover:text-purple-500' /></a>
              <a href='https://t.me/heavenlyweiner'><FaTelegramPlane className='cursor-pointer hover:text-purple-500' /></a>
              {/* <a href=''><FaYoutube className='cursor-pointer hover:text-purple-500' /></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

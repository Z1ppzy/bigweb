import { FaDiscord, FaVk, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='px-5 border-t-4  flex flex-row justify-center text-center'>
        <div className='flex flex-col items-center py-7'>
          <p className='font-bold '>
            © 2024 HeavenlyWeiner Все права защищены.
          </p>
          <div>
            <div className='flex flex-row gap-2 text-xl'>
              <a href='https://discord.gg/hBzsDYcGZg'><FaDiscord className='cursor-pointer hover:scale-125 duration-500' /></a>
              <a href='https://vk.com/heavenlyweiner'><FaVk className='cursor-pointer hover:scale-125 duration-500' /></a>
              <a href='https://t.me/heavenlyweiner'><FaTelegramPlane className='cursor-pointer hover:scale-125 duration-500' /></a>
              {/* <a href=''><FaYoutube className='cursor-pointer hover:text-purple-500' /></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

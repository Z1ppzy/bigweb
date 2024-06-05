import { useEffect, useState } from 'react';
import { GoServer } from 'react-icons/go';
import { FaDiscord } from 'react-icons/fa';

export default function ServerStatus() {
  const serverIp = 'mc.heavenlyweiner.ru';
  const discordServerId = '1114652277576302612';

  const [onlinePlayers, setOnlinePlayers] = useState<number | string>(
    'Загрузка...'
  );
  const [discordOnlineUsers, setDiscordOnlineUsers] = useState<number | string>(
    'Загрузка...'
  );

  const fetchOnlinePlayers = async () => {
    try {
      const apiUrl = `https://api.mcsrvstat.us/2/${serverIp}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.online) {
        setOnlinePlayers(data.players.online);
      } else {
        setOnlinePlayers('0');
      }
    } catch (e) {
      console.error('Error fetching online players:', e);
      setOnlinePlayers('None');
    }
  };

  const fetchDiscordOnlineUsers = async () => {
    try {
      const apiWidgetUrl = `https://discord.com/api/guilds/${discordServerId}/widget.json`;
      const response = await fetch(apiWidgetUrl);
      const data = await response.json();

      if (data.presence_count !== undefined) {
        setDiscordOnlineUsers(data.presence_count);
      } else {
        setDiscordOnlineUsers('0');
      }
    } catch (e) {
      console.error('Error fetching Discord online users:', e);
      setDiscordOnlineUsers('None');
    }
  };

  useEffect(() => {
    fetchOnlinePlayers();
    fetchDiscordOnlineUsers();

    const intervalId = setInterval(() => {
      fetchOnlinePlayers();
      fetchDiscordOnlineUsers();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [serverIp, discordServerId]);

  return (
    <div className='flex justify-center text-white items-center mt-10 py-2 md:py-0 bg-stone-600 rounded-lg mx-8 md:mx-10 flex-wrap'>
      <div className='flex flex-col text-center items-center md:m-4'>
        <FaDiscord className='text-4xl mb-2' />
        <p className='md:text-xl font-bold'>Дискорд сервер</p>
        <p className='md:text-lg'>
          <b>{discordOnlineUsers}</b> пользователей онлайн
        </p>
      </div>
      <div className='flex flex-col text-center items-center md:m-4'>
        <GoServer className='text-4xl mb-2' />
        <p className='md:text-xl font-bold'>Сервер Майнкрафта</p>
        <p className='md:text-lg'>
          <b>{onlinePlayers}</b> игроков онлайн
        </p>
      </div>
    </div>
  );
}

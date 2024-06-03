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
        setOnlinePlayers('None');
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
        setDiscordOnlineUsers('None');
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
    <div className='md:mx-7'>
      <div className='flex flex-row justify-around items-center mt-10 p-5 bg-muted rounded-lg '>
        <div className='flex flex-col items-center dark:text-white mx-4 '>
          <FaDiscord className='text-4xl mb-2' />
          <p className='text-xl font-bold'>Дискорд сервер</p>
          <p className='text-lg'><b>{discordOnlineUsers}</b> пользователей онлайн</p>
        </div>
        <div className='flex flex-col items-center dark:text-white mx-4'>
          <GoServer className='text-4xl mb-2' />
          <p className='text-xl font-bold'>Сервер Майнкрафта</p>
          <p className='text-lg'><b>{onlinePlayers}</b> игроков онлайн</p>
        </div>
      </div>
    </div>
  );
}

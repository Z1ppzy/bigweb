import { useEffect, useState } from 'react';
import { GoServer } from 'react-icons/go';
import { FaDiscord } from 'react-icons/fa';
import LoaderStatus from '@/components/Global/LoaderStatus'; 

export default function ServerStatus() {
  const serverIp = 'mc.heavenlyweiner.ru';
  const discordServerId = '1114652277576302612';

  const [onlinePlayers, setOnlinePlayers] = useState<number | JSX.Element>(
    <LoaderStatus />
  );
  const [discordOnlineUsers, setDiscordOnlineUsers] = useState<number | JSX.Element>(
    <LoaderStatus />
  );

  const fetchOnlinePlayers = async () => {
    try {
      const apiUrl = `https://api.mcsrvstat.us/2/${serverIp}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.online) {
        setOnlinePlayers(data.players.online);
      } else {
        setOnlinePlayers(0);
      }
    } catch (e) {
      console.error('Error fetching online players:', e);
      setOnlinePlayers(<span>None</span>);
    }
  };

  const fetchDiscordOnlineUsers = async () => {
    try {
      const apiWidgetUrl = `https://discord.com/api/guilds/${discordServerId}/widget.json`;
      const response = await fetch(apiWidgetUrl);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();

      if (data.presence_count !== undefined) {
        setDiscordOnlineUsers(data.presence_count);
      } else {
        setDiscordOnlineUsers(0);
      }
    } catch (e) {
      console.error('Error fetching Discord online users:', e);
      setDiscordOnlineUsers(<span>None</span>);
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
    <div className='flex justify-center my-4 items-center rounded-lg flex-wrap'>
      <div className='flex flex-col text-center items-center  w-52 h-32 md:h-40 md:w-72'>
        <FaDiscord className='md:text-5xl text-4xl mb-2' />
        <p className='md:text-xl font-bold text-base'>Дискорд сервер</p>
        <p className='md:text-xl text-base'>
          <b>{discordOnlineUsers}</b> пользователей онлайн
        </p>
      </div>
      <div className='flex flex-col text-center items-center w-52 h-24 md:h-40 md:w-72'>
        <GoServer className='md:text-5xl text-4xl mb-2' />
        <p className='md:text-xl font-bold text-base'>Сервер Майнкрафта</p>
        <p className='md:text-xl text-base'>
          <b>{onlinePlayers}</b> игроков онлайн
        </p>
      </div>
    </div>
  );
}

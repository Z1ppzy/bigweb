import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Reward {
  id: number;
  name: string;
  claimed: boolean;
}

export default function Rewards () {
  const [points, setPoints] = useState<number>(0);
  const [lastClaimedTime, setLastClaimedTime] = useState<Date | null>(null);
  const [rewards, setRewards] = useState<Reward[]>([
    { id: 1, name: 'Reward 1', claimed: false },
    { id: 2, name: 'Reward 2', claimed: false },
    

  ]);

  useEffect(() => {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10));
    }
    const storedLastClaimedTime = localStorage.getItem('lastClaimedTime');
    if (storedLastClaimedTime) {
      setLastClaimedTime(new Date(storedLastClaimedTime));
    }
    const storedRewards = localStorage.getItem('rewards');
    if (storedRewards) {
      setRewards(JSON.parse(storedRewards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('points', points.toString());
  }, [points]);

  useEffect(() => {
    if (lastClaimedTime) {
      localStorage.setItem('lastClaimedTime', lastClaimedTime.toISOString());
    }
  }, [lastClaimedTime]);

  useEffect(() => {
    localStorage.setItem('rewards', JSON.stringify(rewards));
  }, [rewards]);

  const claimReward = (id: number) => {
    setRewards(rewards.map(reward => reward.id === id ? { ...reward, claimed: true } : reward));
  };

  const handleRewardClick = (id: number) => {
    const now = new Date();
    if (lastClaimedTime) {
      const nextClaimTime = new Date(lastClaimedTime);
      nextClaimTime.setDate(nextClaimTime.getDate() + 1);

      if (now < nextClaimTime) {
        toast.error('Вы уже получили награду сегодня. Пожалуйста, вернитесь завтра.');
        return;
      }
    }

    claimReward(id);
    setPoints(points + 99999999);
    setLastClaimedTime(now);
    toast.success('Награда получена!');
  };

  const checkDailyReset = () => {
    const now = new Date();
    if (lastClaimedTime) {
      const nextClaimTime = new Date(lastClaimedTime);
      nextClaimTime.setDate(nextClaimTime.getDate() + 1);

      if (now >= nextClaimTime) {
        setRewards(rewards.map(reward => ({ ...reward, claimed: false })));
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(checkDailyReset, 1000 * 60 * 60); 
    return () => clearInterval(interval);
  }, [lastClaimedTime, rewards]);

  const getRewardImage = (claimed: boolean) => {
    return claimed ? 'reward-claimed.jpg' : 'rewards.jpg';
  };

  return (
    <>
      <div>
        <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 text-center m-10'>
          <h1>Награды, которые вы можете получить.</h1>
          <p>
            Для этого вам потребуется просто ежедневно посещать данную страницу :)
          </p>
          <p>Ваши очки: {points}</p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center m-10'>
          {rewards.map((reward) => (
            <button
              key={reward.id}
              onClick={() => handleRewardClick(reward.id)}
              disabled={reward.claimed}
              className={`relative ${reward.claimed ? 'opacity-50' : ''}`}
            >
              <img
                src={getRewardImage(reward.claimed)}
                className='h-80 w-80 rounded-md hover:scale-105 duration-700 border-2 border-purple-400'
                alt={reward.name}
              />
              {reward.claimed && 
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-white text-2xl font-bold'>Получено</span>
                </div>
              }
            </button>
          ))}
        </div>
        <div className='text-left mx-10 md:mx-20'>
          <h1
            className='text-2xl font-bold'
            style={{ borderBottom: '3px solid' }}
          >
            О наградах:
          </h1>
          <p className='mb-4 font-semibold p-4'>
            Награды были придуманы, чтобы игроки могли получать вознаграждение за проявление частой активности. Так же чтобы просто мы могли радовать своих игроков приятными бонусами на любимом сервере :)
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};


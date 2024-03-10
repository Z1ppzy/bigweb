import { HiAcademicCap } from "react-icons/hi2";
import { Link } from 'react-router-dom';
export default function Terms() {
  return (
    <div className='mx-10 mt-48 md:mx-48 h-screen'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col text-4xl hover:text-purple-800'><Link to='/'><HiAcademicCap /></Link></div>
        <div className='flex flex-col'><h1 className='font-bold text-2xl transform transition-transform hover:scale-110'>Условия использования</h1></div>
      </div>
      <div className='md:mt-8'>
        <p className='font-semibold text-center'>
          Вы соглашаетесь быть связанными нашими правилами сайта и любыми
          законами, которые могут применяться к этому веб-сайту и вашему
          участию. Администрация сайта имеет право в любое время прекратить вашу
          учетную запись, удалить любое содержимое, которое вы могли разместить,
          а также ваш IP-адрес и любые данные, которые вы вводите на сайт,
          записываются для помощи сотрудникам сайта в их обязанностях по
          модерации. Администрация сайта имеет право изменить эти условия и
          положения, а также любые правила сайта в любое время без
          предупреждения. Хотя вас могут уведомить об изменениях, вы несете
          ответственность за проверку этих условий и правил в любое время.
        </p>
      </div>
    </div>
  );
}

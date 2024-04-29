import image1 from '@/assets/slide1.png';
import image2 from '@/assets/slide2.png';
import image3 from '@/assets/slide3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows?: boolean;
  fade: boolean;
  waitForAnimate: boolean;
}

export default function SliderImg() {
  const settings: SliderSettings = {
    fade: true ,
    arrows: undefined,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    waitForAnimate: false
  };

  return (
    <Slider className='mx-7 ' {...settings}>
      <div>
        <img
          className='float-right rounded-xl scale-100'
          src={image1}
          alt='Slide 1'
        />
      </div>
      <div>
        <img
          className='float-right rounded-xl scale-100'
          src={image2}
          alt='Slide 2'
        />
      </div>
      <div>
        <img
          className='float-right rounded-xl scale-100'
          src={image3}
          alt='Slide 3'
        />
      </div>
    </Slider>
  );
};

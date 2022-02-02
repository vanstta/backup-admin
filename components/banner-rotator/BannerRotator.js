import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import flechaDer from '../../assets/flecha-der.svg'
import flechaIzq from '../../assets/flecha-izq.svg'
import './banner.scss'
import { home } from '../../actions/home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

const BannerRotator = () => {
  const dispatch = useDispatch()
  const { info ,sectionBanner } = useSelector((state) => state.home)

  useEffect(() => {
    const mostrarData = () => {
      dispatch(home())
    }
    mostrarData()
  },[])

  return (
    <CarouselProvider
      naturalSlideWidth={40}
      naturalSlideHeight={100}
      totalSlides={3}
      interval={5000}
      isPlaying={true}
      dotNumbers={true}
      infinite={true}
    >
      <Slider> 
        <div>
          {sectionBanner.map((item, index)=> {
            return (
              <div  key={index}>
                 <Slide className='contenedor-slider' index={index}><img className='img-slider' src={sectionBanner[index].image} alt='Imagen'/>
                 </Slide>
              </div>
            )
          })} 
        </div>
      </Slider>
      <div className='info'>{info}</div>
      <ButtonBack><img className='boton-slider' src={flechaIzq} alt=''/></ButtonBack>
      <ButtonNext><img className='boton-slider' src={flechaDer} alt=''/></ButtonNext>
      <div className='contenedor-dots'>
        <DotGroup/>
      </div>
    </CarouselProvider>
  );
  };

export default BannerRotator;

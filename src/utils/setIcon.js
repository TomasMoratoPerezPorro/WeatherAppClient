//ICONS
import cloud1 from '../assets/weatherIcons/cloud1.svg';
import lightning1 from '../assets/weatherIcons/lightning1.svg';
import moon from '../assets/weatherIcons/moon.svg';
import moonCloud1 from '../assets/weatherIcons/moonCloud2.svg';
import moonCloud2 from '../assets/weatherIcons/moonCloud2.svg';
import rain1 from '../assets/weatherIcons/rain1.svg';
import rain2 from '../assets/weatherIcons/rain2.svg';
import snow1 from '../assets/weatherIcons/snow1.svg';
import sun from '../assets/weatherIcons/sun.svg';
import sunCloud1 from '../assets/weatherIcons/sunCloud1.svg';
import sunCloud2 from '../assets/weatherIcons/sunCloud2.svg';
import errorOutline from '../assets/icons/errorOutline.svg';

const setIcon = (iconCode) => {
  let iconSVG;
  switch (iconCode) {
    case 'cloud-1':
      iconSVG = cloud1;
      break;
    case 'lightning-1':
      iconSVG = lightning1;
      break;
    case 'moon':
      iconSVG = moon;
      break;
    case 'moon-cloud-1':
      iconSVG = moonCloud1;
      break;
    case 'moon-cloud-2':
      iconSVG = moonCloud2;
      break;
    case 'rain-1':
      iconSVG = rain1;
      break;
    case 'rain-2':
      iconSVG = rain2;
      break;
    case 'snow-1':
      iconSVG = snow1;
      break;
    case 'snow-2':
      iconSVG = snow1;
      break;
    case 'sun':
      iconSVG = sun;
      break;
    case 'sun-cloud-1':
      iconSVG = sunCloud1;
      break;
    case 'sun-cloud-2':
      iconSVG = sunCloud2;
      break;
    case 'error-outline':
      iconSVG = errorOutline;
      break;

    default:
      iconSVG = errorOutline;
      break;
  }
  return iconSVG;
};

export default setIcon;

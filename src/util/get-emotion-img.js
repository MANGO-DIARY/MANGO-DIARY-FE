import { Images } from '../styles/images';

function getEmotionImage(emotion) {
  switch (emotion) {
    case '신남':
      return Images.excited;
    case '기쁨':
      return Images.joy;
    case '행복':
      return Images.happy;
    case '평온':
      return Images.peace;
    case '분노':
      return Images.angry;
    case '슬픔':
      return Images.sad;
    case '불안':
      return Images.anxiety;
    case '우울':
      return Images.depression;
    case 'none':
      return Images.MainAi;
    default:
      return null;
  }
}

export default getEmotionImage;

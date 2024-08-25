import { Images } from '../styles/images';

function getEmotionImage(emotion) {
  switch (emotion) {
    case 0:
    case 'joy':
    case '기쁨':
      return Images.joy;
    case 1:
    case 'excitement':
    case '신남':
      return Images.excited;
    case 2:
    case 'happiness':
    case '행복':
      return Images.happy;
    case 3:
    case 'calm':
    case '평온':
      return Images.peace;
    case 4:
    case 'depression':
    case '우울':
      return Images.depression;
    case 5:
    case 'anxiety':
    case '불안':
      return Images.anxiety;
    case 6:
    case 'sadness':
    case '슬픔':
      return Images.sad;
    case 7:
    case 'anger':
    case '분노':
      return Images.angry;

    case 'none':
      return Images.MainAi;

    default:
      return null;
  }
}

export default getEmotionImage;

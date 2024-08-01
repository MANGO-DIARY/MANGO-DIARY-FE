import { Images } from '../styles/images';

function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return Images.excited;
    case 2:
      return Images.joy;
    case 3:
      return Images.happy;
    case 4:
      return Images.peace;
    case 5:
      return Images.angry;
    case 6:
      return Images.sad;
    case 7:
      return Images.anxiety;
    case 8:
      return Images.depression;
    default:
      return null;
  }
}

export default getEmotionImage;

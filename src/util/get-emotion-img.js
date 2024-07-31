import { Images } from '../styles/images';

function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return Images.angry;
    case 2:
      return Images.anxiety;
    case 3:
      return Images.depression;
    case 4:
      return Images.excited;
    case 5:
      return Images.happy;
    case 6:
      return Images.joy;
    case 7:
      return Images.peace;
    case 8:
      return Images.sad;
    default:
      return null;
  }
}

export default getEmotionImage;

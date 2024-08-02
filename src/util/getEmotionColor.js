import { Colors } from '../styles/colors';

function getEmotionColor(emotionName) {
  switch (emotionName) {
    case '신남':
      return Colors.excited;
    case '기쁨':
      return Colors.joy;
    case '행복':
      return Colors.happy;
    case '평온':
      return Colors.peace;
    case '분노':
      return Colors.angry;
    case '슬픔':
      return Colors.sad;
    case '불안':
      return Colors.anxiety;
    case '우울':
      return Colors.depression;
    default:
      return null;
  }
}

export default getEmotionColor;

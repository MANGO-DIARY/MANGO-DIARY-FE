import { Colors } from '../styles/colors';

function getEmotionColor(emotionName) {
  switch (emotionName) {
    case 0:
    case 'joy':
    case '기쁨':
      return Colors.joy;
    case 1:
    case 'excitement':
    case '신남':
      return Colors.excited;
    case 2:
    case 'happiness':
    case '행복':
      return Colors.happy;
    case 3:
    case 'calm':
    case '평온':
      return Colors.peace;
    case 4:
    case 'depression':
    case '우울':
      return Colors.depression;
    case 5:
    case 'anxiety':
    case '불안':
      return Colors.anxiety;
    case 6:
    case 'sadness':
    case '슬픔':
      return Colors.sad;
    case 7:
    case 'anger':
    case '분노':
      return Colors.angry;

    default:
      return null;
  }
}

export default getEmotionColor;

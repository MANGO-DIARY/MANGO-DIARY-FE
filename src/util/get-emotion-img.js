import emotion1 from '../assets/angry.svg';
import emotion2 from '../assets/Anxiety.svg';
import emotion3 from '../assets/depression.svg';
import emotion4 from '../assets/excited.svg';
import emotion5 from '../assets/happy.svg';
import emotion6 from '../assets/joy.svg';
import emotion7 from '../assets/peace.svg';
import emotion8 from '../assets/sad.svg';

function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    case 6:
      return emotion6;
    case 7:
      return emotion7;
    case 8:
      return emotion8;
    default:
      return null;
  }
}

export default getEmotionImage;

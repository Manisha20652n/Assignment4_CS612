import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Diwali, Festival of Lights</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/Diwali.jpg' } alt="Indian Festivals"  />
     <p> Diwali, Divali, Deepavali is the Hindu festival of lights, usually lasting five days and celebrated during the Hindu Lunisolar month Kartika (between mid-October and mid-November).One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual "victory of light over darkness, good over evil, and knowledge over ignorance".The festival is widely associated with Lakshmi, goddess of prosperity, but regional traditions connect it to Sita and Rama, Vishnu, Krishna, Yama, Yami, Durga, Kali, Dhanvantari, or Vishvakarman.
		In the lead-up to Diwali, celebrants will prepare by cleaning, renovating, and decorating their homes and workplaces.[9] During the Diwali people wear their finest clothes, illuminate the interior and exterior of their homes with diyas (oil lamps or candles), offer puja (worship) to Lakshmi, the goddess of prosperity and wealth,[note 1] light fireworks, and partake in family feasts, where mithai (sweets) and gifts are shared. Diwali is also a major cultural event for the Hindu and Jain diaspora from the Indian subcontinent.
		The five-day long festival originated in the Indian subcontinent and is mentioned in early Sanskrit texts. Diwali is usually celebrated eighteen days after the Dussehra (Dasara, Dasain) festival, with Dhanteras, or the regional equivalent, marking the first day of the festival when celebrants prepare by cleaning their homes and making decorations on the floor, such as rangoli.[15] The second day is Naraka Chaturdashi, or the regional equivalent which for Hindus in the south of India is Diwali proper. Western, central, eastern and northern Indian communities observe main day of Diwali on the third day, the day of Lakshmi Puja and the darkest night of the traditional month. In some parts of India, the day after Lakshmi Puja is marked with the Govardhan Puja and Balipratipada (Padwa), which is dedicated to the relationship between wife and husband. Some Hindu communities mark the last day as Bhai Dooj or the regional equivalent, which is dedicated to the bond between sister and brother,[16] while other Hindu and Sikh craftsmen communities mark this day as Vishwakarma Puja and observe it by performing maintenance in their work spaces and offering prayers.</p>
     </li>
     <li>
     <Link className="title" exact to="/Blog2">Holi, Festival of Colours</Link>
    
     <img src={process.env.PUBLIC_URL + '/Holi.jpg' } alt="Indian Festivals"  />
     <p>Holi is a popular ancient Hindu festival, originating from the Indian subcontinent. It is celebrated predominantly in India, but has also spread to other areas of Asia and parts of the Western world through the diaspora from the Indian subcontinent. Holi is popularly known as the Indian "festival of spring", the "festival of colours", or the "festival of love". The festival signifies the victory of good over evil.[8][9] It signifies the arrival of spring, the end of winter, the blossoming of love, and for many a festive day to meet others, play and laugh, forget and forgive, and repair broken relationships.The festival also celebrates the beginning of a good spring harvest season.It lasts for a night and a day, starting on the evening of the Purnima (Full Moon day) falling in the Vikram Samvat Calendar,in the Hindu calendar month of Phalguna, which falls around middle of March in the Gregorian calendar. The first evening is known as Holika Dahan (burning of demon holika) or Chhoti Holi and the following day as Holi, Rangwali Holi, Dhuleti, Dhulandi or Phagwah.
		Holi is an ancient Hindu religious festival which has become popular with non-Hindus as well in many parts of South Asia, as well as people of other communities outside Asia.In addition to India and Nepal, the festival is celebrated by Indian subcontinent diaspora in countries such as Jamaica,Suriname, Guyana, Trinidad and Tobago, South Africa, Malaysia, the United Kingdom, the United States, Canada, Mauritius, and Fiji.In recent years the festival has spread to parts of Europe and North America as a spring celebration of love, frolic, and colours.
		Holi celebrations start on the night before Holi with a Holika Dahan where people gather, perform religious rituals in front of the bonfire, and pray that their internal evil be destroyed the way Holika, the sister of the demon king Hiranyakashipu, was killed in the fire. The next morning is celebrated as Rangwali Holi – a free-for-all festival of colours,[10] where people smear each other with colours and drench each other. Water guns and water-filled balloons are also used to play and colour each other. Anyone and everyone is fair game, friend or stranger, rich or poor, man or woman, children, and elders. The frolic and fight with colours occur in the open streets, open parks, outside temples and buildings. Groups carry drums and other musical instruments, go from place to place, sing and dance. People visit family, friends and foes to throw coloured powders on each other, laugh and gossip, then share Holi delicacies, food and drinks.Some customary drinks include bhang (made from cannabis), which is intoxicating.In the evening, after sobering up, people dress up and visit friends and family.</p>
     </li>
     <li>
     <Link className="title" exact to="/Blog3">Navaratri</Link>
     <img src={process.env.PUBLIC_URL + '/Dandiya2.jpg' } alt="Dandiya"  />
     <p> Navaratri is a Hindu festival that spans nine nights (and ten days) and is celebrated every year in the autumn. It is observed for different reasons and celebrated differently in various parts of the Indian cultural sphere.Theoretically, there are four seasonal Navaratri. However, in practice, it is the post-monsoon autumn festival called Sharada Navaratri that is the most observed in the honor of the divine feminine Devi (Durga). The festival is celebrated in the bright half of the Hindu calendar month Ashvin, which typically falls in the Gregorian months of September and October.
	In the eastern and northeastern states of India, the Durga Puja is synonymous with Navaratri, wherein goddess Durga battles and emerges victorious over the buffalo demon to help restore Dharma. In the northern and western states, the festival is synonymous with "Rama Lila" and Dussehra that celebrates the battle and victory of god Rama over the demon king Ravana.[1] In southern states, the victory of different goddesses, of Rama or Saraswati is celebrated. In all cases, the common theme is the battle and victory of Good over Evil based on a regionally famous epic or legend such as the Ramayana or the Devi Mahatmya.
	Celebrations include stage decorations, recital of the legend, enacting of the story, and chanting of the scriptures of Hinduism. The nine days are also a major crop season cultural event, such as competitive design and staging of pandals, a family visit to these pandals and the public celebration of classical and folk dances of Hindu culture.[5][6][7] On the final day, called the Vijayadashami or Dussehra, the statues are either immersed in a water body such as river and ocean, or alternatively the statue symbolizing the evil is burnt with fireworks marking evil's destruction. The festival also starts the preparation for one of the most important and widely celebrated holidays, Diwali, the festival of lights, which is celebrated twenty days after the Vijayadashami or Dussehra or Dashain.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;
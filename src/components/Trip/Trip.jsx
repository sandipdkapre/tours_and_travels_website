import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "./../../assets/5.jpg";
import Trip2 from "./../../assets/14.jpg";
import Trip3 from "./../../assets/6.jpg";
import Trip4 from "./../../assets/19.jpg";
import Trip5 from "./../../assets/17.jpg";
import Trip6 from "./../../assets/18.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Agra, UP"
          text="Agra's notable historical period began during Sikandar Lodi's reign, but the golden age of the city began with the Mughals. Agra was the foremost city of the Indian subcontinent and the capital of the Mughal Empire under Mughal emperors Babur, Humayun, Akbar, Jahangir and Shah Jahan. Under Mughal rule, Agra became a centre for learning, arts, commerce, and religion, and saw the construction of the Agra Fort, Sikandra and Agra's most prized monument, the Taj Mahal, built by Shah Jahan as a mausoleum for his favourite empress."
        />
        <TripData
          image={Trip2}
          heading="Trip in Munnar, Kerala"
          text="Munnar, the famed hill station of south India, is a romantic locale where natural beauty is everywhere to visit, explore and to enjoy. Munnar is situated at the confluence of three mountain streams – Muthirapuzha, Nallathanni and Kundala – and the word ‘Munnar’ means three rivers in Malayalam.  Situated about 1600m above sea level, the hill station had been the summer resort of the British Government during the colonial era. Imprints of the colonial past stand tall in the Munnar town in the form of English country cottages."
        />
        <TripData
          image={Trip3}
          heading="Trip in Kanha National Park, MP"
          text="Kanha Tiger Reserve, also called Kanha National Park, is one of the tiger reserves of India and the largest national park of Madhya Pradesh, state in the heart of India. The present-day Kanha area is divided into two sanctuaries, Hallon and Banjar, of 250 and 300 km2 respectively. Kanha National Park was created on 1 June 1955 and in 1973 was made the Kanha Tiger Reserve. Today it stretches over an area of 940 km2 in the two districts Mandla and Balaghat."
        />
      </div>
      <div className="tripcard">
        <TripData
          image={Trip5}
          heading="Trip in Leh Ladakh, Leh"
          text="The first inhabitants of Ladakh were nomads who came with their yaks during the Neolithic period. Later, Buddhist pilgrims travelling from India to Mount Kailash in Tibet settled permanently in the Indus valley and brought Buddhism which emerged as the main religion in the region.Over the centuries, the kings of Ladakh established a kingdom going from Kashmir to Tibet, guarded by forts and large monasteries.
          On 31st October 2019, Ladakh was separated from the rest of Jammu and Kashmir and became an independent state (Union Territory). Ladakh is divided into 2 disctricts: Leh district and Kargil district (which includes Zanskar)."
        />
        <TripData
          image={Trip6}
          heading="Trip in Jaipur, Rajasthan"
          text="Jaipur city was founded by the King of Amber, Maharaja Sawai Jai Singh II on 18 November 1727, who ruled from 1699 to 1743. He planned to shift his capital from Amber, 11 kilometres (7 mi) to Jaipur to accommodate the growing population and increasing scarcity of water. Jai Singh consulted several books on architecture and architects while planning the layout of Jaipur. Under the architectural guidance of Vidyadhar Bhattacharya, Jaipur was planned based on the principles of Vastu Shastra and Shilpa Shastra. The construction of the city began in 1726 and took four years to complete the major roads, offices, and palaces. The architecture of the city was heavily influenced by the 17th century architectural renaissance during Mughal rule in Northern India. Hence much of it resembles architecture styles from around the Muslim world."
        />
        <TripData
          image={Trip4}
          heading="Trip in Lonavala, Maharashtra"
          text="Present day Lonavala was a part of the Seuna (Yadava) dynasty. Later, the Mughals realised the strategic importance of the region and kept the region for an extended time. The forts in the region and the Mavala warriors played an important role in the history of the Maratha Empire and that of the Peshwas. In 1871, the Lonavala and Khandala hill stations were discovered by Lord Elphinstone, who was the Governor of Bombay Presidency at the time.Lonavala and the adjacent Khandala are twin hill stations 622 metres (2,041 ft) above sea level, in the Sahyadri ranges that demarcate the Deccan Plateau and the Konkan coast. The hill stations sprawl over an approximate area of 38 square kilometres (15 sq mi). Tourism peaks during the monsoon season. The name Lonavala is derived from the words 'leni' which means caves and 'avali' which means series."
        />
      </div>
    </div>
  );
}

export default Trip;

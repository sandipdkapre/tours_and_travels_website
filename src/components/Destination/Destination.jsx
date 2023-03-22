import Mountain1 from "./../../assets/21.jpg";
import Mountain2 from "./../../assets/13.jpg";
import Mountain3 from "./../../assets/20.jpg";
import Mountain4 from "./../../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Shimla Manali Tour, Himachal Pradesh"
        text="The name Manali is regarded as the derivative of 'Manu-Alaya' which literally means 'the abode of Manu'. Legend has it that sage Manu stepped off his ark in Manali to recreate human life after a great flood had deluged the world. Manali lies in the North of Kullu Valley. The valley is often referred to as the 'Valley of the Gods'. Old Manali village has an ancient temple dedicated to sage Manu."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Kashmir Tour, J & K"
        text="J&K consists of three main regions – Jammu, the Kashmir Valley and Ladakh. Between the three, the state offers beautiful verdant mountains and valleys, religious shrines and remote mountains. The people here are warm and hospitable, and they will welcome you into their land and homes easily. Each of these regions has its own culture, and this is evident in their daily lives and also their lifestyle.
        Whatever your reason for visiting J&K, whether it is to enjoy the beauty, or test your limits while trekking the mountains, or simply to discover serenity and peace, J&K will offer you several reasons to keep coming back for more."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;

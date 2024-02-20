import { FaWifi, FaRestroom, FaShower, FaChair } from "react-icons/fa";
import { IoCarSport, IoPeople } from "react-icons/io5";
import { BsFillSpeakerFill } from "react-icons/bs";
import { MdSoupKitchen, MdSecurity } from "react-icons/md";
import {
  GiPartyPopper,
  GiBathtub,
  GiCctvCamera,
  GiFireExtinguisher,
  GiRingingAlarm,
  GiFirstAidKit,
} from "react-icons/gi";

type Amenity = {
  icon: any;
  text: string;
  fontSize: number;
  category: string;
};

export const AmenitiesData: Amenity[] = [
  {
    icon: FaWifi,
    text: "Wi-Fi",
    fontSize: 15,
    category: "Internet",
  },
  {
    icon: IoPeople,
    text: "Staff",
    fontSize: 18,
    category: "Kitchen",
  },
  {
    icon: FaRestroom,
    text: "Restroom",
    fontSize: 18,
    category: "Bathroom",
  },
  {
    icon: FaShower,
    text: "Shower",
    fontSize: 18,
    category: "Bathroom",
  },
  {
    icon: IoCarSport,
    text: "Free parking on premises",
    fontSize: 18,
    category: "Parking",
  },
  {
    icon: BsFillSpeakerFill,
    text: "Sound system",
    fontSize: 18,
    category: "Entertainment",
  },
  {
    icon: MdSoupKitchen,
    text: "Catering",
    fontSize: 18,
    category: "Kitchen",
  },
  {
    icon: GiCctvCamera,
    text: "CCTV",
    fontSize: 18,
    category: "Security",
  },
  {
    icon: GiFireExtinguisher,
    text: "Fire extinguisher",
    fontSize: 18,
    category: "Security",
  },
  {
    icon: GiFirstAidKit,
    text: "First aid kit",
    fontSize: 18,
    category: "Security",
  },
  {
    icon: GiRingingAlarm,
    text: "Smoke alarm",
    fontSize: 18,
    category: "Security",
  },
  {
    icon: GiPartyPopper,
    text: "Decor and equipment rentals",
    fontSize: 20,
    category: "Facility",
  },
  {
    icon: FaChair,
    text: "Seating Arrangements",
    fontSize: 15,
    category: "Facility",
  },
];

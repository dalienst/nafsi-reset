import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter, FaLocationPin } from "react-icons/fa6";

const legal = [
  {
    id: 1,
    title: "Privacy Policy",
  },
  {
    id: 2,
    title: "Terms & Conditions",
  },
  {
    id: 3,
    title: "Cookies Policy",
  },
];

const socials = [
  {
    id: 1,
    title: "Facebook",
    icon: <FaFacebook className="text-white text-2xl" />,
    link: "https://www.facebook.com/nafsi.reset/",
  },
  {
    id: 2,
    title: "Tiktok",
    icon: <FaTiktok className="text-white text-2xl" />,
    link: "https://www.tiktok.com/@nafsi_reset",
  },
  {
    id: 3,
    title: "Instagram",
    icon: <FaInstagram className="text-white text-2xl" />,
    link: "https://www.instagram.com/nafsi_reset/",
  },
  {
    id: 4,
    title: "Twitter",
    icon: <FaXTwitter className="text-white text-2xl" />,
    link: "https://twitter.com/nafsi_reset",
  },
];

const contacts = [
  {
    id: 1,
    title: "nafsireset@gmail.com",
    link: "mailto:nafsireset@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    title: "+254768469417",
    link: "tel:+254768469417",
    icon: <FaPhoneAlt />,
  },
  {
    id: 3,
    title: "Nairobi, Kenya",
    link: "https://maps.app.goo.gl/uhmfJvzgykpaqVs37",
    icon: <FaLocationPin />,
  },
];

const support = [
  {
    id: 1,
    title: "Help Center",
  },
  {
    id: 2,
    title: "Legal",
  },
  {
    id: 3,
    title: "Privacy",
  },
  {
    id: 4,
    title: "Contact Us",
  },
];

const company = [
  {
    id: 1,
    title: "About Us",
    link: "/#about",
  },
  {
    id: 2,
    title: "Blog",
    link: "/",
  },
  {
    id: 3,
    title: "Careers",
    link: "/",
  },
  {
    id: 4,
    title: "Press",
    link: "/",
  },
  {
    id: 5,
    title: "Partners",
    link: "/",
  },
];

export { legal, socials, contacts, support, company };

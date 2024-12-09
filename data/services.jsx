import { IoIosPerson, IoIosPeople } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const mainServices = [
  {
    id: 1,
    icon: <IoIosPerson className="text-primaryBlue text-2xl" />,
    title: "Individual Counselling",
    subtitle: "For yourself",
    description:
      "Counselling for individuals who are facing challenges in their lives, such as depression, anxiety, or relationship issues.",
  },
  {
    id: 2,
    icon: <IoPeople className="text-primaryBlue text-2xl" />,
    title: "Couple Counselling",
    subtitle: "For you and your partner",
    description:
      "Counselling for couples who are facing challenges in their relationships, such as relationship issues, communication problems, or conflict resolution.",
  },
  {
    id: 3,
    icon: <IoIosPeople className="text-primaryBlue text-2xl" />,
    title: "Family Counselling",
    subtitle: "For your family",
    description:
      "Counselling for families who are facing challenges in their relationships, such as relationship issues, communication problems, or conflict resolution.",
  },
  {
    id: 4,
    icon: <FaPeopleGroup className="text-primaryBlue text-2xl" />,
    title: "Teens Counselling",
    subtitle: "For your teens",
    description:
      "Counselling for teens who are facing challenges in their relationships, such as relationship issues, communication problems, or conflict resolution.",
  },
];

export { mainServices };

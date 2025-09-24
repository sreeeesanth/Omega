import Profile from "@/assets/sponsors/default.png";
// import for SponsorsData
import First from '@/assets/rewards/1.png'
import Second from '@/assets/rewards/2.png'
import Third from '@/assets/rewards/3.png'
// import for RewardsData

export const NavbarItems = [
  {
    title: "HOME",
    link: "#home",
  },
  {
    title: "ABOUT",
    link: "#about",
  },
  // },
  // {
  //   title: "SPONSORS",
  //   link: "#sponsors",
  // },
  // {
  //   title: "REGISTRATION",
  //   link: "#",
  // },
  {
    title: "FAQ",
    link: "#faq",
  },
  {
    title: "CONTACT",
    link: "#contact",
  },
  {
    title: "EVENTS",
    link:"#Events",
  },
];

export const FaqData = [
  {
    question: "When and where is the Event taking place? ",
    answer: "The Event will take place on October 18,19 at Model Engineering College, Kochi.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Robots will be judged on accuracy, speed, path optimization, technical design, innovation, and presentation. ",
  },
  {
    question: "Should all the members of the team be from the same college?",
    answer:"All the team members don't have to be from the same college.",
  },
  {
    question: "Who is organising the Event OMEGA?",
    answer:
      "The hackathon is organised by IEEE Robotics and automation society(RAS) MEC SB.",
  },

  {
    question: "What is the team size?",
    answer: "A team can have upto 5 members.",
  },
  {
    question: "What are the rules for the competition",
    answer: "Will be released shortly",
  },
    {
  question: "Is there any registration fees", 
  answer: "Micromouse\nNon IEEE - 1799\nIEEE - 1499\nRAS - 999\n\nLine Follower\nNon IEEE - 1799\nIEEE - 1499\nRAS - 999\n\nRobosoccer\nNon IEEE - 459\nIEEE - 359\nRAS - 259\n\nHardware Hackathon (upto 3 members)\nNon IEEE - 899\nIEEE - 799\nRAS - 599"
}

 
];

export const ContactsData = [
  { name: "Nikhil M", position: "Tech Lead" },
  { name: "Nikhil M", position: "Tech Lead" },
  { name: "Nikhil M", position: "Tech Lead" },
];

export const SponsorsData = [
  {
    altText: "Sponsors",
    imgSrc: Profile,
  },
  {
    altText: "Sponsors",
    imgSrc: Profile,
  },
  {
    altText: "Sponsors",
    imgSrc: Profile,
  },
  {
    altText: "Sponsors",
    imgSrc: Profile,
  },
  {
    altText: "Sponsors",
    imgSrc: Profile,
  },
  {
    altText: "Sponsors",
    imgSrc: Profile,
  },
];

export const RewardsData = [
  {
    imageSrc: First,
  },
  {
    imageSrc: Second,
  },
  {
    imageSrc: Third,
  },
]

export const TimelineData = [
  {
    date: "4th October",
    title: "Registration Opens",
    para: "Join us! Registration starts today. Secure your spot now.",
  },
  {
    date: "5th October",
    title: "Registration Closes",
    para: "Final chance! Registration ends soon. Don't miss out.",
  },
];

export const AboutData = [
  {
    about_ieee: "IEEE is the world’s largest and most influential technical professional organization, driving innovation at the forefront of global technology. With members spanning across engineering, computing, and related fields, IEEE sets international standards, fuels cutting-edge research  and shapes the future of tech. Its vast global network is structured into regions, sections and student branches—where students gain early access to industry, leadership opportunities, and a platform to create real-world impact. It supports advanced research, sets global standards and helps students build the skills and knowledge needed for careers in science and engineering.",
    about_mechack: "OMEGA is a national-level celebration of robotics and innovation, bringing together the brightest minds from across the country. Designed to inspire and challenge, the event combines high-stakes competitions, hands-on learning, and visionary ideas. Participants showcase their skills in flagship events like the Micromouse Maze-Solving Challenge and Line Follower Robo Soccer Hackathon, where creativity meets technical precision. With expert-led workshops, thought-provoking talks, and engaging technical contests, OMEGA creates a space where students, researchers, and enthusiasts can learn, compete, and collaborate. At its heart, OMEGA is about building robots today to shape the technologies of tomorrow.",
  }
];

export const EventsData = {
  day1: [
    { time: "8am - 9am", title: "Registration", venue: "Front Desk" },
    { time: "9am - 10am", title: "Inaugural Ceremony", venue: "Auditorium" },
    { time: "10:00am - 11:00am", title: "Ice Breaker", venue: "SDPK & Media Hall" },
    { time: "11:00am - 1:00pm", title: "Batch 1 to KSUM (Industrial Visit)" },
    { time: "11:00am - 12:00pm", title: "Hardware Session 1 (Batch 2)", venue: "SDPK & Media Hall" },
    { time: "12:00pm - 1:00pm", title: "Batch 2 Lunch", venue: "Room 210 & 209" },
    { time: "1:00pm - 2:00pm", title: "Batch 1 Return & Lunch", venue: "Room 210 & 209" },
    { time: "1:00pm - 3:00pm", title: "Batch 2 to KSUM (Industrial Visit)" },
    { time: "2:00pm - 3:00pm", title: "Hardware Session 1 (Batch 1)", venue: "SDPK & Media Hall" },
    { time: "3:00pm - 4:00pm", title: "Batch 1 Return & Tea Break", venue: "Room 210 & 209" },
    { time: "4:00pm - 6:30pm", title: "Hardware Session 2", venue: "SDPK & Media Hall" },
    { time: "6:30pm - 7:30pm", title: "CAD Session 1", venue: "SDPK & Media Hall" },
    { time: "7:30pm - 9:00pm", title: "Dinner", venue: "Amphi / Room 210 & 209" },
    { time: "9:00pm - 10:30pm", title: "CAD Session 2", venue: "SDPK & Media Hall" },
    { time: "10:30pm - 12:00am", title: "Midnight Jamming Session & Fun Games", venue: "Amphi" },

    // more events...
  ],
  day2: [
    { time: "8am - 9am", title: "Workshop", venue: "Hall A" },
    // more events...
  ],
};

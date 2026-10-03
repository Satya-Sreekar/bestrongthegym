import type { WaKey } from './config'

/* Marketing copy and photo data. Business facts live in src/config.ts. */

export const NAV: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Personal Training', href: '#personal-training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

/** Short, verifiable facts for the strip under the hero. */
export const TRUST = [
  'Lakdikapul, Hyderabad',
  '6 AM – 11 PM',
  'Weight training',
  'Cardio',
  'Personal training',
  'Nutritional guidance',
]

export const WHY = [
  {
    title: 'Train with purpose',
    body: 'Come in with a goal and leave with a plan. Weight training, cardio, bodybuilding or general fitness, structured around what you actually want.',
    photo: 'floor-e',
    alt: 'Adjustable benches and training equipment on the Be Strong floor, with daylight through the windows',
  },
  {
    title: 'Train with proper equipment',
    body: 'A full strength floor, a dumbbell rack, plate-loaded and pin-selected machines, cable stations and a separate cardio deck.',
    photo: 'dumbbells',
    alt: 'Dumbbell rack and adjustable benches in the Be Strong weights room',
  },
  {
    title: 'Train with guidance',
    body: 'Trainers are on the floor through the day. Ask for a form check, a programme or a diet chart, and you get one.',
    photo: 'members-b',
    alt: 'Members training across the Be Strong gym floor',
  },
  {
    title: 'Train consistently',
    body: 'Open 6 AM to 11 PM, Monday to Saturday. Early before work, late after it, and the floor is cleaned through the day.',
    photo: 'cardio-view',
    alt: 'Treadmills and exercise bikes facing the windows on the Be Strong cardio deck',
  },
]

export const SERVICES: {
  title: string
  body: string
  photo: string
  alt: string
  wa: WaKey
  cta: string
}[] = [
  {
    title: 'Weight Training',
    body: 'Barbells, dumbbells, racks and machines for building strength and muscle.',
    photo: 'plates',
    alt: 'Adjustable benches in front of a full dumbbell rack at Be Strong The Gym',
    wa: 'weightTraining',
    cta: 'Ask about weight training',
  },
  {
    title: 'Cardio',
    body: 'A dedicated cardio deck with treadmills, bikes and cross trainers.',
    photo: 'cardio-deck',
    alt: 'A row of treadmills and exercise bikes on the Be Strong cardio deck',
    wa: 'cardio',
    cta: 'Ask about cardio',
  },
  {
    title: 'Personal Training',
    body: 'One-to-one coaching, a programme written for you and someone keeping you accountable.',
    photo: 'lat-pulldown',
    alt: 'Lat pulldown and seated row machines beside the Be Strong logo wall',
    wa: 'personalTraining',
    cta: 'Ask about personal training',
  },
  {
    title: 'Bodybuilding',
    body: 'Split routines, isolation work and the equipment to train every muscle group properly.',
    photo: 'cable-back',
    alt: 'A member performing a cable exercise at Be Strong The Gym',
    wa: 'bodybuilding',
    cta: 'Ask about bodybuilding',
  },
  {
    title: 'Fitness Training',
    body: 'General fitness for beginners and anyone training around a full-time job.',
    photo: 'floor-c',
    alt: 'The length of the Be Strong training floor with cardio and strength equipment',
    wa: 'fitnessTraining',
    cta: 'Ask about fitness training',
  },
  {
    title: 'Nutrition',
    body: 'Nutritional guidance to go with your training, built around food you already eat.',
    photo: 'office',
    alt: 'The reception desk at Be Strong The Gym',
    wa: 'nutrition',
    cta: 'Ask about nutrition',
  },
]

/** Women's personal training. Photos are real members training at the gym. */
export const WOMENS_PT = {
  points: [
    'One-to-one attention through the whole session',
    'A programme built around your goal, not a generic plan',
    'Guidance on technique so every exercise is done properly',
    'Progress tracked and the plan adjusted as you get stronger',
    'Nutritional guidance alongside the training',
    'Someone keeping you accountable week to week',
  ],
  photos: [
    { src: 'ig-9', alt: 'A trainer coaching a member through a lat pulldown at Be Strong The Gym' },
    { src: 'ig-11', alt: 'A member training with a barbell in front of the Be Strong logo wall' },
  ],
}

export const GALLERY_CATEGORIES = ['All', 'Facility', 'Equipment', 'Cardio', 'Members'] as const
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

export const GALLERY: { src: string; alt: string; cat: Exclude<GalleryCategory, 'All'> }[] = [
  { src: 'floor-e', alt: 'Adjustable benches and an exercise ball on the Be Strong training floor', cat: 'Facility' },
  { src: 'dumbbells', alt: 'The dumbbell rack and benches in the Be Strong weights room', cat: 'Equipment' },
  { src: 'cardio-view', alt: 'Treadmills facing the windows on the Be Strong cardio deck', cat: 'Cardio' },
  { src: 'members-wall', alt: 'Members together in front of the Be Strong logo wall', cat: 'Members' },
  { src: 'strength-floor', alt: 'The main strength floor at Be Strong The Gym', cat: 'Facility' },
  { src: 'machines', alt: 'Pin-selected machines and a cable station at Be Strong The Gym', cat: 'Equipment' },
  { src: 'floor-b', alt: 'The length of the Be Strong gym floor with mirrors along the wall', cat: 'Facility' },
  { src: 'smith', alt: 'A Smith machine and plate-loaded equipment at Be Strong The Gym', cat: 'Equipment' },
  { src: 'cardio-deck', alt: 'Treadmills and exercise bikes lined along the cardio deck', cat: 'Cardio' },
  { src: 'members-b', alt: 'Members training across the Be Strong gym floor', cat: 'Members' },
  { src: 'plates', alt: 'Adjustable benches in front of the dumbbell rack', cat: 'Equipment' },
  { src: 'floor-a', alt: 'Strength equipment and mirrors on the Be Strong floor', cat: 'Facility' },
  { src: 'lat-pulldown', alt: 'Lat pulldown and seated row machines beside the Be Strong logo wall', cat: 'Equipment' },
  { src: 'two-members', alt: 'Two members in front of the Be Strong logo wall', cat: 'Members' },
  { src: 'cables', alt: 'The cable crossover station beside the windows', cat: 'Equipment' },
  { src: 'floor-f', alt: 'Benches, racks and machines across the Be Strong training floor', cat: 'Facility' },
  { src: 'legpress', alt: 'The leg press machine at Be Strong The Gym', cat: 'Equipment' },
  { src: 'cable-back', alt: 'A member performing a cable exercise at Be Strong The Gym', cat: 'Members' },
  { src: 'floor-c', alt: 'Cardio and strength equipment down the length of the gym', cat: 'Facility' },
  { src: 'rack', alt: 'A power rack with an adjustable bench at Be Strong The Gym', cat: 'Equipment' },
  { src: 'bench-plates', alt: 'A flat bench with a loaded Olympic bar and plate tree', cat: 'Equipment' },
  { src: 'members-c', alt: 'Benches and machines on the Be Strong floor with members training', cat: 'Members' },
  { src: 'floor-d', alt: 'Mirrored walls and training equipment at Be Strong The Gym', cat: 'Facility' },
  { src: 'signboard', alt: 'The Be Strong The Gym signboard on Hilltop Road', cat: 'Facility' },
]

/** Instagram reel covers, shown in the follow strip. */
export const INSTAGRAM_POSTS = ['ig-9', 'ig-11', 'ig-4', 'ig-10', 'ig-8', 'ig-12', 'ig-5', 'ig-3', 'ig-1', 'ig-6']

/**
 * Genuine reviews published on the gym's Google Business Profile.
 * Long reviews are shortened; wording is otherwise unchanged.
 * Do not add anything here that is not a real published review.
 */
export const REVIEWS = [
  {
    name: 'Sajjad A.',
    text: 'The hygiene standards are commendable. The 6:00 AM to 11:00 PM timings are a major advantage, offering flexibility for people with demanding schedules. I particularly appreciate the dedicated ladies workout floor, cardio area and separate ladies changing room.',
  },
  {
    name: 'Sana F.',
    text: 'Every exercise has a purpose, every movement is explained in depth. The environment is motivating, disciplined, energetic, and most importantly very safe and comfortable for girls.',
  },
  {
    name: 'Farheen U.',
    text: 'I was honestly confused about how to start my fitness journey, but joining Be Strong has made the process easier and more disciplined. The accountability for both our food and workouts keeps me consistent and motivated.',
  },
  {
    name: 'Sanjay S.',
    text: 'He not only trained me properly in the gym but also guided me with my diet, regularly checked my progress, and stayed connected through updates and progress pictures. That level of dedication really makes a difference.',
  },
  {
    name: 'Zainab A.',
    text: 'The gym is always nice and clean, the equipment is well maintained and the trainers are friendly and helpful with all our doubts. I would recommend it to everyone, especially girls.',
  },
  {
    name: 'Danish S.',
    text: 'I have been going to this gym for the past 2 years. The upkeep of the machines and cables is very good. If something breaks, it is fixed and made available by the next day.',
  },
  {
    name: 'Aditya K.',
    text: 'Been to many gyms such as Cult and other reputed ones and still vouch for this one. The machinery and hygiene speak volumes about itself.',
  },
  {
    name: 'Majid S.',
    text: 'The equipment is top notch and well serviced. The trainers guide you at every step and help you understand the exercises you are performing. The gym also provides a safe environment for ladies.',
  },
  {
    name: 'Gary',
    text: 'The gym provides a diet chart, and you can share pictures of your intake with the trainers and seek guidance on it and the workouts accordingly.',
  },
]

export const ABOUT = {
  paragraphs: [
    'Be Strong The Gym is on Hilltop Road in Red Hills, a few minutes from Lakdikapul. It is a full gym rather than a studio: a strength floor with racks, benches and plate-loaded machines, a dumbbell room, cable and functional stations, and a cardio deck that gets its own space so nobody is queueing behind a superset.',
    'Trainers are on the floor through the day. That is the part members write about most. You can ask for a form check on a lift you have never done, a programme for the next three months, or a diet chart built around the food already in your kitchen.',
    'The gym is air conditioned, CCTV monitored and has parking, changing rooms and a dedicated ladies changing room. It is open 6 AM to 11 PM, Monday to Saturday, which covers the early shift and the after-work crowd alike.',
  ],
  photos: [
    { src: 'floor-b', alt: 'The length of the Be Strong gym floor with mirrors and training equipment' },
    { src: 'signboard', alt: 'The Be Strong The Gym signboard on Hilltop Road, Red Hills' },
  ],
}

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'What are the gym timings?',
    a: 'Monday to Saturday, 6:00 AM to 11:00 PM. Sunday is a holiday. Timings can change on public holidays, so message us on WhatsApp to check.',
  },
  {
    q: 'Where is Be Strong The Gym located?',
    a: '11-5-291, Hilltop Road, Red Hills, Lakdikapul, Hyderabad. There is parking at the gym.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes. Personal training covers a programme written for you, guidance on technique, progress tracking and nutritional guidance. Message us on WhatsApp for current plans and timings.',
  },
  {
    q: 'Do you offer personal training for women?',
    a: 'Yes. Women train at Be Strong across the day and personal training is available. Send us a message on WhatsApp and we will take you through the options.',
  },
  {
    q: 'Do you have couple membership offers?',
    a: 'Yes. Couple membership offers are available and the details change from time to time. Message us on WhatsApp for the current offer.',
  },
  {
    q: 'How do I find out membership pricing?',
    a: 'Message us on WhatsApp and we will send you the current plans and pricing. You can also call the gym or walk in during opening hours.',
  },
  {
    q: 'I have never trained before. Is that a problem?',
    a: 'Not at all. Trainers are on the floor through the day to show you the movements and put a starting programme together.',
  },
  {
    q: 'Can I see the gym before joining?',
    a: 'Yes. Walk in any time we are open, or message us on WhatsApp and we will tell you a good time to come and look around.',
  },
]

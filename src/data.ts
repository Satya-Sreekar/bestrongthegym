export const GYM = {
  name: 'Be Strong The Gym',
  phone: '+91 93909 87869',
  tel: 'tel:+919390987869',
  email: 'bestrongthegym@gmail.com',
  address: ['11-5-291, Hilltop Road', 'Red Hills, Lakdikapul', 'Hyderabad 500004'],
  instagram: 'https://www.instagram.com/bestrongthegym/',
  reviewsUrl: 'https://maps.google.com/?cid=10019910934855626721',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=BeStrongTheGym%2C%20Hilltop%20Road%2C%20Red%20Hills%2C%20Lakdikapul%2C%20Hyderabad',
  mapEmbed: 'https://www.google.com/maps?q=BeStrongTheGym,+Hilltop+Road,+Red+Hills,+Lakdikapul,+Hyderabad&output=embed',
  hours: { open: 6, close: 23 }, // Mon–Sat, IST
  rating: 4.9,
  reviews: 176,
}

export const wa = (msg: string) => `https://wa.me/919390987869?text=${encodeURIComponent(`Hello Be Strong, ${msg}`)}`
export const TRIAL = wa('I want to book a free trial. Which day works?')

export const NAV: [string, string][] = [
  ['Inside', '#inside'], ['First 30 days', '#first-30'], ['Tracks', '#tracks'], ['Coaches', '#coaches'],
  ['Membership', '#membership'], ['Members', '#members'], ['Visit', '#visit'],
]

export const MARQUEE = ['floor-a', 'cardio-view', 'dumbbells', 'members-c', 'cables', 'floor-c', 'smith', 'members-b', 'plates', 'floor-e', 'lat-pulldown', 'floor-f']

export const STEPS = [
  { day: 'Day 1', title: 'Walk in. Try it free.', text: 'Come for a session on us. A coach shows you the floor, asks what you are after, and you train. No forms, no pressure.' },
  { day: 'Week 1', title: 'Get a plan you can follow.', text: 'Your coach writes your programme and a diet chart built on what you already eat at home. Simple enough to stick to.' },
  { day: 'Day 30', title: 'See it on the scale and in the mirror.', text: 'Progress photos, a weigh-in and a check-in on your food. Then the plan gets harder, because you did.' },
]

export const TRACKS = [
  { key: 'muscle', tab: 'Build muscle', img: 'cable-back', title: 'Put on size, the right way.', points: ['Push, pull and legs splits written for your schedule', 'Coaches watch your form on every heavy set', 'Meal guidance for eating enough without junk'] },
  { key: 'fat', tab: 'Lose fat', img: 'cardio-deck', title: 'Drop weight without starving.', points: ['Weights plus short cardio blocks, not hours on a treadmill', 'A diet chart made from home food, checked weekly', 'Weigh-ins and photos so you can see it moving'] },
  { key: 'fit', tab: 'Get fitter', img: 'stretch', title: 'Feel stronger in everyday life.', points: ['Full-body sessions three or four days a week', 'Mobility work so you move well, not just lift well', 'Cardio deck for when you want to sweat'] },
  { key: 'pt', tab: 'Train 1-on-1', img: 'women-coaching', title: 'A coach in your corner every session.', points: ['One trainer, one programme, built for you', 'Diet plan, progress photos, WhatsApp check-ins', 'Ideal if you are starting from zero or chasing a deadline'] },
  { key: 'diet', tab: 'Fix my diet', img: 'members-b', title: 'Eat better with what is already in your kitchen.', points: ['A chart based on home food, not supplements', 'Send photos of your meals and get feedback', 'Adjusted as your training changes'] },
]

export const COACHES = [
  { name: 'Syed Sohail', role: 'Personal trainer', blurb: 'The name members mention most. Explains the why behind every movement, writes your diet chart, and keeps checking in until the results show.', tags: ['Transformations', 'Fat loss', 'Form', 'Diet'] },
  { name: 'Rohan', role: 'Floor trainer', blurb: 'On the floor across shifts, correcting form and making sure nobody trains alone.', tags: ['Strength', 'Beginners'] },
]

export type Term = 'm' | 'q' | 'y'
export const TERMS: { key: Term; label: string; months: number }[] = [
  { key: 'm', label: '1 month', months: 1 },
  { key: 'q', label: '3 months', months: 3 },
  { key: 'y', label: '12 months', months: 12 },
]
export const PLANS: { name: string; note: string; popular?: boolean; prices: Record<Term, number | null> | null; range?: string; includes: string[] }[] = [
  { name: 'Strength', note: 'Weights only', prices: { m: 1800, q: null, y: null }, includes: ['Strength floor and dumbbell room', 'All plate-loaded and pin machines', 'Coaches on the floor every shift', 'Changing room, lockers, parking'] },
  { name: 'Strength + Cardio', note: 'The whole gym', popular: true, prices: { m: 2300, q: 5000, y: 12000 }, includes: ['Everything in Strength', 'Cardio deck: treadmills, bikes, ellipticals', 'Coaches on the floor every shift', 'Changing room, lockers, parking'] },
  { name: 'Personal training', note: 'One coach, one plan', prices: null, range: '₹8,000–10,000', includes: ['A dedicated coach every session', 'Programme and diet chart written for you', 'Progress photos and weigh-ins', 'WhatsApp support between sessions'] },
]

export const TOPICS = [['trainers', 46], ['branded equipment', 5], ['changing room', 5], ['neat and clean', 4], ['cardio section', 3], ['ladies timings', 2]] as const

export const VOICES = [
  { name: 'Farheen U.', text: 'I was honestly confused about how to start. The accountability for both food and workouts keeps me consistent. Even two hours here does not feel like two hours.' },
  { name: 'Sajjad A.', text: 'Hygiene standards are commendable. The 6 AM to 11 PM timings are a major advantage, and the dedicated ladies floor and changing room add real privacy and comfort.' },
  { name: 'Sana F.', text: 'Every exercise has a purpose, every movement is explained. Within a month I can feel and see a difference. Very safe and comfortable for girls.' },
  { name: 'Gary', text: 'The gym provides a diet chart, and you can share pictures of your meals with the trainers and get guidance on it.' },
  { name: 'Zainab A.', text: 'Always clean, equipment well maintained, trainers friendly with all our doubts. I recommend girls go in the morning when it is less crowded and pretty safe.' },
  { name: 'Danish S.', text: 'Two years here. Trainers come and go but the upkeep of machines and cables is very good. If something breaks it is fixed by the next day.' },
  { name: 'Aditya K.', text: 'Been to Cult and other reputed gyms and still vouch for this one. The price is unprecedentedly good and the hygiene speaks for itself.' },
]
export const RESULT = { from: 94, to: 83.5, months: 2.5, name: 'Sanjay S.', quote: 'He trained me properly, guided my diet, checked my progress and stayed connected through updates and progress pictures.' }

export const FAQ = [
  { q: 'I have never lifted before. Is that a problem?', a: 'No. Most people who join have not. A coach is on the floor every shift to teach you the movements and write a programme you can actually follow.' },
  { q: 'Is there a quieter time for women?', a: 'Mornings are the quietest, and members regularly say it is a comfortable place to train. The floor is supervised and CCTV-monitored, and there is a separate ladies changing room.' },
  { q: 'What should I bring for the free trial?', a: 'Training shoes, a towel and water. Come at any time between 6 AM and 11 PM, Monday to Saturday, or message us first and we will have a coach ready.' },
  { q: 'Do you help with food, or only training?', a: 'Both. Every plan comes with a diet chart built around home food. You can send photos of your meals to your trainer and get feedback.' },
  { q: 'How do I pay and how long am I locked in?', a: 'Pay at the front desk, monthly or upfront for three or twelve months. Longer terms cost a lot less per month. There is no contract beyond the term you pay for.' },
  { q: 'Is there parking?', a: 'Yes, there is parking at the gym, and the premises are CCTV-monitored.' },
  { q: 'Are you open on Sundays?', a: 'Not currently. We are open 6 AM to 11 PM, Monday to Saturday. Holiday timings can change, so message us to check.' },
]

export const IG = Array.from({ length: 12 }, (_, i) => `ig-${i + 1}`)

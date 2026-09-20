export const GYM = {
  name: 'Be Strong The Gym',
  phone: '+91 93909 87869',
  tel: 'tel:+919390987869',
  email: 'bestrongthegym@gmail.com',
  address: ['11-5-291, Hilltop Road', 'Red Hills, Lakdikapul', 'Hyderabad, Telangana 500004'],
  instagram: 'https://www.instagram.com/bestrongthegym/',
  reviewsUrl: 'https://maps.google.com/?cid=10019910934855626721',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Be%20Strong%20The%20Gym%2C%2011-5-291%20Hilltop%20Road%2C%20Red%20Hills%2C%20Lakdikapul%2C%20Hyderabad%20500004',
  mapEmbed:
    'https://www.google.com/maps?q=Be+Strong+The+Gym,+Hilltop+Road,+Red+Hills,+Lakdikapul,+Hyderabad&output=embed',
  hours: { open: 6, close: 23 }, // Mon–Sat, IST
  rating: 4.9,
  googleReviews: 176,
  totalRatings: 456,
}

export const wa = (msg: string) => `https://wa.me/919390987869?text=${encodeURIComponent(`Hi Be Strong! ${msg}`)}`

export const FACILITIES = [
  { img: 'strength-floor', name: 'Strength floor', desc: 'Benches, plate-loaded stations and racks, laid out with room to move.' },
  { img: 'dumbbell-room', name: 'Dumbbell room', desc: 'A dedicated room with a full dumbbell rack and adjustable benches.' },
  { img: 'cable-station', name: 'Cable & functional', desc: 'Multi-station cable towers for isolation and functional work.' },
  { img: 'cardio-deck', name: 'Cardio deck', desc: 'Commercial treadmills, ellipticals and bikes in their own lane.' },
  { img: 'machines', name: 'Selectorised machines', desc: 'Lat pulldown, seated row and more, maintained and serviced.' },
  { img: 'smith-rack', name: 'Smith & rack', desc: 'Guided barbell work for squats, presses and heavy sessions.' },
]

export const AMENITIES = ['Air-conditioned', 'Changing room', 'Restroom', 'Parking', 'CCTV monitored', 'Music system']

export const PROGRAMS = [
  { name: 'Strength & weight training', img: 'gs-2', tags: ['Barbell', 'Machines', 'Progressive overload'], desc: 'Progressive compound lifting with form coaching, for first-timers through to experienced lifters.' },
  { name: 'Bodybuilding', img: 'gs-4', tags: ['Hypertrophy', 'Splits', 'Physique'], desc: 'Hypertrophy splits, clean posing mirrors and nutrition support for physique goals.' },
  { name: 'Fat loss & cardio', img: 'gs-3', tags: ['Conditioning', 'Diet chart', 'Tracking'], desc: 'Structured cardio blocks paired with strength work and a diet chart that fits your routine.' },
  { name: 'Personal training', img: 'gs-5', tags: ['1:1', 'Accountability', 'Diet'], desc: 'One-to-one coaching: a programme built for you, diet guidance, progress photos and regular check-ins.' },
  { name: 'Nutrition consultation', img: 'gs-7', tags: ['Diet plan', 'Check-ins'], desc: 'Practical meal guidance built around home food. Share photos of your meals and get feedback.' },
]

export const TRAINERS = [
  { name: 'Syed Sohail', short: 'Sohail', role: 'Personal trainer', initial: 'S', tags: ['Body transformation', 'Fat loss', 'Form coaching', 'Diet guidance'], bio: 'The name that comes up in review after review. Known for explaining the why behind every movement, building diet plans and following up until the results show.' },
  { name: 'Rohan', short: 'Rohan', role: 'Trainer', initial: 'R', tags: ['Strength', 'Floor coaching'], bio: 'On the floor every session, correcting form and keeping the programme honest.' },
]

export type TermKey = 'm' | 'q' | 'y'
export const TERMS: { key: TermKey; label: string; months: number; off?: string }[] = [
  { key: 'm', label: 'Monthly', months: 1 },
  { key: 'q', label: '3 months', months: 3, off: '−28%' },
  { key: 'y', label: '12 months', months: 12, off: '−57%' },
]
type Prices = Record<TermKey, number | null>
export const PLANS: { name: string; tag: string; desc: string; popular?: boolean; prices: Prices | null; range?: string; features: string[] }[] = [
  { name: 'Strength', tag: 'Membership', desc: 'The full strength floor, without cardio.', prices: { m: 1800, q: null, y: null }, features: ['Strength floor & dumbbell room', 'Plate-loaded & selectorised machines', 'Guidance from floor trainers', 'Changing room & parking'] },
  { name: 'Strength + Cardio', tag: 'Most popular', popular: true, desc: 'Every zone in the gym, including the cardio deck.', prices: { m: 2300, q: 5000, y: 12000 }, features: ['Everything in Strength', 'Cardio deck: treadmills, ellipticals, bikes', 'Guidance from floor trainers', 'Changing room & parking'] },
  { name: 'Personal training', tag: '1:1 coaching', desc: 'One-to-one coaching for faster, safer results.', prices: null, range: '₹8,000 – 10,000', features: ['A dedicated personal trainer', 'Programme and diet plan built for you', 'Progress photos & regular check-ins', 'WhatsApp support between sessions'] },
]

export const REVIEWS = [
  { name: 'Sanjay S.', year: 2026, text: "When I joined, my weight was 94 kg, and in just 2.5 months I've brought it down to 83.5 kg. One of the most premium yet affordable options in the Red Hills–Lakdikapul area." },
  { name: 'Sana F.', year: 2026, text: "One of the finest fitness spaces I've ever trained at. The environment is motivating, disciplined, and very safe and comfortable for girls." },
  { name: 'Aditya K.', year: 2026, text: 'Been to many gyms, such as Cult and other reputed ones, and still vouch for this one. The machinery and hygiene speak volumes.' },
  { name: 'Danish S.', year: 2026, text: "I've been coming here for two years. The upkeep of the machines and cables is very good. If something breaks, it's fixed by the next day." },
  { name: 'Shaji', year: 2024, text: 'Separate dumbbell room, separate sections for cardio and floor workouts, clean mirrors, changing room… what else is needed in a gym?' },
  { name: 'Mohammed M.', year: 2025, text: "The owners are extremely supportive, humble, and genuinely care about every member's fitness journey. You feel welcomed and valued." },
]

export const FAQ = [
  { q: 'What are your opening hours?', a: "Monday to Saturday, 6:00 AM to 11:00 PM. We're closed on Sundays. Timings can change on public holidays, so WhatsApp us to check." },
  { q: 'How much does membership cost?', a: 'Strength is ₹1,800 a month. Strength + Cardio is ₹2,300 a month, ₹5,000 for 3 months or ₹12,000 for 12 months. Personal training is ₹8,000–10,000 depending on your goal.' },
  { q: 'Is Be Strong good for complete beginners?', a: "Yes. There's a certified trainer on the floor every session. They'll teach you the movements, correct your form and build a starting programme and diet chart." },
  { q: 'Is the gym comfortable for women?', a: 'Yes. Members regularly say the space is safe, disciplined and comfortable for women. The floor is supervised and CCTV-monitored, with a separate changing room.' },
  { q: 'Do you provide diet plans?', a: 'Yes. Diet charts are built around home food, not supplements. Your trainer checks your progress and adjusts the plan as you go.' },
  { q: "What's included with personal training?", a: 'A dedicated trainer, a programme and diet plan built for you, progress photos, regular check-ins and WhatsApp support between sessions.' },
  { q: 'Is parking available?', a: 'Yes, parking is available at the gym. The premises are CCTV-monitored.' },
  { q: 'Can I see the gym before joining?', a: 'Of course. Walk in during opening hours, or message us on WhatsApp to book a free trial session.' },
]

export const IG = Array.from({ length: 12 }, (_, i) => `ig-${i + 1}`)

// Industry Visits, Workshops & Field Activities Data
// Photos එකතු කිරීමට පහත ක්‍රම 2 න් එකක් භාවිතා කරන්න:
// Option 1: Photo එක d:\portfolio\src\assets\ එකට දමා උඩින් import කර image: visit1Img ලෙස යොදන්න.
// Option 2: Direct photo Web URL එකක් image: 'https://...' ලෙස යොදන්න.

export const activitiesData = [
  {
    id: 1,
    title: 'SLIATE HNDIT Industry Exposure Visit',
    category: 'Industry Visit',
    organization: 'SLIATE HNDIT',
    date: '2025 / 2026',
    location: 'Colombo, Sri Lanka',
    description: 'Participated in a specialized enterprise technology & system infrastructure visit. Observed real-world software engineering practices, server room setups, and Agile project workflows.',
    tags: ['System Infrastructure', 'Agile Operations', 'Enterprise IT'],
    image: null, // e.g. 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' or import visit1 from '../assets/visit1.jpg'
  },
  {
    id: 2,
    title: 'Banking & Financial Systems Field Study',
    category: 'Field Study',
    organization: "People's Bank Sri Lanka",
    date: '2024',
    location: 'Central Province Branch',
    description: 'Studied core banking transaction flows, digital loan approval queues, customer verification protocols, and RDBMS financial transaction logging.',
    tags: ['FinTech Workflows', 'Banking RDBMS', 'Loan Operations'],
    image: null,
  },
];

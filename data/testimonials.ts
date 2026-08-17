export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh P.",
    rating: 5,
    quote:
      "Dr. Kakare is an excellent doctor — very humble and polite. He gave an accurate diagnosis for my diabetes that two other doctors had missed. I highly recommend him.",
    service: "Diabetes Management",
    date: "2025-10-12",
  },
  {
    id: 2,
    name: "Sushma D.",
    rating: 5,
    quote:
      "The facility at Sunshine Hospital is exceptionally clean and hygienic. The staff is so supportive and kind. Best hospital experience I have had in Kolhapur.",
    service: "General Care",
    date: "2025-11-05",
  },
  {
    id: 3,
    name: "Anil M.",
    rating: 5,
    quote:
      "My elderly mother has been a patient of Dr. Kakare for two years. He is incredibly respectful towards older patients — takes his time and explains everything clearly.",
    service: "Internal Medicine",
    date: "2025-12-18",
  },
  {
    id: 4,
    name: "Priya K.",
    rating: 5,
    quote:
      "The organised system at Sunshine is impressive — minimal waiting time, proper documentation, and thorough follow-up. Very professional setup.",
    service: "Thyroid Treatment",
    date: "2026-01-22",
  },
  {
    id: 5,
    name: "Vinod S.",
    rating: 5,
    quote:
      "I came for blood pressure management and the treatment has been excellent. Dr. Kakare's approach is scientific yet compassionate. My BP is now well controlled.",
    service: "Blood Pressure Management",
    date: "2026-02-08",
  },
  {
    id: 6,
    name: "Meera T.",
    rating: 5,
    quote:
      "Went to the emergency at 2 AM with severe gastric pain. The 24/7 service truly works — I was attended to immediately. The staff was calm and reassuring throughout.",
    service: "Emergency Care",
    date: "2026-03-14",
  },
];

export const aggregateRating = {
  ratingValue: 4.8,
  reviewCount: 200,
  source: "Google Reviews",
};

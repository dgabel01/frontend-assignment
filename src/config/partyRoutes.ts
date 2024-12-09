import partyRoutePhoto from "@/assets/images/partyroute.png";
import ultraRoutePhoto from "@/assets/images/ultraroute.png";
import greeceRoutePhoto from "@/assets/images/greeceroute.png";
import adventureRoutePhoto from "@/assets/images/adventureroute.png";
import { StaticImageData } from "next/image";

export interface RouteDetail {
  id: string;
  title: string;
  price: string;
  img: StaticImageData;
  party: number;
  adventure: number;
  description: string;
  highlights: string[];
  itinerary: string[];
  testimonials: {
    name: string;
    quote: string;
    rating: number;
  }[];
}

export const PARTY_ROUTES: RouteDetail[] = [
  {
    id: "party-route",
    title: "Party Route",
    price: "€750/person",
    img: partyRoutePhoto,
    party: 80,
    adventure: 60,
    description: "Experience the ultimate party adventure on the high seas! This route is designed for those who want to dance, socialize, and create unforgettable memories.",
    highlights: [
      "Vibrant nightlife hotspots",
      "Beach club experiences",
      "Live DJ performances",
      "Sunset cocktail parties"
    ],
    itinerary: [
      "Day 1: Departure and welcome party",
      "Day 2: Island hopping and beach celebrations",
      "Day 3: Water sports and evening entertainment",
      "Day 4: Final night spectacular party"
    ],
    testimonials: [
      {
        name: "Jake S.",
        quote: "Best party route ever! Non-stop fun and incredible memories.",
        rating: 5
      },
      {
        name: "Emma L.",
        quote: "Exceeded all my expectations. The energy was unreal!",
        rating: 5
      }
    ]
  },
  {
    id: "ultra-route",
    title: "Ultra Route",
    price: "€820/person",
    img: ultraRoutePhoto,
    party: 90,
    adventure: 50,
    description: "The ultimate high-energy sailing experience for party enthusiasts. Non-stop entertainment and world-class performances.",
    highlights: [
      "Ultra Music Festival experiences",
      "Private boat parties",
      "International DJ lineups",
      "VIP club access"
    ],
    itinerary: [
      "Day 1: Embarkation and welcome mixer",
      "Day 2: Music festival day",
      "Day 3: Exclusive boat party",
      "Day 4: Farewell celebration"
    ],
    testimonials: [
      {
        name: "Mike R.",
        quote: "Absolutely mind-blowing experience. The Ultra Route is legendary!",
        rating: 5
      },
      {
        name: "Sarah K.",
        quote: "Best week of my life. The music and energy were incredible.",
        rating: 5
      }
    ]
  },
  {
    id: "greece-route",
    title: "Greece Route",
    price: "€710/person",
    img: greeceRoutePhoto,
    party: 70,
    adventure: 85,
    description: "A perfect blend of ancient history, stunning landscapes, and vibrant party scenes across the Greek islands.",
    highlights: [
      "Historic island visits",
      "Local cultural experiences",
      "Sunset parties in Mykonos",
      "Authentic Greek cuisine"
    ],
    itinerary: [
      "Day 1: Athens departure",
      "Day 2: Santorini exploration",
      "Day 3: Mykonos party scene",
      "Day 4: Relaxation and farewell dinner"
    ],
    testimonials: [
      {
        name: "Alex P.",
        quote: "Greece Route was a perfect mix of culture, adventure, and fun!",
        rating: 5
      },
      {
        name: "Olivia M.",
        quote: "Breathtaking views and unforgettable parties. Highly recommend!",
        rating: 5
      }
    ]
  },
  {
    id: "adventure-route",
    title: "Adventure Route",
    price: "€890/person",
    img: adventureRoutePhoto,
    party: 60,
    adventure: 90,
    description: "For the thrill-seekers and nature lovers. An epic journey combining extreme sports, stunning landscapes, and unique experiences.",
    highlights: [
      "Extreme water sports",
      "Cliff jumping",
      "Kayaking and snorkeling",
      "Secluded beach explorations"
    ],
    itinerary: [
      "Day 1: Arrival and equipment setup",
      "Day 2: Extreme sports day",
      "Day 3: Nature expedition",
      "Day 4: Final adventure challenge"
    ],
    testimonials: [
      {
        name: "Tom H.",
        quote: "The most adventurous trip I've ever taken. Absolutely incredible!",
        rating: 5
      },
      {
        name: "Lisa W.",
        quote: "Pushed my limits and created memories that will last a lifetime.",
        rating: 5
      }
    ]
  }
];
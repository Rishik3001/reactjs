
import Card from "./Card";
import profile1 from '../assets/fitness1.jpeg';
import profile2 from '../assets/fitness2.webp';
import profile3 from '../assets/fitness3.jpg';
import profile4 from '../assets/tech1.jpg';
import profile5 from '../assets/tech2.jfif';
import profile6 from '../assets/tech3.jfif';
import profile7 from '../assets/vegan1.jfif';
import profile8 from '../assets/vegan2.jfif';
import profile9 from '../assets/vegan.webp';

  const INFLUENCER_LIST = [
    // Fitness Influencers in NYC
    {
      id: "1",
      category: "fitness influencers",
      profile_picture: profile1,
      name: "John Fit",
      latest_post: {
        id: "post-1",
        image: "https://example.com/post1.jpg",
        caption: "Morning run in Central Park! #NYC #Fitness",
        timestamp: "2024-08-07T06:30:00Z",
        basic_stats: {
          likes: 1200,
          comments: 150,
          shares: 80
        }
      }
    },
    {
      id: "2",
      category: "fitness influencers",
      profile_picture: profile2,
      name: "Jane Strong",
      latest_post: {
        id: "post-2",
        image: "https://example.com/post2.jpg",
        caption: "Crushing my leg day workout! #FitnessGoals",
        timestamp: "2024-08-06T18:45:00Z",
        basic_stats: {
          likes: 980,
          comments: 120,
          shares: 45
        }
      }
    },
    {
      id: "3",
      category: "fitness influencers",
      profile_picture: profile3,
      name: "Mike Muscle",
      latest_post: {
        id: "post-3",
        image: "https://example.com/post3.jpg",
        caption: "New workout routine available now! #FitnessJourney",
        timestamp: "2024-08-05T09:00:00Z",
        basic_stats: {
          likes: 1100,
          comments: 160,
          shares: 70
        }
      }
    },
    
    // Tech Gadget Reviewers
    {
      id: "4",
      category: "tech gadget influencers",
      profile_picture: profile4,
      name: "Tech Guru",
      latest_review: {
        id: "review-1",
        image: "https://example.com/review1.jpg",
        caption: "Unboxing the latest smartphone! #TechReview",
        timestamp: "2024-08-07T14:00:00Z",
        basic_stats: {
          likes: 2300,
          comments: 300,
          shares: 150
        }
      },
      follower_count: 50000
    },
    {
      id: "5",
      category: "tech gadget influencers",
      profile_picture: profile5,
      name: "Gadget Geek",
      latest_review: {
        id: "review-2",
        image: "https://example.com/review2.jpg",
        caption: "Reviewing the new smartwatch - Is it worth it? #Gadgets",
        timestamp: "2024-08-06T20:15:00Z",
        basic_stats: {
          likes: 1500,
          comments: 200,
          shares: 90
        }
      },
      follower_count: 35000
    },
    {
      id: "6",
      category: "tech gadget influencers",
      profile_picture: profile6,
      name: "Digital Dave",
      latest_review: {
        id: "review-3",
        image: "https://example.com/review3.jpg",
        caption: "Hands-on with the latest laptop - A game changer? #TechReview",
        timestamp: "2024-08-05T11:00:00Z",
        basic_stats: {
          likes: 1800,
          comments: 250,
          shares: 120
        }
      },
      follower_count: 42000
    },
    
    // Vegan Recipe Creators
    {
      id: "7",
      category: "vegan recipe creators",
      profile_picture: profile7,
      name: "Vegan Chef Emma",
      latest_recipe: {
        id: "recipe-1",
        image: "https://example.com/recipe1.jpg",
        caption: "Delicious vegan lasagna! #VeganRecipes",
        timestamp: "2024-08-07T17:00:00Z",
        basic_stats: {
          likes: 1800,
          comments: 220,
          shares: 130
        }
      }
    },
    {
      id: "8",
      category: "vegan recipe creators",
      profile_picture: profile8,
      name: "Plant-Based Patty",
      latest_recipe: {
        id: "recipe-2",
        image: "https://example.com/recipe2.jpg",
        caption: "Easy vegan smoothie bowl #HealthyEating",
        timestamp: "2024-08-06T08:45:00Z",
        basic_stats: {
          likes: 1400,
          comments: 180,
          shares: 100
        }
      }
    },
    {
      id: "9",
      category: "vegan recipe creators",
      profile_picture: profile9,
      name: "Green Gourmet",
      latest_recipe: {
        id: "recipe-3",
        image: "https://example.com/recipe3.jpg",
        caption: "Savory vegan chili for cozy nights #VeganCooking",
        timestamp: "2024-08-05T15:00:00Z",
        basic_stats: {
          likes: 1600,
          comments: 210,
          shares: 110
        }
      }
    }
  ];

const Cards = ({searchQuery}) => {

    const filteredInfluencers = INFLUENCER_LIST.filter(influencer =>
      influencer.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const topInfluencers = filteredInfluencers.slice(0, 3);
    return(
      <div className="wrapp">
        <div className="cards mt-2">
             {topInfluencers.map(data => (
        <Card key={data.id} influencer={data} />
      ))}
        </div>
        </div>
    );
}


  
export default Cards;
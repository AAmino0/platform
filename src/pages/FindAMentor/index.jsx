import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Static data for mentors
const mentors = [
  {
    id: 1,
    name: "John Doe",
    expertise: "English & Mathematics",
    bio: "Experienced tutor with 5+ years of teaching English and Math.",
    availability: "Mon-Fri, 9 AM - 5 PM",
    image: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Science & Physics",
    bio: "Passionate about making science fun and easy to understand.",
    availability: "Weekends, 10 AM - 2 PM",
    image: "https://source.unsplash.com/200x200/?portrait,woman",
  },
  {
    id: 3,
    name: "Alice Johnson",
    expertise: "History & French",
    bio: "Specializes in European history and French tutoring.",
    availability: "Tue-Thu, 3 PM - 7 PM",
    image: "https://source.unsplash.com/200x200/?portrait,woman",
  },
  {
    id: 4,
    name: "Bob Brown",
    expertise: "Mathematics",
    bio: "Mathematics wizard with a passion for teaching algebra and calculus.",
    availability: "Mon-Wed, 1 PM - 5 PM",
    image: "https://pixabay.com/photos/woman-model-news-paper-female-7286576/",
  },
  {
    id: 5,
    name: "Ella Davis",
    expertise: "English",
    bio: "English literature enthusiast with a knack for creative writing.",
    availability: "Fri-Sun, 12 PM - 4 PM",
    image: "platform/src/assets/teaCH.jpg",
  },
  
];

function FindMentor() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterExpertise, setFilterExpertise] = useState("");

  const filteredMentors = mentors.filter(
    (mentor) =>
      (searchQuery === "" || mentor.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterExpertise === "" || mentor.expertise.toLowerCase().includes(filterExpertise.toLowerCase()))
  );

  return (
    <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold mb-8"
      >
        Find the Perfect <span className="text-orange-500">Mentor</span>
      </motion.h2>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search for mentors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border rounded-lg"
          />
        </div>
        <select
          value={filterExpertise}
          onChange={(e) => setFilterExpertise(e.target.value)}
          className="w-full max-w-xs p-3 border rounded-lg"
        >
          <option value="">Filter by expertise</option>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Physics">Physics</option>
          <option value="History">History</option>
          <option value="French">French</option>
        </select>
      </div>

      {/* Mentor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMentors.map((mentor) => (
          <motion.div
            key={mentor.id}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg shadow-lg bg-orange-100 dark:bg-gray-800"
          >
            <div className="flex items-center space-x-4">
              <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{mentor.expertise}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{mentor.bio}</p>
            <div className="mt-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span>{mentor.availability}</span>
            </div>
            <Link
              to={`/mentor/${mentor.id}`}
              className="mt-6 inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
            >
              Book a Session
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FindMentor;

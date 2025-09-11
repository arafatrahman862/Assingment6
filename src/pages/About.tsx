


const team = [
  {
    name: "Ayesha Rahman",
    role: "Co-Founder",
    desc: "Visionary leader driving client safety, adaptive partnerships, and market growth.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rafid Hossain",
    role: "CEO",
    desc: "Oversees business strategy and ensures seamless operations with innovative solutions.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tania Karim",
    role: "Product Manager",
    desc: "Leads product design and roadmap, aligning features with user expectations.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Imran Chowdhury",
    role: "Lead Engineer",
    desc: "Builds and scales our ride-sharing technology with robust backend architecture.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Farhana Akter",
    role: "Marketing Head",
    desc: "Crafts branding strategies and manages global outreach campaigns.",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Samirul Islam",
    role: "Launch Manager",
    desc: "Leads city launches and ensures platform adoption with local partnerships.",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">ABOUT US</h2>
          <p className="text-gray-400">
            Learn more about our vision, mission, and the story behind our ride-sharing platform.
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
              alt="city transport"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">About Our Ride-Sharing App</h3>
            <p className="text-gray-300 mb-4">
              Our platform connects riders with drivers, offering affordable, safe, and reliable
              rides anytime, anywhere. With innovative features like live tracking, multiple payment
              options, and advanced safety protocols, we are redefining urban mobility.
            </p>
            <p className="text-gray-300 mb-6">
              Designed to provide convenience and comfort, our app ensures a smooth journey whether
              you are heading to work, meeting friends, or exploring the city. We strive to create a
              community built on trust, efficiency, and sustainability.
            </p>
          </div>
        </div>

        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">TEAM</h3>
          <p className="text-gray-400">
            Meet the dedicated team shaping our platform by supporting our drivers and riders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-6 text-center hover:scale-105 transition-transform hover:text-orange-400"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500"
              />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-orange-400">{member.role}</p>
              <p className="text-gray-300 text-sm mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function BlogSection() {
  const blogPosts = [
    {
      _id: 1,
      date: "21 June 2021",
      image: "/images/blog1.jpg",
      title: "The Amazing Difference a Year of Travelling .",
      description: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
    },
    {
      _id: 2,
      date: "28 June 2021",
      image: "/images/blog2.jpg",
      title: "Reflections on 5 Months of Travel: Time to Hang",
      description: "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    },
    {
      _id: 3,
      date: "10 July 2021",
      image: "/images/blog3.jpg",
      title: "Reflections on 5 Months of Travel: Time to Hang",
      description: "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    },
  ];

  const cardColors = [
    "bg-[#5DB6F8]",
    "bg-[#FF914D]",
    "bg-[#FF7D8A]",
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-16 px-4 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] rounded-3xl shadow-2xl border border-blue-100 overflow-visible">
      {/* Decorative background blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#5DB6F8]/30 to-[#FF7D8A]/20 rounded-full blur-3xl opacity-60 z-0" />
      <div className="text-center space-y-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5DB6F8] via-[#FF914D] to-[#FF7D8A] drop-shadow-lg tracking-tight">Our Blog</h2>
        <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">Travel stories, tips, and inspiration from our team and community. Discover new destinations and make your next trip unforgettable!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 relative z-10">
        {blogPosts.map((post, idx) => (
          <Link key={post._id} href={`/blog/${post._id}`}
            className="group">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col cursor-pointer hover:scale-[1.03] hover:shadow-2xl transition-all border border-gray-100 relative">
              <div className={`relative h-56 ${cardColors[idx % cardColors.length]}`}> 
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-md"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-[#5DB6F8] to-[#FF914D] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
                  {post.date}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="mt-2 text-xl font-bold text-[#000929] group-hover:text-[#FF914D] transition-colors leading-tight mb-2">{post.title}</h3>
                <p className="text-base text-gray-600 flex-1 mb-4">{post.description}</p>
                <span className="inline-block mt-auto text-[#5DB6F8] font-semibold group-hover:underline group-hover:text-[#FF914D] transition-colors">Read More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Soft divider */}
      <div className="w-full h-10 mt-20 mb-10 bg-gradient-to-r from-[#5DB6F8]/10 via-[#FF914D]/10 to-[#FF7D8A]/10 rounded-full blur-md" />
    </section>
  );
}
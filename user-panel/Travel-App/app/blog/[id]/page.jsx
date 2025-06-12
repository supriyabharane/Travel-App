import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogContent = (
  <div className="prose max-w-none">
    <h2>Introduction</h2>
    <p>
      Figma has become a household name in the UIUX community. Being a truly browser-first product (not just storage in the cloud - no installation, no patching, no updates) and with highly collaborative features that no other player could think of or execute, Figma emerged as the clear market leader.
    </p>
    <p>
      You can design anything on Figma - from a cool logo to native apps and much more. But design is just the beginning of building a world-class product. You need to bring your product to life by actually building it Writing the damn code!
    </p>
    <h2>Export</h2>
    <p>Some Chis To</p>
    <p>
      That's where Locofyal comes in. While Figma is enough to get the ball rolling, Locofy ai even takes it further by enabling anyone with a Figma design to get high-quality, pixel-perfect code Hence, accelerating the building process with minimal time and a shallow learning curve, builders can now quickly and easily go from Figma to code.
      Locofy takes your design through various stages and eventually deploys it on a provider of your choice (Netlify, Vercell.
    </p>
    <h2>Zero Friction</h2>
    <p>
      We have made it very easy for builders to use Locofy. We & design stacks to transform Figma to code. a Figma plugin (Adobe XD & Sketch support coming soon) and completely brower-based tool. You can use your existing tech
    </p>
    <p>
      Locofy is built by creators for creators and therefore, we understand designers & creators need flexibility and choices. Hence, Locofy provides a plethora of tools and options, not present in vanilia Figma, to accelerate your design to code journey.
    </p>
    <p>
      Moreover, Locofy plugin offers a comprehensive collection of components such as buttons, inputs and dropdowns from all the top Ul libraries namely Material, Chakra Ul, Bootstrap and Ant Design, easing the process of designing while offering high flexibility & choices as you take your project from Figma to code.
    </p>
    <h2>AI Powered</h2>
    <p>
      Locofy converts your design components into the apt code by the help of something called "Tags". Tags are essentially types that you can assign to components so Locofy con create proper code for them.
    </p>
    <p>
      Tagging allows you to turn static layers on your Figma design files into interactive functional buttons, input fields, videos, iFrames and more.
    </p>
    <p>
      Locofy plugin uses Al to scan your design and recommends tags, so you can quickly tag all the components and go from Figma to code in astronomical speeds.
    </p>
    <h2>View Code & Digest Dynamic Data</h2>
    <p>
      Locofy Builder doesn't restrict engineers from creating apps that rely on a server or database for data.
    </p>
    <p>
      Using it, developers can create websites & apps that can digest dynamic content by allowing them to split their design into functional components that accept props, much like you do in an actual code base, only this time it is easier, faster and much more visual.
    </p>
    <p>
      Additionally, you can also just export the selected components you need without exporting the entire source code. These components can easily be plugged into your project and follow best industry practices so you don't have to spend time refactoring and cleaning itl
    </p>
    <p>
      Moreover, you also get access to the code files even before exporting in the Builder so you can monitor live changes to your code as you create components and accept props.
    </p>
    <h2>Share & Collaborate Seamlessly with Locofy Builder</h2>
    <p>
      Once you are ready to go live, the Locofy plugin will redirect you to the browser-based Locofy Builder where you can view code, share your work with your team members and not only will you get access to a live prototype, but you can quickly share the prototypes too!
    </p>
    <p>
      Your team members can contribute directly via browser.
    </p>
    <p>
      It also shows your design file as layers, much like Figma, so you can get a birds eye view of your design.
    </p>
    <p>
      Locoty Builder is inspired by the collaborative nature of Figma and therefore, not only will you get access to a live prototype, but you can quickly share the prototypes tool
    </p>
    <p>
      After you are done with the prototype, you can easily share it by using the public link provided by the Locofy Builder.
    </p>
    <h2>Direct Deploy & Export</h2>
    <p>
      Not only do you get options in terms of Ul libraries, Locofy Builder can also export code to various market leading frameworks like React, Next.js, Gatsby and React Native. Exported code can use TypeScript and CSS modules too.
    </p>
    <p>
      Don't like frameworks? Locofy also supports plain HTML & CSS.
    </p>
    <p>
      Locaty isn't just another Figma to React plugin. It can also handle deployment for you.
    </p>
    <p>
      Locofly integrates with trusted cloud hosts - Netlify and Vercel, freeing you from the nitty gritty nuances associated with deploying the code yourself.
    </p>
    <h2>Conclusion</h2>
    <p>
      Figma is an exceptionally powerful tool to design UI/UX and offers a wide range of free community resources that are more than sufficient for anyone to take the ball and run with it. However, the entire journey of turning your pixel-perfect design to responsive apps can take weeks, if not months and even after that, iterating over work can be challenging.
    </p>
    <p>
      With Locaty al you can beat the clock and go from Figma to code while following all the best industry practices. It does so with an Al-powered plugin so you can easily go from Figma to code and also provides you with features that are not present in Figma such as prototypes.
    </p>
    <p>
      Locofy is on a mission to supercharge your creations by taking them from just design files to servers all over the world. Build your first project on locofy.ai now.
    </p>
    <p>
      Validating an idea? Revamping your UI? The Locofy plugin puts Figma on steroids by taking your idea from design to websites and app.
    </p>
  </div>
);

export default async function BlogDetailPage(props) {
  const params = await props.params;
  const { id } = params;

  // Blog post data for title, image, intro
  const blogPosts = [
    {
      _id: 1,
      title: "The Amazing Difference a Year of Travelling .",
      image: "/images/blog1.jpg",
      intro: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
    },
    {
      _id: 2,
      title: "Reflections on 5 Months of Travel: Time to Hang",
      image: "/images/blog2.jpg",
      intro: "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    },
    {
      _id: 3,
      title: "Reflections on 5 Months of Travel: Time to Hang",
      image: "/images/blog3.jpg",
      intro: "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    },
  ];

  const post = blogPosts.find((b) => b._id === Number(id));

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 text-center text-2xl">Blog not found.</div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="mb-6 text-gray-700">{post.intro}</p>
        <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8 bg-black" />
        {blogContent}
      </div>
      <Footer />
    </main>
  );
}
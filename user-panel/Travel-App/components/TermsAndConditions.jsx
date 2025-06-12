import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-[#222]">Terms and conditions</h2>
        <p className="mb-4 text-gray-700 text-sm">
          Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          We have made it very easy for builders to use Locofy. We are a Figma plugin (Adobe XD & Sketch support coming soon!) and completely browser-based tool. You can use your existing tech & design stacks to transform Figma to code.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          Locofy is built by creators for creators and therefore, we understand designers & creators need flexibility and choices. Hence, Locofy provides a plethora of tools and options, not present in vanilla Figma, to accelerate your design to code journey.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          Moreover, Locofy plugin offers a comprehensive collection of components such as buttons, inputs and dropdowns from all the top UI libraries namely Material, Chakra UI, Bootstrap and Ant Design, easing the process of designing while offering high flexibility & choices as you take your project from Figma to code.
        </p>
        {[...Array(6)].map((_, i) => (
          <p key={i} className="mb-4 text-gray-700 text-sm">
            Locofy converts your design components into the apt code by the help of something called "Tags". Tags are essentially types that you can assign to components so Locofy can create proper code for them.<br />
            Tagging allows you to turn static layers on your Figma design files into interactive functional buttons, input fields, videos, iFrames and more.<br />
            Locofy plugin uses AI to scan your design and recommends tags, so you can quickly tag all the components and go from Figma to code in astronomical speeds.
          </p>
        ))}
        <ul className="space-y-3 text-sm">
          <li><span className="hover:text-gray-400 cursor-pointer">About Us</span></li>
          <li><span className="hover:text-gray-400 cursor-pointer">FAQs</span></li>
          <li><span className="hover:text-gray-400 cursor-pointer">Contact Us</span></li>
          <li>
            <Link href="/terms-and-conditions" className="hover:text-gray-400 cursor-pointer">
              Terms & Conditions
            </Link>
          </li>
          <li><span className="hover:text-gray-400 cursor-pointer">Blogs</span></li>
        </ul>
      </div>
    </section>
  );
}
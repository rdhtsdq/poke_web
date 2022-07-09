import { Link } from "react-router-dom";
const Sidebar = () => {
  return <div className="sticky z-50 w-[22vw] px-2 py-5 bg-gradient-to-b from-green-50 via-green-50 to-[#CEFBC9] h-[100vh] border-l-[6px] border-l-[#25CCAA]">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex space-x-3 items-center">
          <div className="p-7 h-5 w-5 bg-white rounded-full"></div>
          <div className="flex flex-col">
            <span className="uppercase text-lg text-amber-300">Astro Felix</span>
            <span className="text-gray-800 text-sm">Level 12</span>
          </div>
        </div>
        <Link className="px-8 py-2 bg-gradient-to-r from-[#AED9A2] to-[#25CCAA] rounded-full text-white text-sm" to={"/"}>Journal</Link>
        <div className="flex bg-white ">
          
        </div>
      </div>
    </div>
}

export default Sidebar
import Image from 'next/image'

export default function Home() {
  return (
    <main className="body">
   <header className="flex md:justify-center lg:justify-center justify-start md:p-14">
  
  <ul className="head flex flex-wrap md:space-x-8 md:text-lg text-sm ms:mt-0 mt-5 lg:space-x-8 space-x-3 px-7">
    <li className="hover:underline hover:underline-offset-8 ">
      <a href="#home">Home</a>
    </li>
    <li className="hover:underline hover:underline-offset-8  ">
      <a href="#skills">Skills</a>
    </li>
    <li className="hover:underline hover:underline-offset-8  ">
      <a href="#about">About</a>
    </li>
    <li className="hover:underline hover:underline-offset-8  ">
      <a href="#signin">Sign In</a>
    </li>
    <li className="hover:underline hover:underline-offset-8 ">
      <a href="#contacts">Contact Us</a>
    </li>
  </ul>
</header>
<div className="first image flex flex-col md:flex-row items-center md:items-start">
  <div className="order-2 md:order-2 p-10 md:p-20 overflow-hidden ">
    <Image src="/women.png" alt="Description of the image" width={800} height={300} />
  </div>
  <div className="Intro text-left  md:text-left ">
    <h1 className='px-10 md:px-0 mt-32 text-yellow-400 md:text-5xl lg:mt-36  lg:text-5xl text-2xl font-serif md:ml-20 md:mt-62  '>Hi, I am Samavia Shahid</h1>
    <p className="mt-2  flex  ml-10 font-sans py-5 text-sm md:text-2xl lg:text-base leading-relaxed md:mt-5 md:ml-20">
      I am a Frontend Developer. As a frontend developer, I strive to create captivating digital experiences that blend beautiful design with seamless functionality.
    </p>
  </div>
</div>
      <div id='skills btn'>
        <a href="#skills"><button
        type="submit"className="btn md:mt-10 md:h-20 font-bold  px-20  rounded-3xl   mt-10 ml-10 h-20 px-16 border-4 border-red-500 border-x-yellow-500 hover:border-4 border-red-500 border-x-green-500 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-2xl text-black "  >Skills</button></a>
      </div>
      <div className="main">
        
      <section id="skills" className="flex md:flex-row mt-20 flex-col shadow-lg lg:ml-20 lg:mr-20  md:justify-center md:gap-28 md:ml-0 sm:gap-10 ml-10 gap-10  ">
  <div className=" bg-pink-200 rounded-3xl transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none  w-64">
    <div className="p-4">
      <h2 className="text-gray-900 font-bold text-3xl cursor-pointer ">HTML</h2>
      <Image src="/html.jpg" alt="Image" width={140} height={300} className="mt-5 rounded-3xl" />
    </div>
  </div>
  <div className="  bg-yellow-200 rounded-3xl  transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none  w-64 ">
    <div className="p-4">
      <h2 className="text-gray-900 font-bold text-3xl mb-2 cursor-pointer">CSS</h2>
      <Image src="/css.jpg" alt="Image" width={100} height={200} className="mt-5 rounded-3xl" />
    </div>
  </div>
  <div className=" bg-green-300  rounded-3xl transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none   w-64">
    <div className="p-4 ">
      <h2 className="text-gray-900 font-bold text-3xl mb-2 cursor-pointer">JavaScript</h2>
      <Image src="/js.jpg" alt="Image" width={90} height={200} className="mt-5 rounded-3xl" />
    </div>
  </div>
       </section>
        <section id="skills" className="flex md:flex-row flex-col shadow-lg lg:ml-20 lg:mr-20   md:justify-center  md:ml-0 gap-10 ml-10 md:gap-28 md:mt-20  mt-10">
  <div className=" bg-gray-300 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none  rounded-3xl  w-64">
    <div className="p-4">
      <h2 className="text-gray-900 font-bold text-3xl cursor-pointer">Next.js</h2>
      <Image src="/next.jpg" alt="Image" width={140} height={300} className="mt-5 rounded-3xl" />
    </div>
  </div>
  <div className=" bg-red-300 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none  rounded-3xl  w-64">
    <div className="p-4">
      <h2 className="text-gray-900 font-bold text-3xl mb-2 cursor-pointer ">GitHub</h2>
      <Image src="/git.jpg" alt="Image" width={100} height={200} className="mt-5 rounded-3xl" />
    </div>
  </div>
  <div className=" bg-blue-300 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none rounded-3xl  w-64">
    <div className="p-4">
      <h2 className="text-gray-900 font-bold text-3xl mb-2 cursor-pointer">TypeScript</h2>
      <Image src="/ts.jpg" alt="Image" width={100} height={200} className="mt-5 rounded-3xl" />
    </div>
  </div>
       </section>
    

      </div>
      <div className="Metaverse Image md:float-right p-4  lg:p-5 md:mt-40  lg:mt-48 mt-10">
  <Image src="/metaverse.jpg" alt="Description of the image" width={500} height={500} className="rounded-3xl" />
</div>
<div className="About md:text-left py-5 md:py-0 md:mt-28" id="about">
  <h1 className="text-5xl  md:lg:text-5xl md:mb-5 mt-10 ml-10 md:ml-20  text-yellow-400 font-bold font-serif animate-bounce ">About</h1>
  <p className="text-sm md:text-base leading-relaxed  p-12 md:p-10 font-sans">
    Hello, I am Samavia Shahid, an undergraduate student pursuing a Bachelor of Science in Information Technology
    (BSIT). I am also a passionate learner and explorer in the field of the metaverse.
    As a BSIT student, I have developed a keen interest in the concept of the metaverse and its potential to revolutionize
    digital experiences. I have dedicated my time to studying and understanding the various aspects of the metaverse.
   
    Future Endeavors:
    As a dedicated student of BSIT and a metaverse enthusiast, I am committed to continuously expanding my knowledge and
    expertise in this field. I aspire to contribute to the development and advancement of the metaverse, harnessing its
    potential to shape the future of digital experiences.
  </p>
</div>
      <footer>
  
  <div className="md:ml-10 md:px-8 md:mb-10  px-8 py-8 md:mt-10 mt-5" id='signin'>
    <h2 className="text-4xl font-bold  text-yellow-400 animate-bounce font-serif">Sign In</h2>
    <form>
      <div className="mb-4 mt-10 font-sans">
        <label htmlFor="email" className="block font-medium text-gray-500">
          Email Address
        </label>
        <textarea
          id="email"
          className=" md:block md:border-gray-300 rounded-md  
           mt-2 block    text-sm px-8 py-3 text-pink-600"
          placeholder="Enter your email address"
        ></textarea>
      </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 block px-5 py-5 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                   sm:text-sm text-pink-800"
                  placeholder="Enter your password"
                />
              </div>
              <div id='signin btn'>
        <a href="#signin"><button
        type="submit"className="btn  py-3 px-10  mt-6 text-white  rounded-md  bg-blue-500  hover:bg-blue-600         "  >Sign In</button></a>
      </div>
            </form>
          </div>
          <div className="contacts flex flex-col md:flex-row  md:justify-center ml-14 mt-10">
      <div className="flex  mb-10 flex-row" id='contacts'>
            <a
              href="#" target="_blank" rel="noopener noreferrer" className="mr-4  space-x-4"
            >
              <Image src="/git.jpg" alt="GitHub" width={40} height={40} className="rounded-full  "/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="mr-4">
              <Image src="/twi.jpg" alt="Twitter" width={40} height={40} className="rounded-full " />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="mr-4 ">
              <Image src="/fa.jpg" alt="Facebook" width={40} height={40} className="rounded-full" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.jpg" alt="Instagram" width={40} height={40} className="rounded-full" />
            </a>
          </div>
         
        </div>
      </footer>
    </main>
  )
}

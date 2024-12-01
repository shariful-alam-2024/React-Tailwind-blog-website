import React from 'react';

const Contact = () => {
  return (
    <>
      {/* first section */}
      <div className="pt-36 text-center px-4 sm:px-8 md:px-16 lg:px-72 py-4 mx-auto max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-6xl">
        <strong className="text-xl sm:text-2xl font-semibold">
          Contact us
        </strong>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Let’s Start a Conversation
        </h1>
        <br />
        <p className="text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>

      {/* second section */}
      <div className="bg-[#592EA9] grid grid-cols-1 sm:grid-cols-2 gap-12 p-5 sm:p-10 md:mx-20 lg:mx-40 xl:mx-80 max-w-6xl">
        <div className="">
          <strong className="block text-center sm:text-left sm:mx-16">
            Working hours
          </strong>
          <hr />
          <br />
          <span className="text-white block">Monday To Friday</span>
          <span className="text-white block">9:00 AM to 8:00 PM</span>
          <p className="text-white">Our Support Team is available 24/7</p>
        </div>
        <div className="">
          <strong className="block text-center sm:text-left sm:mx-16">
            Contact Us
          </strong>
          <hr />
          <br />
          <span className="text-white block">020 7993 2905</span>
          <h1 className="text-white">hello@finsweet.com</h1>
        </div>
      </div>

      <br></br>
      <br></br>
      {/*  */}
      <div className="grid grid-cols-1 gap-4 px-4 sm:px-8 md:px-20 lg:px-32 xl:mx-auto xl:max-w-6xl">
        <input
          type="text"
          size={20}
          className="w-full p-3 border-2 border-[#6D6E76] rounded"
          placeholder="Enter your Name"
        />
        <input
          type="text"
          className="w-full p-3 border-2 border-[#6D6E76] rounded"
          placeholder="Enter your Email"
          required
        />
        <textarea
          className="w-full p-3 border-2 border-[#6D6E76] rounded "
          placeholder="Enter Your Message......"
          aria-required
        ></textarea>
        <select
          name="language"
          className="w-full p-3 border-2 border-[#6D6E76] rounded"
          defaultValue="lang"
        >
          <option value="lang" disabled>
            Select Language
          </option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="node.js">Node.js</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c++">C++</option>
          <option value="c#">C#</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="swift">Swift</option>
          <option value="go">Go</option>
          <option value="dart">Dart</option>
          <option value="objective-c">Objective-C</option>
          <option value="assembly">Assembly</option>
        </select>
        <input
          type="submit"
          value="Send Message"
          required
          className="w-full p-3 border-2 border-[#6D6E76] bg-[#FFD050] rounded hover:bg-[#ffc600] animate-pulse"
        />
      </div>

      <br></br>
    </>
  )
};

export default Contact;
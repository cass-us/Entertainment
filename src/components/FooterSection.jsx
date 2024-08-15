const FooterSection = () => {
    return (
      <footer className="bg-[#D9D9D9] p-4 w-1280  py-0">
        <div className="flex items-center justify-between py-8 px-8 text-black">
          {/* "Enter-Stream" on the left side */}
          <p className="text-lg ">Enter-Stream</p>
  
          {/* Navigation Links centered */}
          <ul className="flex items-center gap-4 py-2 mx-auto ">
            <li className="px-4 ">
              <a href="#">MOVIE</a>
            </li>
            <li className="px-4">
              <a href="#">SERIES</a>
            </li>
          </ul>
  
          {/* Subscribe Button on the right side */}
          <h2 className="text-black  py-2 px-6 ">
            SUBSCRIBE
          </h2>
        </div>
       
      </footer>
    );
  };
  
  export default FooterSection;
  
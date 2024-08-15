import { useLocation, useNavigate } from "react-router-dom";
import imageURL from '../assets/navCover.png';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/AddMovie');
  };

  const renderNavBarContent = () => {
    switch (location.pathname) {
      case "/":
        return (
          <div className="flex items-center gap-64 py-8 justify-between text-white px-8">
            <h3 className="text-3xl mb-4 px-8">
              <span className="text-[#7379FF]">Enter-</span>Stream
            </h3>
            <ul className="flex items-center gap-4">
              <li><a href="#">MOVIE</a></li>
              <li><a href="#">SERIES</a></li>
            </ul>
            <button className="bg-indigo-500 hover:bg-indigo-700 mr-16 text-white font-bold py-2 px-6 rounded">
              SUBSCRIBE
            </button>
          </div>
        );
      case "/AllMovies":
        return (
          <>
            <nav>
              <div className="flex items-center gap-64 py-8 justify-between text-white px-8">
                <h3 className="text-3xl mb-4 px-8">
                  <span className="text-[#7379FF]">Enter-</span>Stream
                </h3>
                <ul className="flex items-center gap-4">
                  <li><a href="#">MOVIES</a></li>
                  <li><a href="#">SERIES</a></li>
                </ul>
                <button className="bg-indigo-500 hover:bg-indigo-700 mr-16 text-white font-bold py-2 px-6 rounded">
                  SUBSCRIBE
                </button>
              </div>
              <div className="items-center px-96 py-16 w-full">
                <h1 className="text-white text-3xl text-center">LATEST MOVIES</h1>
              </div>
            </nav>
            <br/>
            <br/>
            <br/>
            <div className="py-8 text-end">
              <button 
                onClick={handleAddClick} 
                className="bg-indigo-500 h-6 items-center m-4 hover:bg-indigo-700 ml-96 text-white w-16 rounded-3xl"
              >
                ADD
              </button>
            </div>
          </>
        );
      case "/AllSeries":
        return (
          <>
            <nav>
              <div className="flex items-center gap-64 py-8 justify-between text-white px-8">
                <h3 className="text-3xl mb-4 px-8">
                  <span className="text-[#7379FF]">Enter-</span>Series
                </h3>
                <ul className="flex items-center gap-4">
                  <li><a href="#">MOVIES</a></li>
                  <li><a href="#">SERIES</a></li>
                </ul>
                <button className="bg-indigo-500 hover:bg-indigo-700 mr-16 text-white font-bold py-2 px-6 rounded">
                  SUBSCRIBE
                </button>
              </div>
              <div className="items-center px-96 py-16 w-full ">
                <h1 className="text-white text-3xl text-center ">LATEST SERIES</h1>
              </div>
            </nav>
            <div className="py-20 text-end">
              <button 
                onClick={handleAddClick} 
                className="bg-indigo-500 h-6 items-center m-4 hover:bg-indigo-700 ml-96 text-white w-16 rounded-3xl"
              >
                ADD
              </button>
            </div>
          </>
        );
        case "/AddMovie":
          return (
            <>
              <nav>
                <div className="flex items-center gap-64 py-8 justify-between text-white px-8">
                  <h3 className="text-3xl mb-4 px-8">
                    <span className="text-[#7379FF]">Enter-</span>Series
                  </h3>
                  <ul className="flex items-center gap-4">
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">SERIES</a></li>
                  </ul>
                  <button className="bg-indigo-500 hover:bg-indigo-700 mr-16 text-white font-bold py-2 px-6 rounded">
                    SUBSCRIBE
                  </button>
                </div>
                <div className="items-center px-96 py-16 w-full ">
                  <h1 className="text-white text-3xl text-center ">Add Movie/Series</h1>
                </div>
              </nav>
             
            </>
          );
      
    }
  };

  return (
    <nav
      className="relative bg-blue-900"
      style={{
        backgroundImage: `url(${imageURL})`, // Fixed this line
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '365px',
      }}
    >
      {renderNavBarContent()}
    </nav>
  );
};

export default NavBar;

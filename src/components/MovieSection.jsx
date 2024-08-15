import { useNavigate } from "react-router-dom";
import movieStore from "./movies_store.json";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};


function MovieSection() {
  const navigate = useNavigate();

 
  const images = movieStore?.movies?.latest?.titles?.map((movie) => movie.src) || [];
  const rows = chunkArray(images, 4);

  

  const handleMoreClick = () => {
    navigate("/AllMovies");
  };

  return (
    <div className="flex flex-col items-center">
      <p className="py-8 text-center">LATEST MOVIES</p>
     
      <table className="border-collapse">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((image, cellIndex) => (
                <td key={cellIndex} className="p-2">
                  <img
                    src={image}
                    alt={`Movie ${rowIndex * 4 + cellIndex + 1}`}
                    className="w-40 h-60 object-cover cursor-pointer"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-end px-32 ml-28">
        <button
          id="more_movie"
          onClick={handleMoreClick}
          className="bg-indigo-500 h-6 items-center m-4 hover:bg-indigo-700 ml-96 text-white w-16 rounded-3xl"
        >
          More
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default MovieSection;

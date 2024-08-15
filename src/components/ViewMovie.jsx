import { useParams, useNavigate } from "react-router-dom";
import movieStore from "./movies_store.json";


const getMovieById = (id) => {
  return movieStore?.movies?.all?.titles?.find((movie) => movie.id === id) || null;
};


const deleteMovieById = (id) => {
  const movieIndex = movieStore.movies.all.titles.findIndex((movie) => movie.id === id);
  if (movieIndex !== -1) {
    movieStore.movies.all.titles.splice(movieIndex, 1);
    return true;
  }
  return false;
};

function ViewMovie() {
  const navigate = useNavigate();
  const { id } = useParams(); // Directly get 'id' from useParams
  const movie = getMovieById(id);

  const handleImageClick = (movieId) => {
    navigate(`/EditMovie/${movieId}`);
  };

  const handleDeleteClick = () => {
    const isDeleted = deleteMovieById(id);
    if (isDeleted) {
      navigate("/AllMovies"); 
    } else {
      alert("Failed to delete the movie.");
    }
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="font-bold text-3xl text-center mb-4">{movie.title}</h1>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-1/2">
            <img src={movie.src} className="min-w-0.5 h-auto" alt={movie.title} />
          </div>
          <div className="flex-1 w-1/2 ml-4">
            <p className="text-gray-700 mb-4">{movie.description}</p>
            <table>
              <tbody>
                <tr><td>Country: {movie.country}</td></tr>
                <tr><td>Genre: {movie.genre}</td></tr>
                <tr><td>Year: {movie.year}</td></tr>
                <tr><td>Type: {movie.type}</td></tr>
              </tbody>
            </table>
            <div className="flex items-center m-4 gap-4">
              <div className="bg-indigo-500 h-10 flex items-center justify-center text-center hover:bg-indigo-700 text-white w-24 rounded-3xl">
                <button onClick={() => handleImageClick(movie.id)}>Edit</button>
              </div>
              <div className="bg-indigo-500 h-10 flex items-center justify-center text-center hover:bg-indigo-700 text-white w-24 rounded-3xl">
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMovie;

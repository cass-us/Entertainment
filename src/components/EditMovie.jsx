import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import movieStore from "./movies_store.json";

// Utility function to simulate updating the movieStore
const updateMovieStore = (id, updatedMovie) => {
  const movieIndex = movieStore.movies.all.titles.findIndex((movie) => movie.id === id);
  if (movieIndex !== -1) {
    movieStore.movies.all.titles[movieIndex] = updatedMovie;
  }
};

const getMovieById = (id) => {
  return movieStore?.movies?.all?.titles?.find((movie) => movie.id === id) || null;
};

const EditMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    country: '',
    genre: '',
    year: '',
    type: '',
  });

  useEffect(() => {
    const movieData = getMovieById(movieId);
    if (movieData) {
      setMovie(movieData);
      setFormData({
        title: movieData.title,
        description: movieData.description,
        country: movieData.country,
        genre: movieData.genre,
        year: movieData.year,
        type: movieData.type,
      });
    }
  }, [movieId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = { ...movie, ...formData };
    updateMovieStore(movieId, updatedMovie); // Simulate updating the movieStore
    console.log("Updated Movie Data:", formData);
    navigate(`/ViewMovie/${movieId}`);
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">Edit Movie: {movie.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Year</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
            onClick={() => navigate(`/ViewMovie/${movieId}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;

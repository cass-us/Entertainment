import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import movieStore from "./movies_store.json";


const updateSeries = (getId, updatedSeries) => {
  const seriesIndex = movieStore.series.all.titles.findIndex((series) => series.id === getId);
  
  if (seriesIndex !== -1) {
    movieStore.series.all.titles[seriesIndex] = updatedSeries;
  }
};

const getSeriesId = (getId) => {
  return movieStore?.series?.all?.titles?.find((series) => series.id === getId) || "nothing found";
};

const EditSeries = () => {
  const { id } = useParams();
  console.log(`Value of get id is: ${id}`);

  const navigate = useNavigate();
  const [series, setSeries] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    country: '',
    genre: '',
    year: '',
    type: '',
  });

  useEffect(() => {

    const seriesData = getSeriesId(id);
    if (seriesData) {
      setSeries(seriesData);
      setFormData({
        title: seriesData.title,
        description: seriesData.description,
        country: seriesData.country,
        genre: seriesData.genre,
        year: seriesData.year,
        type: seriesData.type,
      });
    }
  }, [id]);

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSeries = { ...series, ...formData };
    updateSeries(id, updatedSeries); 
    console.log("Updated Series Data:", formData);
    navigate(`/ViewSeries/${id}`);
  };
  
  if (!series) {
    return <div>Series not found is 
      <p>{getSeriesId({id})}</p></div>;


  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">Edit Series: {series.title}</h1>
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
            onClick={() => navigate(`/ViewSeries/${id}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSeries;

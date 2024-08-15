import { useNavigate } from "react-router-dom";
import { useState } from "react";
import saveToJson from './saveToJson';

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    country: "",
    genre: "",
    year: "",
    type: "",
    src: "",
    category: "movie",  // Default to movie
  });
  const [ setPreviewSrc] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          src: reader.result,
        });
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Movie/Series Data:", formData);
    saveToJson(formData);  
    navigate(formData.category === "movie" ? "/ViewMovie" : "/ViewSeries");
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-4 flex">
    
      <div className="flex-1 flex justify-center items-center" required>
        <div
          className="bg-gray-200 p-4 rounded-lg relative flex justify-center items-center"
          style={{ width: "350px", height: "350px" }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <span className="text-center text-gray-700">Upload Movie Poster</span>
        </div>
      </div>

      {/* Form Fields Section */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <h1 className="font-bold text-2xl mb-4">Add New Movie/Series</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Movie/series Name</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
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
              required
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
              required
            />
          </div>
      
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="movie"
                  name="category"
                  value="movie"
                  checked={formData.category === "movie"}
                  onChange={handleCategoryChange}
                  required
                />
                <label htmlFor="movie" className="ml-2">Movie</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="series"
                  name="category"
                  value="series"
                  checked={formData.category === "series"}
                  onChange={handleCategoryChange}
                  required
                />
                <label htmlFor="series" className="ml-2">Series</label>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-16 justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white w-96 py-2 px-4 rounded hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
   
};

export default AddMovie;

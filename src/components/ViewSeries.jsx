import { useParams, useNavigate } from "react-router-dom";
import movieStore from "./movies_store.json";// Adjust this if your file is named differently

const getSeriesById = (id) => {
  return  movieStore?.series?.all?.titles?.find((series) => series.id === id) || null;
};

const deleteSeriesById = (id) => {
  const seriesIndex = movieStore.series.all.titles.findIndex((series) => series.id === id);
  if (seriesIndex !== -1) {
    movieStore.series.all.titles.splice(seriesIndex, 1);
    return true;
  }
  return false;
};

function ViewSeries() {
  const navigate = useNavigate();
  const { getId } = useParams(); // Directly get 'id' from useParams
  const series = getSeriesById(getId);

  const handleImageClick = (id) => {
    navigate(`/EditSeries/${id}`);
  };

  const handleDeleteClick = () => {
    const isDeleted = deleteSeriesById(getId);
    if (isDeleted) {
      navigate("/AllSeries"); 
    } else {
      alert("Failed to delete the series.");
    }
  };

  if (!series) {
    return <div>Series not found</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-4">
        <h1 className="font-bold text-3xl text-center mb-4">{series.title}</h1>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-1/2">
            <img src={series.src} className="min-w-0.5 h-auto" alt={series.title} />
          </div>
          <div className="flex-1 w-1/2 ml-4">
            <p className="text-gray-700 mb-4">{series.description}</p>
            <table>
              <tbody>
                <tr><td>Country: {series.country}</td></tr>
                <tr><td>Genre: {series.genre}</td></tr>
                <tr><td>Year: {series.year}</td></tr>
                <tr><td>Type: {series.type}</td></tr>
              </tbody>
            </table>
            <div className="flex items-center m-4 gap-4">
              <div className="bg-indigo-500 h-10 flex items-center justify-center text-center hover:bg-indigo-700 text-white w-24 rounded-3xl">
                <button onClick={() => handleImageClick(series.id)}>Edit</button>
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

export default ViewSeries;

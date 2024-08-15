import { useParams} from "react-router-dom";
import movieStore from "./movies_store.json";


const getSeriesById = (id) => {
  return  movieStore?.series?.all?.titles?.find((series) => series.id === id) || null;
};

function EditSeries() {
  // const navigate = useNavigate();
  const { id } = useParams();
  const series = getSeriesById(id);
  
  

  return (
    <div className="p-4">
        {series}
    </div>
  );
}

export default EditSeries;

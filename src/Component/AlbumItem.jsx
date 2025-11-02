import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AlbumItem = ({ name, image, desc, id }) => {
  const navigate = useNavigate();

  // ✅ Props validation --
  // (to remove the error - 'name' is missing in props validationeslintreact/prop-types)

  AlbumItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  return (
    <>
      <div
        onClick={() => navigate(`/album/${id}`)}
        className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      >
        <img className="rounded" src={image} alt="name" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </>
  );
};

export default AlbumItem;

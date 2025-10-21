import { Link } from 'react-router';

const NewsDetailsCard = ({ newsDetails }) => {
  const { thumbnail_url, title, details, category_id } = newsDetails;
  return (
    <div className="space-y-4 border border-gray-400 rounded p-6 mt-8">
      <img className="w-full rounded" src={thumbnail_url} alt="" />
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-accent">{details}</p>
      <Link className="btn btn-secondary" to={`/category/${category_id}`}>
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;

import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <div className="container-xl mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.active ? item.label : <Link to={item.path}>{item.label}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
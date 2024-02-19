import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <HiArrowLeft size="14" />
      {children}
    </Link>
  );
};
export default BackLink;

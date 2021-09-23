import PropTypes from 'prop-types';
import { StarRounded } from '@mui/icons-material';

const propTypes = {
    total: PropTypes.number,
    rating: PropTypes.number
};

const Stars = ({ total, rating }) => (
    <div>
        {[...Array(total)].map((e, i) => (
            <StarRounded key={i} fontSize='small' color={rating >= i + 1 ? 'warning' : 'grey'} />
        ))}
    </div>
);

Stars.propTypes = propTypes;

export default Stars;

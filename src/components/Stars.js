import { StarRounded } from '@mui/icons-material';

const Stars = ({ total, rating }) => (
    <div>
        {[...Array(total)].map((e, i) => (
            <StarRounded key={i} fontSize='small' color={rating >= i + 1 ? 'warning' : 'grey'} />
        ))}
    </div>
);

export default Stars;


import PropTypes from 'prop-types';

import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'> <AiFillCheckCircle className='mr-2 bg-green-400'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Features.PropTypes = {
    option: PropTypes.object
}

export default Features;
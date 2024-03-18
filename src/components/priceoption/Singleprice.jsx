
import PropTypes from 'prop-types';
import Features from './Features';

const Singleprice = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-300 rounded-md p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>

            <h4 className='text-4xl my-8 text-center'>
                {name}
            </h4>
            {
                features.map((feature,idx) => <Features key={idx} feature={feature}></Features> )
            }
            <button className='btn btn-success mt-5 w-full py-4 font-bold rounded-lg hover:bg-green-700'>Buy Now</button>
        </div>
    );
};

Singleprice.PropTypes = {
    option: PropTypes.object
}

export default Singleprice;
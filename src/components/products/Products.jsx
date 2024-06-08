import product1 from '/images/ProductsImage/Cloths/PrintedPajamas-1.webp'
import StarRatings from 'react-star-ratings';
import Container from '../Container';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <Container>
      <div className="flex justify-center z-0 items-start h-full my-20 w-full">
        <div className='grid sm:grid-cols-2 mt-10 md:mt-20 grid-cols-1 xmd:grid-cols-2  xl:grid-cols-4 gap-5 md:gap-10'>
          {Array(30)?.fill(null)?.map((item, index) => {
            return (
              <>
                <div className="h-full w-[250px] md:w-[300px] bg-white mb-3 p-2 md:p-5 rounded-xl" >
                  <Link to={`/productdetails/code`} className="">
                    <div className="w-full h-60">
                      <img src={product1} alt={'Printed Pajamas'} className='hover:scale-[1.1] transition-all duration-300 w-full h-60 object-cover object-center rounded-3xl' loading='lazy' />
                    </div>
                    <h2 className='text-black font-extrabold' >Title: Printed Pajamas</h2>
                    <h4 className='text-gray-700'>Price: $33.66</h4>
                    <h4 className='text-gray-600' >WhitePrice: $43.54</h4>
                    <StarRatings
                      rating={2}
                      starDimension="20px"
                      starSpacing="5px"
                      starRatedColor='#FFA41C'
                      starEmptyColor='black'
                      starHoverColor='gray'
                      numberOfStars={5}
                    />
                  </Link>
                  <div className="mt-2">
                    <button className='border border-black py-1 px-3 hover:bg-black hover:text-white '>Add to Cart</button>
                  </div>
                </div>
              </>
            )
          })
          }
        </div>
      </div>
    </Container >
  )
}

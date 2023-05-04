import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProductComponents = () => {
  const products = useSelector((state) => state.allproducts.products);
  const renderlist = products.map((product) =>{
    const {id, title,price, image, category} = product
    return (<div className='four wide column ' key={id}>
    <NavLink to={`/product/${id}`}>
    <div className='ui link cards'>
    <div className='card'>
    <div className='image'>
    <img src={image} alt={title}/>
    </div>
    <div className='content'>
    <div className='header'>{title}</div>
    <div className='meta price'>${price}</div>
    <div className='meta'>{category}</div>
    </div>
    </div>
    </div>
    </NavLink>
    </div>

    )
  })
  return <>
  {renderlist}
  </>
    
  
};

export default ProductComponents;
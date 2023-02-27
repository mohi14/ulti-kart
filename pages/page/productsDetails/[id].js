import React from 'react';
import DiscountedProducts from '../../../components/common/Collections/DiscountedProducts';

export default function Products () {
    return (
        <div>
            <DiscountedProducts/>
        </div>
    );
};



export async function getServerSideProps({ params }) {
    const { slug } = params;
    const res = await fetch(`http://localhost:5055/api/products/discount/${slug}`);
    const discount = await res.json();
  
    console.log(categoryNews, "result");
  
    return {
      props: {
        categoryNews,
      },
    };
  }


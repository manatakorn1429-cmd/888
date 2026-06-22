import React, { useEffect } from 'react'
import { Card, Flex } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

export default function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((res) => {
      const resData =res;
      setData(resData.products);
    });
  }, []);

  return (
    <Flex wrap gap="small">
      {data.map((i) =>{

      return (
    
        <div>
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img draggable={false} alt="example" src={i.images[0]}
      />
    }
  >
      <Meta title= {i.title} description={i.description}/>
  </Card>

          
    
      </div>
    );
})}
    </Flex>
  )
}

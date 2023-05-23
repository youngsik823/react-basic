import React from 'react'
import FoodItem from './FoodItem'

const FoodList = () => {

    // fetch를 통해 음식 목록 json을 불러옴
  const foods = {
    id: 327432,
    foodList: [
        {
            fName: '짜장면',
            price: 6000,
            id: 'chinese'
        },  
        {
            fName: '해물파전',
            price: 12000,
            id: 'korean'
        }, 
        {
            fName: '가츠동',
            price: 8000,
            id: 'japanese'
        },  
        {
            fName: '김치찌개',
            price: 5000,
            id: 'korean'
        },  
        {
            fName: '오향장육',
            price: 50000,
            id: 'chinese'
        }
    ]
  };

  return (
    <ul>
        {
            foods.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id} />)
        }
    </ul>
  )
}

export default FoodList
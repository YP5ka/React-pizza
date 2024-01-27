import React from "react";

function Categories({value, onClickCategory}) {
  console.log(value)

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, ind) => (
              <li key = {ind} onClick = {() => onClickCategory(ind)} className={value === ind ? 'active' : ''}>{categoryName}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default Categories;
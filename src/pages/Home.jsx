import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import '../scss/app.scss';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { useNavigate } from 'react-router-dom';

const Home =() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {categoryId, sort, currentPage} = useSelector((state) => state.filterSlice);
  const {searchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const sortList = [ {name: 'популярности (DESC)', sortProperty: 'rating'},
                  {name: 'популярности(ASC)', sortProperty: '-rating'},
                  {name:'цене(DESC)', sortProperty: 'price'},
                  {name:'цене(ASC)', sortProperty: '-price'},
                  {name: 'алфавиту(DESC)', sortProperty: 'title'},
                  {name: 'алфавиту(ASC)', sortProperty: '-title'}]
  
  const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
  }


  const onChangePage = number => {
      dispatch(setCurrentPage(number))
  }

  React.useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))
      
      const sort = sortList.find(obj => obj.sortProperty == params.sortProperty)
      
      dispatch(
        setFilters({
          ...params,
          sort
        })
      );
    }
  }, [])


  React.useEffect(() => {
    setIsLoading(true);
    const order = sort.sortProperty.includes('-')?'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-','');
    const category = categoryId > 0 ? `category = ${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : ''
  
  axios.get(`https://6536ce84bb226bb85dd2a569.mockapi.io/Items?page=${currentPage}${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then((res) => {
      setItems(res.data);
      setIsLoading(false);
    })
        window.scrollTo(0,0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage,
    })

    navigate(`?${queryString}`);
  },[categoryId, sort.sortProperty, searchValue, currentPage])
  
  const arrPiz = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
    <div className="content__top">
      <Categories value = {categoryId} onClickCategory={onClickCategory}/>
      <Sort />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading
        ? skeletons
        : arrPiz}
    </div>
    <Pagination currentPage = {currentPage} onChangePage = {onChangePage}/>
  </div>
  );
}

export default Home;
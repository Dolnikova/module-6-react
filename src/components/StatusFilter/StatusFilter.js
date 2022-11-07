import { Button } from 'components/Button/Button';

// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

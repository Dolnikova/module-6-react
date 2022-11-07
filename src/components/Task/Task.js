import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
// Импортируем хук
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
// Импортируем генератор экшена

export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

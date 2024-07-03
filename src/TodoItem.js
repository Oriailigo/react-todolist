import './TodoItem.css';
function TodoItem(props){
  return(

    <li className='TodoItem'>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} tabindex="0">V</span>  
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete' }`} tabindex="0">{props.text}</p>
      <span className='Icon Icon-delete' tabindex="0">X</span>
    </li>
  );

}

  export {TodoItem};
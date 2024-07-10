import './TodoSearch.css';
function TodoSearch(props){
  return(
<input onChange={(event)=>{console.log("hizo click"); console.log(event.target.value);}} className='TodoSearch' tabIndex="0" type='text' placeholder='Buscar TODOs'></input>
  );

}
  export {TodoSearch};
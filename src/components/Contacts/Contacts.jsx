import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteTodo }) => (
   
        <ul className={css}>
        {contacts.map(({id,name, number})=>(
        <li key={id}>
         <p>{name}: {number}</p>
         
         <button onClick={()=> onDeleteTodo(id)}>Delete</button>
        </li>
         ) )
        }
 
         
     </ul>
    )

    
    Contacts.propTypes ={
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
              }),
        )
            }


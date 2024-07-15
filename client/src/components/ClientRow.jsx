import {FaTrash} from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMuations'
import { GET_CLIENTS } from '../queries/clientQueries';

export default function ClientRow({client}) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
      variables: {id: client.id},     //Get the client from line 5 ^
      /* We will update the cache rather than calling in queries again kinda balancing the load */
      
     //Way 1
     //refetchQueries: [{query: GET_CLIENTS}],
     // Way 2 
     update(cache, {data: {deleteClient}}){
      const { clients } = cache.readQuery({ query: GET_CLIENTS});
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter(client => client.id !== deleteClient.id)},
      });
     }
  });
  return (
    <tr> 
        <td> {client.name}</td>
        <td> {client.email}</td>
        <td> {client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                <FaTrash/>
            </button>

        </td>
    </tr>
  )
}

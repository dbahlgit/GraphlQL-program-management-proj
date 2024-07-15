import { useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner.jsx';
export default function Clients() {
  // Here we get the query data. As we are not using any REST API, We can handle this with Apollo client
  const {loading, error, data} = useQuery(GET_CLIENTS)
  if (loading) return <Spinner />;
  if (error ) return <p> Something went wrong...</p>
  
  return <> {!loading && !error && (
<table className='table table-hover mt-3'> 
<thead>
  <tr>
    <th> Name </th>
    <th> Email </th>
    <th> Phone</th>
    <th> </th>
  </tr>
</thead>
    <tbody>
      {data.clients.map(client =>(
        <ClientRow key = {client.id} client = {client} />
      ))}
    </tbody>

</table>
  ) }</>;
  
}

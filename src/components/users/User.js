import {React,useEffect} from 'react'
import UserViewList from './UserViewList.js'
import useUsersService,{ SERVICE_TYPES }  from '../../services/usersService/useUsersService.js'
import { Table,striped,bordered ,hover,size,Accordion} from "react-bootstrap";
import Search from '../../common/search/Search';
function compare( a, b ) {
    
  if ( a.prnNo < b.prnNo ){
    return -1;
  }
  if ( a.prnNo > b.prnNo ){
    return 1;
  }
  return 0;
}

export default function User() {
    const {
        data:userData,
        dispatchers
      } = useUsersService({
        errorMessage: null,
        userData: null,
        isLoading: null
      });
      useEffect(() => {
        if(!userData){
          dispatchers[SERVICE_TYPES.GET_USERS]();
        }
      
      }, [dispatchers]);
   
    return (
        <>
        <Search searchData={userData} onChangeSearch={dispatchers[SERVICE_TYPES.SEARCH_USERS]}/>
        <div className="twbsui ">
    
        <Table striped bordered hover size="sm">
        <thead>
        <tr>
           <th>Image</th>
           <th>PRN</th>
           <th>Name</th>
           <th>Date Of Birth</th>
           <th>Email</th>
           <td>Mobile</td>
           <th>Home Town</th>
         </tr>
       </thead>
       <tbody>
            {userData&&userData.sort( compare ).map(k=><UserViewList user={k}/>)}
        </tbody>
        </Table>
        </div>
        </>
    )
}

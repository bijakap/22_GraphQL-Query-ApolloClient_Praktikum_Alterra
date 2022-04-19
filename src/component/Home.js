import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { GetList, GetListByID } from "../queries";
import { useQuery, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const Home = () => {
    const [ID, setID] = useState(0);
    const [Window, setWindow] = useState(true);
    const { data, loading, error } = useQuery(GetList)
    const [getListByID, { data:dataByID ,loading:loadingLazy, error:errorLazy, refretch}] = useLazyQuery(GetListByID)

    const HandleSubmit = () => {
        console.log(ID)
        getListByID({   
          variables : {
            id : ID
          }
        })
        setWindow(false)
      }
    

    return(
        <div>
            <Header/>
            {
                loading ? 
                <p>Please Wait</p> 
                : Window ?
                    <div>
                        <ListPassenger 
                            data={data?.daftar_pengunjung}
                            // hapusPengunjung={this.hapusPengunjung}
                        />
                        <div>
                            <input type='number' value={ID} placeholder='search-by-id' onChange={(e) => setID(e.target.value)}/>
                            <button onClick={() => HandleSubmit()}>Submit</button>
                        </div>
                    </div>
                : loadingLazy ?
                    <p>Please Wait</p> 
                    :
                    <div>
                    <ListPassenger 
                            data={dataByID?.daftar_pengunjung}
                            // hapusPengunjung={this.hapusPengunjung}
                        />
                        <button onClick={() => setWindow(true)}>Back</button>
                    </div>
                    
            }
            
            {/* <PassengerInput
                tambahPengunjung={this.tambahPengunjung}
            /> */}
        </div>
    )
}


export default Home;
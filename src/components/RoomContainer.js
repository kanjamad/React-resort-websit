import React from 'react';
import RoomsFillter from './RoomFilter';
import RoomsList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomsContainer ({context}){
    const {loading, sortedRooms, rooms} = context;
    if (loading){
    return <Loading />;
} 
    return(
            <>
            <RoomsFillter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}


export default withRoomConsumer(RoomsContainer)



// --------------------method 2 ----------------------
// import React from 'react';
// import RoomsFillter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             { value => {
//                 console.log(value);
//                 const {loading, sortedRooms, rooms} = value;
//             if (loading){
//                 return <Loading />
//             }
                
//                 return(
//                     <div>
//                     Hello from room RoomsContainer
//                     <RoomsFillter rooms={rooms} />
//                     <RoomsList rooms={sortedRooms} />
//                 </div>
//                 );
//             }}
//         </RoomConsumer>
//     );
// }

// export default RoomsContainer;

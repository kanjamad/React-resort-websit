import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello'}
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    // getData

        componentDidMount() {
            let rooms = this.formatData(items);
            // console.log(rooms);
            let featuredRooms = rooms.filter(room => room.featured === true);
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false
            });

        }

        formatData(itemsResort){
            let tempItemps = itemsResort.map(item => {
                let id = item.sys.id
                let images = item.fields.images.map(image => image.fields.file.url);
                let room ={ ...item.fields,images,id }; 
                return room;
            });
            return tempItemps;
        }


    render() {
        return (
            <RoomContext.Provider value={{...this.state}}> 
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomProvider, RoomConsumer, RoomContext};
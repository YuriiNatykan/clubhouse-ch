import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import Axios from '../../core/axios';

import { Room } from '../../components/Room';

export default function RoomPage({ room }) {
  return (
    <>
      <Header avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb0scT2J6qrIzEaSqw8l4OPB7Bi1wWR_pXQ&usqp=CAU" />
      <div className="container mt-40">
        <h2>All rooms</h2>
        <BackButton title="Back" href="/rooms" />
        <Room title={room.title} />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data } = await Axios.get('/rooms.json');
    const roomId = context.query.id;
    const room = data.find((obj) => obj.id === roomId);
    return {
      props: {
        room: room,
      },
    };
  } catch (error) {
    console.log('Error');
    return {
      props: {
        rooms: {},
      },
    };
  }
};

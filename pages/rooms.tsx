import React from 'react';
import { Button } from '../components/Button';
import { ConversationCard } from '../components/ConversationCard';
import { Header } from '../components/Header';
import Link from 'next/link';
import Axios from '../core/axios';

export default function RoomsPage({ rooms = [] }) {
  // const [rooms, setRooms] = React.useState([]);

  // React.useEffect(() => {
  //   (async () => {
  //     const { data } = await Axios.get('/rooms.json');
  //     setRooms(data);
  //   })();
  // }, []);

  return (
    <>
      <Header
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb0scT2J6qrIzEaSqw8l4OPB7Bi1wWR_pXQ&usqp=CAU"
        fullname="Natykan Yurii"
      />
      <div className="container mt-40">
        <div className="d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green">+ Start room</Button>
        </div>
        <div className="grid mt-30">
          {rooms.map((obj) => (
            <Link key={obj.id} href={`/rooms/${obj.id}`}>
              <a className="d-flex">
                <ConversationCard
                  title={obj.title}
                  guests={obj.guests}
                  avatars={obj.avatars}
                  guestsCount={obj.guestsCount}
                  speakersCount={obj.speakersCount}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

//запрашивать все данные сразу в next js на сервере (useEffect запрашивает данные в бразуре, после отображение HTML)
export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json');
    return {
      props: {
        rooms: data,
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

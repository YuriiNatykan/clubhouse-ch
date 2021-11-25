import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Profile } from '../../components/Profile';
import { Room } from '../../components/Room';

export default function RoomPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb0scT2J6qrIzEaSqw8l4OPB7Bi1wWR_pXQ&usqp=CAU" />
      <div className="container mt-40">
        <h2>All rooms</h2>
        <BackButton title="Back" href="/rooms" />
        <Room title="Название комнаты" />
      </div>
    </>
  );
}

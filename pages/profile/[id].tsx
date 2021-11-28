import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Header } from '../../components/Header';

import { Profile } from '../../components/Profile';

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb0scT2J6qrIzEaSqw8l4OPB7Bi1wWR_pXQ&usqp=CAU"
        fullname="Natykan Yurii"
      />
      <div className="container mt-30">
        <Profile
          avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb0scT2J6qrIzEaSqw8l4OPB7Bi1wWR_pXQ&usqp=CAU"
          fullname="Natykan Yurii"
          username="@yurii"
          about="Test info about"
        />
      </div>
    </>
  );
}

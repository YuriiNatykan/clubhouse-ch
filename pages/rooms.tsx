import React from 'react';
import { Button } from '../components/Button';
import { ConversationCard } from '../components/ConversationCard';
import { Header } from '../components/Header';
import Link from 'next/link';

function rooms() {
  return (
    <>
      <Header avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWb0scT2J6qrIzEaSqw8l4OPB7Bi1wWR_pXQ&usqp=CAU" />
      <div className="container mt-40">
        <div className="d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green">+ Start room</Button>
        </div>
        <div className="mt-20">
          <Link href="/rooms/test-room">
            <a>
              <ConversationCard
                title="Создаю клон"
                guests={['Anatoliy, Tamara']}
                avatars={[
                  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
                ]}
                guestsCount={4}
                speakersCount={1}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default rooms;

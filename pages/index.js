import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <h1>Тестовое задание фронтенд разработчик</h1>
      <Map />
    </div>
  );
};

export default Home;
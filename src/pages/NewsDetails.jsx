import React from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const newsDetails = data.find((news) => news.id === id);
  //   console.log(newsDetails);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-12 mt-12">
        <section className="col-span-8">
          <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
        </section>
        <aside className="col-span-4">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

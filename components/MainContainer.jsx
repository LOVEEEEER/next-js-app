import Head from "next/head";
import Anchor from "./Anchor";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta
          keywords={"Nikita Demyanenko - FullStack Developer" + keywords}
        ></meta>
      </Head>
      <div className="navbar">
        <Anchor href="/" text="Главная" />
        <Anchor href="/users" text="Пользователи" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;

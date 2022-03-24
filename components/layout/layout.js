import { Fragment } from 'react';
import { useContext } from "react";
import AppContext from '../../context/state';

//import { useRouter } from 'next/router';


import Header from './header/header';
import Footer from './footer/footer';

function Layout(props) {
  // const router = useRouter();
  const value = useContext(AppContext);
  // if (router.pathname.indexOf("/mapa") !== -1) {
  //   value.page.name = router.pathname
  // }
console.log(value)

  return (
    <Fragment>
      <Header />
      <main>
          {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
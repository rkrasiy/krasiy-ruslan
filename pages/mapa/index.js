import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';
import Banner from '../../components/layout/banner/banner'

export default function MapaPage(){
  
  return (
    <Fragment>
      <Head>
        <title>Mapa</title>
      </Head>
      <Banner title='Mapa' subtitle='#leaflet' image={'./bg/mapa.jpg'}/>
      <div id='content'>
      <div>Mapa PAge 1</div>
      </div>
    </Fragment>)
}
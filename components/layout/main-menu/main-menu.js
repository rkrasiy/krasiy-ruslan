import Link from 'next/link';

export default function MainMenu (){
  return (
     <nav>
        <ul className='flex flex-row list-none m-0 p-0'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/mapa'>Mapa</Link>
          </li>
        </ul>
      </nav>
  )
}
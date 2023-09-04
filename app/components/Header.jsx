import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>gitBin</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/books'>My favorite Books</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
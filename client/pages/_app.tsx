import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen grid place-items-center text-white font-serif bg-gray-900'>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
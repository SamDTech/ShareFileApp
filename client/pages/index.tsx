import Head from 'next/head';
import Delete from '@components/Delete';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Head>
        <title>Create Next App</title>

      </Head>
      <h1 className='font-medium my-4 text-3xl'>Got a File? Share It Like Fake News  </h1>
      <div className='w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded justify-center'>
        {/* Drop zone * /}
        {/* Render the file */}
        {/* upload button */}
      </div>
    </div>
  );
}

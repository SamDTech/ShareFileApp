import { useState } from 'react';
import DropZone from '@components/DropZone';

export default function Home() {
  const [file, setFile] = useState(null);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='my-4 text-3xl font-medium'>
        Got a File? Share It Like Fake News
      </h1>
      <div className='flex flex-col items-center justify-center bg-gray-800 shadow-xl w-96 rounded-xl'>
        <DropZone setFile={setFile} />

        {/* Render the file */}
        {file && file.name }
        {/* upload button */}
      </div>
    </div>
  );
}

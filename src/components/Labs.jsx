import React from 'react';

function Labs() {
  return (
    <div>
      <div className='text-xl'>Labs</div>
      <br />
      <div className='ml-4 flex gap-10 items-center'>
        Lab List: <br />
        <button className='bg-blue-800 px-2 py-2 rounded-xl'>Add Lab</button>
      </div>

      <div className="m-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Lab Name</th>
              <th scope="col" className="px-6 py-3">Equipment</th>
              <th scope="col" className="px-6 py-3">Max Capacity</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Physics Lab</th>
              <td className="px-6 py-4">Projectors, Microscope</td>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            {/* More rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Labs;

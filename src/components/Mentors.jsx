import React from 'react'

function Mentors() {
  return (
    <div>
        <div className='text-xl'>Mentors </div>
        <br />
        <div className='ml-4 flex gap-10 items-center '>
          Mentor List : <br />
          <button className='bg-blue-800 px-2 py-2 rounded-xl item-ends'>Add Mentor</button>
        </div>
            

<div className="m-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Mentor name
                </th>
                <th scope="col" className="px-6 py-3">
                    Subject
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Michael
                </th>
                <td className="px-6 py-4">
                    Geography
                </td>
                <td className="px-6 py-4">
                    1234567890
                </td>
                <td className="px-6 py-4">
                    Teacher
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magdam
                </th>
                <td className="px-6 py-4">
                    Science II
                </td>
                <td className="px-6 py-4">
                    1234567890
                </td>
                <td className="px-6 py-4">
                    Teacher
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Nyanum
                </th>
                <td className="px-6 py-4">
                    English
                </td>
                <td className="px-6 py-4">
                    1234567890
                </td>
                <td className="px-6 py-4">
                    Teacher
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


       </div>
  )
}

export default Mentors
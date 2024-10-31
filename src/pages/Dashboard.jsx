import React, { useState } from 'react';
import user from '../assets/image.png';
import Mentors from '../components/Mentors';
import Subjects from '../components/Subjects';
import Labs from '../components/Labs';
import Classes from '../components/Classes';

function Dashboard({ username }) {
  const [selectedItem, setSelectedItem] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsSidebarOpen(false); 
  };

  const renderContent = (item) => {
    switch (item) {
      case 'TimeTable':
        return (
          <div>
            <h1>TimeTable will be returned</h1>
            <h2>Create TimeTable</h2>
            <button className='bg-blue-800 px-5 py-3 rounded-xl hover:bg-blue-600'>Create</button>
          </div>
        );
      case 'Mentors':
        return <Mentors />;
      case 'Labs':
        return <Labs />;
      case 'Classes':
        return <Classes />;
      case 'Subjects':
        return <Subjects />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <div className='flex px-5 py-2 justify-between items-center border-b border-zinc-700'>
        <h1 className='text-2xl'>Dashboard</h1>
        <div className='flex gap-2 items-center'>
          <button
            className='md:hidden p-2 text-white'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close' : 'Open'} Menu
          </button>
          <h1 className='hidden md:flex'>Welcome Back, {username}</h1>
          <img src={user} alt={username} className='h-12 w-12 rounded-full' />
        </div>
      </div>

      <div className='flex flex-1'>
        <div className={`sidebar ${isSidebarOpen ? 'block' : 'hidden'} md:block w-1/4 md:w-[200px] h-full border-r border-zinc-700 text-lg cursor-pointer px-2`}>
          {['TimeTable', 'Mentors', 'Classes', 'Labs', 'Subjects'].map((item, index) => (
            <h2
              key={index}
              className='hover:bg-zinc-700 p-2 rounded'
              onClick={() => handleClick(item)}
            >
              {item}
            </h2>
          ))}
        </div>

        <div className='mainarea flex-1 bg-zinc-800 p-5 overflow-auto'>
          {renderContent(selectedItem)}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

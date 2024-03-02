import { cva } from 'class-variance-authority';
import { cn } from '../../utils/index';
import { Button } from '../button';
import React, { useEffect, useState, useCallback } from 'react';

const Tabs = ({ renderContent }) => {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState('All');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      {/* Tabs Button */}
      <div className="inline-flex gap-2">
        <Button size={'sm'} className={`bg-white border-2 border-black rounded-full text-black font-semibold ${activeTab === 'All' ? 'bg-gray-200' : ''}`} onClick={() => handleTabClick('All')}>
          All
        </Button>
        <Button size={'sm'} className={`bg-white border-2 border-black rounded-full text-black font-semibold ${activeTab === 'Best Seller' ? 'bg-gray-200' : ''}`} onClick={() => handleTabClick('Best Seller')}>
          Best Seller
        </Button>
        <Button size={'sm'} className={`bg-white border-2 border-black rounded-full text-black font-semibold ${activeTab === 'New Arrival' ? 'bg-gray-200' : ''}`} onClick={() => handleTabClick('New Arrival')}>
          New Arrival
        </Button>
      </div>
      <div className="mt-4">{renderContent(activeTab)}</div>1
    </div>
  );
};

export default Tabs;

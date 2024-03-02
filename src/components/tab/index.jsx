import { Button } from '../button';
import React, { useEffect, useState, useCallback } from 'react';

function Tabs({ children }) {
  const initialTab = children[0].props.label;
  const [activeTab, setActiveTab] = useState(initialTab);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map((child) => (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={`bg-white border-2  w-full px-5 md:px-8 py-2 md:py-3 border-black rounded-full text-black font-semibold  ${
        child.props.label === activeTab ? 'bg-black text-white hover:bg-black/80' : 'border-black hover:bg-black hover:text-white'
      }`}
      key={child.props.label}
    >
      {child.props.tabName}
    </Button>
  ));

  const tabContent = children.filter((child) => child.props.label === activeTab);
  return (
    <div>
      {/* Tabs Button */}
      <div className="tabs__box inline-flex gap-2 mb-4">{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
}

function Tab(props) {
  return <>{props.children}</>;
}

export { Tabs, Tab };

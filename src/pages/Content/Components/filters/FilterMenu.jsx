import React from 'react';
import Activity from './Activity';
import Search from './Search';
import Sort from './Sort';
import Topic from './topic';

export default function FilterMenu() {
  return (
    <div className="grid grid-cols-4 gap-3 w-full h-fit mb-3">
      <Topic />
      <Activity />
      <Sort />
      <Search />
    </div>
  );
}

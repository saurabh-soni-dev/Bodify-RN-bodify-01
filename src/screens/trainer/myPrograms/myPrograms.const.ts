import svgIndex from '@svgIndex';
const bottomSheetList = [
  {id: 1, title: 'Copy link', icon: svgIndex?.copy},
  {id: 2, title: 'Share', icon: svgIndex?.reply},
  {id: 3, title: 'Reviews & ratings', icon: svgIndex?.comment},
  {id: 7, title: 'Review', icon: svgIndex?.review},
  {id: 4, title: 'Edit', icon: svgIndex?.edit},
  {id: 5, title: 'Deactivate', icon: svgIndex?.deactivate},
  {id: 6, title: 'Delete', icon: svgIndex?.deletePurpal},
];
const threeDotBottomSheetList = [
  {id: 1, title: 'Copy Profile Link', icon: svgIndex?.copyAllPurple},
  {id: 2, title: 'My Library', icon: svgIndex?.folderPurple},
];

export {bottomSheetList, threeDotBottomSheetList};

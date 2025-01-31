import React from 'react';

const Skeleton = ({ type = 'text', width = '100%', height = '20px' }) => {
  const skeletonStyle = {
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    width: width,
    height: height,
    animation: 'pulse 1.5s infinite ease-in-out',
  };

  const skeletonText = (
    <div style={{ ...skeletonStyle, height: '20px', width: '80%' }} />
  );

  const skeletonCard = (
    <div style={{ ...skeletonStyle, height: '200px', width: '100%' }} />
  );

  switch (type) {
    case 'card':
      return skeletonCard;
    case 'text':
    default:
      return skeletonText;
  }
};

export default Skeleton;

import React from 'react';

const renderDiceDots = (value) => {
    switch (value) {
      case 1:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
        );
      case 2:
        return (
          <>
            <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full" />
          </>
        );
      case 3:
        return (
          <>
            <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full" />
          </>
        );
      case 4:
        return (
          <>
            <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute top-2 right-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full" />
          </>
        );
      case 5:
        return (
          <>
            <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute top-2 right-2 w-3 h-3 bg-black rounded-full" />
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full" />
          </>
        );
      case 6:
        return (
          <>
            <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute top-2 right-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute top-6 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute top-6 right-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-black rounded-full" />
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full" />

          </>
        );
      default:
        return null;
    }
  };

const Dice = ({ value }) => {
  return (
    <div>
        <div className="relative w-16 h-16 bg-white border-2 border-black rounded-lg flex items-center justify-center">
        {renderDiceDots(value)}
        </div>
    </div>

  );
};

export default Dice;

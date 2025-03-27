import React from "react";
import Image from "next/image";
import { Star, Heart, Clock } from 'lucide-react';

interface CardListProps {
  title: string;
  rating: number;
  duration: string;
  image: string;
  minTitleHeight?: number;
}

const CardList: React.FC<CardListProps> = ({ 
  title, 
  rating, 
  duration, 
  image,
  minTitleHeight 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg h-full flex flex-col">
      {/* Image container with fixed aspect ratio and rounded corners */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        <div className="w-full h-full overflow-hidden rounded-t-2xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105 rounded-t-2xl"
          />
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs sm:text-sm font-medium shadow-sm">
          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
          <span className="text-black">{rating}</span>
        </div>
        <div className="absolute left-3 bottom-3">
          <div className="bg-white rounded-full p-2 shadow-md">
            <Heart className="h-6 w-6 text-white fill-orange-500 stroke-orange-500" />
          </div>
        </div>
      </div>

      {/* Content area with strict layout */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title container with fixed height */}
        <div className="mb-4" style={{ height: minTitleHeight ? `${minTitleHeight}px` : '48px' }}>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
        </div>
        
        {/* Duration info - positioned at the bottom */}
        <div className="mt-auto flex items-center gap-2 text-orange-500">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CardList;
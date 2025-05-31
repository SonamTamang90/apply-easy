import React from "react";
import { Button } from "@/components/ui/button";

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-2 mb-4">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;

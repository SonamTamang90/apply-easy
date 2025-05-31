import React from "react";
import { Button } from "@/components/ui/button";

interface CustomQuestionInputProps {
  value: string;
  onChange: (v: string) => void;
  onAdd: () => void;
}

const CustomQuestionInput: React.FC<CustomQuestionInputProps> = ({
  value,
  onChange,
  onAdd,
}) => {
  return (
    <div className="mb-4 flex gap-2 items-center">
      <input
        type="text"
        className="flex-1 border rounded p-2 text-sm"
        placeholder="Add your own question..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button size="sm" onClick={onAdd}>
        Add
      </Button>
    </div>
  );
};

export default CustomQuestionInput;

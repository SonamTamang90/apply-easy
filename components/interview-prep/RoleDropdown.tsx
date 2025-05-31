import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface RoleDropdownProps {
  roles: string[];
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

const RoleDropdown: React.FC<RoleDropdownProps> = ({
  roles,
  selectedRole,
  onRoleChange,
}) => {
  return (
    <div className="mb-4">
      <span className="block text-sm font-medium mb-1">
        Select Role / Job Type
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selectedRole}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {roles.map((role) => (
            <DropdownMenuItem key={role} onClick={() => onRoleChange(role)}>
              {role}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default RoleDropdown;

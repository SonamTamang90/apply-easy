"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { UserIcon, MailIcon, LockIcon, CameraIcon, Crown } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const mockUser = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  phone: "+1 555-123-4567",
  avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  emailVerified: false,
  notifications: true,
  role: "Premium",
};

const Settings = () => {
  const [user, setUser] = useState(mockUser);
  const [editProfile, setEditProfile] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: user.name,
    phone: user.phone,
  });
  const [emailForm, setEmailForm] = useState({
    email: user.email,
  });
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [emailStatus, setEmailStatus] = useState("");

  // Handlers
  const handleProfileSave = () => {
    setUser((u) => ({ ...u, ...profileForm }));
    setEditProfile(false);
    toast.success("Profile updated!");
  };
  const handleEmailSave = () => {
    setUser((u) => ({ ...u, email: emailForm.email, emailVerified: false }));
    setEditEmail(false);
    setEmailStatus("Verification email sent!");
    toast.success("Email updated! Please verify your new email.");
    setTimeout(() => setEmailStatus(""), 2000);
  };
  const handlePasswordSave = () => {
    setChangePassword(false);
    setPasswordForm({ current: "", new: "", confirm: "" });
    toast.success("Password changed!");
  };
  const handleVerifyEmail = () => {
    setEmailStatus("Verification email sent!");
    setTimeout(() => setEmailStatus(""), 2000);
  };
  const handleToggleNotifications = () => {
    setUser((u) => ({ ...u, notifications: !u.notifications }));
  };

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
      <p className="text-muted-foreground mb-6">
        Manage your profile, account, and email preferences.
      </p>
      <Separator className="my-4" />
      {/* Profile Section Title and Description */}
      <div className="mb-2 flex items-center gap-2">
        <UserIcon className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Profile</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Update your personal information and avatar.
      </p>
      {/* Modern Profile Card */}
      <div className="bg-muted rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between mb-4 gap-4 transition-shadow hover:shadow-lg active:shadow-xl duration-200">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-background border border-border rounded-full p-1 shadow hover:bg-accent transition-colors"
                  aria-label="Change avatar"
                >
                  <CameraIcon className="w-4 h-4 text-muted-foreground" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Change avatar</TooltipContent>
            </Tooltip>
          </div>
          <div>
            <div className="font-semibold text-lg flex items-center gap-2">
              {user.name}
              <span className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold ml-1">
                {user.role === "Premium" && (
                  <Crown className="w-3.5 h-3.5 text-yellow-500" />
                )}
                {user.role || "User"}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">{user.email}</div>
            <div className="text-sm text-muted-foreground">{user.phone}</div>
          </div>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditProfile(true)}
            >
              Edit
            </Button>
          </TooltipTrigger>
          <TooltipContent>Edit profile</TooltipContent>
        </Tooltip>
      </div>
      {/* Edit Profile Dialog */}
      <Dialog open={editProfile} onOpenChange={setEditProfile}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={profileForm.name}
                onChange={(e) =>
                  setProfileForm((f) => ({ ...f, name: e.target.value }))
                }
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profileForm.phone}
                onChange={(e) =>
                  setProfileForm((f) => ({ ...f, phone: e.target.value }))
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                We&apos;ll only use your phone for account security.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleProfileSave}>Save</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Separator className="my-4" />
      {/* Account Section Title and Description */}
      <div className="mb-2 flex items-center gap-2">
        <MailIcon className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Account</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Manage your email address and notification preferences.
      </p>
      {/* Modern Email Section */}
      <div className="bg-muted rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 transition-shadow hover:shadow-lg active:shadow-xl duration-200">
        <div>
          <div className="font-semibold text-lg flex items-center gap-2">
            Email
            {user.emailVerified ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium cursor-help">
                    Verified
                  </span>
                </TooltipTrigger>
                <TooltipContent>Your email is verified</TooltipContent>
              </Tooltip>
            ) : (
              <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium">
                Unverified
              </span>
            )}
          </div>
          <div className="text-muted-foreground text-sm">{user.email}</div>
          <div className="mt-1">
            {user.emailVerified ? null : (
              <Button size="sm" variant="ghost" onClick={handleVerifyEmail}>
                Verify
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 min-w-[160px]">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setEditEmail(true)}
          >
            Change
          </Button>
          <div className="flex items-center gap-2">
            <Label htmlFor="notifications" className="text-xs">
              Notifications
            </Label>
            <Switch
              id="notifications"
              checked={user.notifications}
              onCheckedChange={handleToggleNotifications}
            />
          </div>
        </div>
      </div>
      {emailStatus && (
        <div className="text-xs text-primary mt-1 mb-4">{emailStatus}</div>
      )}
      {/* Edit Email Dialog */}
      <Dialog open={editEmail} onOpenChange={setEditEmail}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Email</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">New Email</Label>
              <Input
                id="email"
                type="email"
                value={emailForm.email}
                onChange={(e) =>
                  setEmailForm((f) => ({ ...f, email: e.target.value }))
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                We&apos;ll never share your email.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleEmailSave}>Save</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Separator className="my-4" />
      {/* Security Section Title and Description */}
      <div className="mb-2 flex items-center gap-2">
        <LockIcon className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Security</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Change your password to keep your account secure.
      </p>
      {/* Modern Password Section */}
      <div className="bg-muted rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 transition-shadow hover:shadow-lg active:shadow-xl duration-200">
        <div>
          <div className="font-semibold text-lg">Password</div>
          <div className="text-muted-foreground text-sm">••••••••</div>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setChangePassword(true)}
        >
          Change Password
        </Button>
      </div>
      {/* Change Password Dialog */}
      <Dialog open={changePassword} onOpenChange={setChangePassword}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current">Current Password</Label>
              <Input
                id="current"
                type="password"
                value={passwordForm.current}
                onChange={(e) =>
                  setPasswordForm((f) => ({ ...f, current: e.target.value }))
                }
              />
            </div>
            <div>
              <Label htmlFor="new">New Password</Label>
              <Input
                id="new"
                type="password"
                value={passwordForm.new}
                onChange={(e) =>
                  setPasswordForm((f) => ({ ...f, new: e.target.value }))
                }
              />
            </div>
            <div>
              <Label htmlFor="confirm">Confirm New Password</Label>
              <Input
                id="confirm"
                type="password"
                value={passwordForm.confirm}
                onChange={(e) =>
                  setPasswordForm((f) => ({ ...f, confirm: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handlePasswordSave}>Save</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;

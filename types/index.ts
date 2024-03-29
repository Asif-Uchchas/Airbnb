import { Listing, Reservation, User } from "@prisma/client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface ContainerProps {
    children: React.ReactNode
}

export interface MenuItemProps {
    onClick: () => void,
    label ?: string
}

export interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
  }

export interface ButtonProps {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void 
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon? : IconType
}

export interface RegisterModalStore {
    isOpen: boolean
    onOpen: ()=> void
    onClose: ()=> void
}

export interface LoginModalStore {
    isOpen: boolean
    onOpen: ()=> void
    onClose: ()=> void
}

export interface RentModalStore {
    isOpen: boolean
    onOpen: ()=> void
    onClose: ()=> void
}


export interface HeadingProps {
    title: string,
    subtitle?: string,
    center?: boolean
}

export interface InputProps {
    id: string,
    label: string,
    type?: string,
    disabled?: boolean
    formatPrice?: boolean,
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string;
  };

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified" 
    > & {
    createdAt: string
    updatedAt: string
    emailVerified: string | null
    }

export interface NavbarProps{
    currentUser?: SafeUser | null
}

export interface UserMenuProps{
    currentUser?: SafeUser | null
}

export interface AvatarProps{
    src?: string | null | undefined
}

export interface CategoryBoxProps{
    icon: IconType
    label: string
    selected?: boolean
}

export interface CategoryInputProps{
    icon: IconType
    label: string
    selected?: boolean
    onClick: (value: string) => void
}

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};
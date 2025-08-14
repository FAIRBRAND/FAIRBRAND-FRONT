import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputWithIconProps extends React.ComponentProps<typeof Input> {
    leftIcon?: React.ReactNode;
    rightAdornment?: React.ReactNode;
    containerClassName?: string;
}

export function InputWithIcon({
    leftIcon,
    rightAdornment,
    className,
    containerClassName,
    ...props
}: InputWithIconProps) {
    return (
        <div className={cn("relative", containerClassName)}>
            {leftIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {leftIcon}
                </div>
            )}
            <Input
                {...props}
                className={cn(leftIcon ? "pl-10" : "", rightAdornment ? "pr-10" : "", className)}
            />
            {rightAdornment && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {rightAdornment}
                </div>
            )}
        </div>
    );
}

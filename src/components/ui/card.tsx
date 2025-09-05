// src/components/ui/Card.tsx
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

type CardProps = PropsWithChildren<ViewProps> & {
  className?: string; // p/ NativeWind
};

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <View
      className={`flex w-full h-fit rounded-xl drop-shadow-2xl shadow-black ${className}`}
      {...rest}
    >
      {children}
    </View>
  );
}

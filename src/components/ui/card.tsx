// src/components/ui/Card.tsx
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

type CardProps = PropsWithChildren<ViewProps> & {
  className?: string; // p/ NativeWind
};

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <View
      className={`flex-1 bg-white rounded-xl drop-shadow-2xl shadow-black p-4 ${className}`}
      {...rest}
    >
      {children}
    </View>
  );
}

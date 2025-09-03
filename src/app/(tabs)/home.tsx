import Card from "@/src/components/ui/card";
import { Image, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex w-full h-[22%] px-5 py-4">
      <Card className="p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3 flex-1">
            <View className="overflow-hidden">
              <Image
                source={{ uri: "https://siga.cps.sp.gov.br/image/7TGIYSDCYPT8GM979BXFF5QTC6P4PS.TMB.JPG" }}
                className="w-16 h-16 rounded-full"
              />
            </View>

            <View className="flex-1">
              <Text className="font-poppins text-xs">Bem vindo(a)</Text>
              <Text className="font-poppins-bold text-base">Renan Silva</Text>
              <Text
                className="font-poppins text-xs"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                renan.silva@fatec.sp.gov.br
              </Text>
            </View>
          </View>

          <View className="ml-3">
            <View className="rounded-lg px-3 py-2">
              <Image
                source={require("../../assets/images/logofatec.png")}
                className="w-12 h-8"
              />
            </View>
          </View>
        </View>

        <View className="mt-3">
          <Text className="font-poppins text-sm">
            Análise e Desenvolvimento de Sistemas
          </Text>
          <Text className="font-poppins-italic text-xs mt-1">6º semestre</Text>
        </View>
      </Card>
    </View>
  );
}

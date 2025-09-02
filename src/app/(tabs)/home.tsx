import Card from "@/src/components/ui/card";
import { Image, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-background px-5 py-4">
      <View className="w-full h-[25%]">
        <Card>
          <View className="flex flex-row w-full h-1/2">
            <View className="flex w-3/5 flex-row gap-2 bg-green-400">
              <View className="flex w-3/8 h-full items-center justify-center">
                <Image
                  source={{
                    uri: "https://siga.cps.sp.gov.br/image/7TGIYSDCYPT8GM979BXFF5QTC6P4PS.TMB.JPG",
                  }}
                  className="w-16 h-16"
                  borderRadius={60}
                />
              </View>
              <View className="flex w-5/8 h-full items-start justify-center">
                <Text className="font-bold text-sm ">Bem vindo(a)</Text>
                <Text className="font-extrabold text-xl">Renan Silva</Text>
                <Text className="text-sm">renan.silva@fatec.sp.gov.br</Text>
              </View>
            </View>
            <View className="w-2/5 h-full bg-yellow-500">
              <Text>Conteúdo Superior - 2</Text>
            </View>
          </View>

          <View className="flex w-full h-1/2 bg-blue-500">
            <Text>Conteúdo Inferior</Text>
          </View>
        </Card>
      </View>
    </View>
  );
}

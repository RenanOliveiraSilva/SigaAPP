import Card from "@/src/components/ui/card";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 w-full px-5 py-4">
      <Card className="p-5 mb-8 bg-transparent">
        <LinearGradient
          colors={["#333333", "#E23636"]} // ajuste fino abaixo
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 rounded-3xl overflow-hidden"
        />
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3 flex-1">
            <View className="overflow-hidden">
              <Image
                source={{
                  uri: "https://siga.cps.sp.gov.br/image/7TGIYSDCYPT8GM979BXFF5QTC6P4PS.TMB.JPG",
                }}
                className="w-20 h-20 rounded-full"
              />
            </View>

            <View className="flex-1">
              <Text className="font-poppins text-sm color-white">
                Bem vindo(a)
              </Text>
              <Text className="font-poppins-bold text-lg color-white">
                Renan Silva
              </Text>
              <Text
                className="font-poppins text-sm color-white"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                renan.silva@fatec.sp.gov.br
              </Text>
            </View>
          </View>

          <View className="ml-3">
            <View className="px-3 py-2 bg-white rounded-xl">
              <Image
                source={require("../../assets/images/logofatec.png")}
                className="w-16 h-7 object-contain"
              />
            </View>
          </View>
        </View>

        <View className="mt-4 gap-1">
          <Text className="font-poppins text-base color-white">
            Análise e Desenvolvimento de Sistemas
          </Text>
          <Text className="font-poppins-italic text-sm mt-1 color-white">
            6º semestre
          </Text>
        </View>
      </Card>

      <View className="flex flex-row w-full mb-8 gap-4">
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-1 min-w-0 rounded-3xl "
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Card className="bg-transparent">
            <LinearGradient
              colors={["#333333", "#9C1616"]} // topo -> base
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="flex justify-center text-center items-center p-4 py-24 rounded-3xl overflow-hidden"
            >
              <View className="bg-primary/25 rounded-xl w-fit h-fit p-5 mb-14">
                <AntDesign name="book" size={40} color="white" />
              </View>
              <Text className="font-poppins-extrabold text-lg color-white">
                Matérias
              </Text>
              <Text className="font-poppins-regular text-xs color-white">
                Visualize suas disciplinas
              </Text>
            </LinearGradient>
          </Card>
        </TouchableOpacity>

        <View className="flex-1 flex-col gap-4">
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1 p-4 rounded-3xl justify-center text-center items-center bg-white "
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 8,
            }}
          >
            <View className="bg-[#DD3131]/25 rounded-xl w-fit h-fit p-4 mb-4">
              <Feather name="calendar" size={30} color="#DC3030" />
            </View>
            <Text className="font-poppins-extrabold text-lg color-black">
              Calendário
            </Text>
            <Text className="font-poppins-regular text-xs color-brown">
              Visualize seus horários de aula
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1 p-4 rounded-3xl justify-center text-center items-center bg-white"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 8,
            }}
          >
            <View className="bg-[#DD3131]/25 rounded-xl w-fit h-fit p-4 mb-4">
              <MaterialCommunityIcons
                name="file-chart-outline"
                size={30}
                color="#DC3030"
              />
            </View>
            <Text className="font-poppins-extrabold text-lg color-black">
              Desempenho
            </Text>
            <Text className="font-poppins-regular text-xs color-brown">
              Visualize suas notas e faltas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

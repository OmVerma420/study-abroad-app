import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/program";
import { Program } from "../types/program";

// Navigation Types
type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Abroad Programs</Text>

      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ProgramCard
            item={item}
            onPress={() => navigation.navigate("Details", { program: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginHorizontal: 16,
    marginBottom: 10,
    color: "#1a1a1a",
  },
});

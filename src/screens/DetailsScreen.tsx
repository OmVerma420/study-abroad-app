import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Program } from "../types/program";

// Navigation Types
type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};

type Props = {
  route: RouteProp<RootStackParamList, "Details">;
};

export default function DetailsScreen({ route }: Props) {
  const program = route?.params?.program;

  if (!program) {
    return <Text>No Data Found</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{program.university}</Text>
        <Text style={styles.country}>🌍 {program.country}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{program.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    padding: 16,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,

    // Android shadow
    elevation: 4,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
  },

  country: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#111827",
  },

  description: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 22,
  },
});

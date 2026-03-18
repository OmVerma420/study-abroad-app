import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Program } from "../types/program";

type Props = {
  item: Program;
  onPress: () => void;
};

export default function ProgramCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.university}</Text>
        <Text style={styles.country}>{item.country}</Text>

        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,

    // Android shadow
    elevation: 4,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  content: {
    gap: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },

  country: {
    fontSize: 14,
    color: "#6b7280",
  },

  description: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 4,
    lineHeight: 20,
  },
});

import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import Link from "@/components/utils/Link";
import { Typografy } from "@/components/utils/Typografy";

export default function NotFoundScreen() {
  return (
    <Box style={styles.container}>
      <Typografy type='title'>This screen doesn't exist.</Typografy>
      <Link href='Home' style={styles.link}>
        <Typografy type='link'>Go to home screen!</Typografy>
      </Link>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
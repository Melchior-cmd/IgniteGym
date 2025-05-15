import { Center, Spinner, Text } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} bg="$gray700">
      <Spinner color="$green500" />
    </Center>
  );
}

import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";
type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading = false,
  variant = "solid",
  ...rest
}: Props) {
  return (
    <GluestackButton
      {...rest}
      bg={variant === "outline" ? "$transparent" : "$green700"}
      w="$full"
      h="$14"
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-backgroundColor={variant === "outline" ? "$gray500" : "$green500"}
      disabled={isLoading}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={variant === "outline" ? "$green500" : "$white"}
          fontFamily="$heading"
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}

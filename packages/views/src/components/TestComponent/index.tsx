// @ts-ignore
import React from "react";
import { FC } from "react";
import { View, Text, Button } from "tamagui";

type TestComponentProps = {};

export const TestComponent: FC<TestComponentProps> = () => {
  return (
    <View>
      <Text>Hello from a Tamagui component!</Text>
      <Button>Tamagui button</Button>
    </View>
  );
};

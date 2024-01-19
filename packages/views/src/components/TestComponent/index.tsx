// @ts-ignore
import React from "react";
import { FC } from "react";
import { View, Text } from "tamagui";

type TestComponentProps = {};

export const TestComponent: FC<TestComponentProps> = () => {
  return (
    <>
      <View>
        <Text>Hello from a Tamagui component!</Text>
      </View>
    </>
  );
};

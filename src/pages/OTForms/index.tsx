import React from "react";
import {
  Navigation,
  Input,
  Space,
  Footer,
  Table,
  Button,
} from "../../components";
import { theme } from "../../themes";
import { Center } from "../../styles/Center";
import { LeftView, MainContainer, RightView } from "./styles";

export default function OTForms() {
  return (
    <React.Fragment>
      <Navigation isOtForm={true} />
      <Center V H>
        <MainContainer
          width={80}
          marginTop={3}
          backgroundColor={theme.color.lightYellow}
        >
          <LeftView>
            <Space height={5} />
            <label>First Name:</label>
            <Input placeholder={"required"} width={70} />
            <Space height={5} />
            <label>Last Name:</label>
            <Input placeholder={"required"} width={70} />
          </LeftView>
          <RightView>
            <Space height={5} />
            <label>Branch:</label>
            <Input placeholder={"required"} width={70} />
            <Space height={5} />
            <label>Position:</label>
            <Input placeholder={"required"} width={70} />
            <Space height={5} />
          </RightView>
        </MainContainer>
      </Center>
      <Space height={5} />
      <Center V H>
        <Table />
      </Center>
      <Space height={10} />
      <Button plain={true}>Submit</Button>
      <Footer />
    </React.Fragment>
  );
}

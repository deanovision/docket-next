import React, { useId } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Badge,
  Flex,
  Text,
  Box,
  Container,
  CloseButton,
  CircularProgress,
  CircularProgressLabel,
  Switch,
} from "@chakra-ui/react";
import DashboardStats from "./DashboardStats";
import BugStats from "./bugs/BugStats";
import {
  AddIcon,
  CalendarIcon,
  EditIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "@chakra-ui/icons";
import CreateBugModal from "./bugs/CreateBugModal";
const WithNavigation = (WrappedComponent) => {
  const links = [
    {
      label: "Dashboard",
      src: "#",
      icon: <CalendarIcon />,
    },
    {
      label: "Account",
      src: "#",
      icon: <EditIcon />,
    },
    {
      label: "Settings",
      src: "#",
      icon: <SettingsIcon />,
    },
    // {
    //   label: "Report Bug",
    //   src: "#",
    //   icon: <AddIcon />,
    // },
  ];
  const navButtons = links.map((link) => {
    return (
      <Card
        key={useId()}
        background="none"
        // background="#29539B"
        size="sm"
        padding="5px"
        mb="10px"
        _hover={{
          background: "#1E3B70",
          cursor: "pointer",
        }}
      >
        <Text color="#E8E8E8" fontWeight={500}>
          {link.icon}
          {"  "} {link.label}
        </Text>
      </Card>
    );
  });
  return (props) => {
    return (
      <Flex flexGrow={1}>
        <Container
          boxShadow="lg"
          display="flex"
          flexDir="column"
          padding="16px"
          m="0px"
          zIndex={1}
          style={{
            backgroundImage: "linear-gradient(to right, #1E3B70,#29539B)",
            width: "240px",
          }}
        >
          <Box mt="auto">{navButtons}</Box>
          <CreateBugModal />
          <BugStats />
          <Flex m="auto auto 0px auto" alignItems="center">
            <SunIcon boxSize={5} color="white" />
            <Switch mx="10px" colorScheme="teal" size="sm" />
            <MoonIcon boxSize={5} color="white" />
          </Flex>
        </Container>
        <WrappedComponent {...props} />
      </Flex>
    );
  };
};
export default WithNavigation;

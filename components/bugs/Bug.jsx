import React from "react";
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
} from "@chakra-ui/react";
import { relativeDate } from "@/utils/date.utils";
import { colors } from "@/utils/bug.utils";
import AvatarCat from "./AvatarCat";
import { EditIcon } from "@chakra-ui/icons";
import EditBugModal from "./EditBugModal";
function Bug() {
  // { created, createdBy, description, status }
  const data = {
    created: "2023-03-18T21:31:08.205170Z",
    createdBy: {
      avatar: null,
      email: "rodean@mail.com",
      id: "f0ba8078-c265-4216-8a85-1ba25683009a",
      username: "rodean",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, sapien vitae congue placerat, lacus tellus sodales mi, in ornare ex felis quis urna. In commodo nec erat tempus mollis. Duis at mattis turpis. Nam quis dolor sed purus ullamcorper molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.",
    id: "60365741-158b-4d9b-b844-c2bd1ea1fff4",
    modified: "2023-03-18T21:31:08.205170Z",
    pullRequest: null,
    resolvedAt: null,
    resolvedBy: null,
    status: "open",
  };
  //   const BugWithNavigation = Navigation(Bug)
  const { created, createdBy, description, status } = data;
  return (
    <Container>
      <Card
        p="26px"
        display="flex"
        shadow="lg"
        borderLeft={`5px solid ${colors[status]}`}
        position="relative"
      >
        {/* <EditIcon
          position="absolute"
          ml="auto"
          zIndex={1}
          top="5px"
          right="25px"
          _hover={{
            background: "#E2E8F0",
            cursor: "pointer",
          }}
          onClick={(e) => {
            console.log("clicked");
          }}
        /> */}
        <EditBugModal />
        <CloseButton
          position="absolute"
          ml="auto"
          zIndex={1}
          right="0px"
          top="0px"
          size="sm"
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Flex alignItems="center">
            <Avatar size="sm" mr="10px" icon={<AvatarCat />} />
            <Box>
              <Text fontWeight={500} fontSize="14px" lineHeight={0.9}>
                Reported by {createdBy?.username}
              </Text>
              <Text fontSize="14px"></Text>
              <Text>{relativeDate(created)}</Text>
            </Box>
          </Flex>
          <Badge
            display="flex"
            alignItems="center"
            height="16px"
            colorScheme={colors[status]}
          >
            {status}
          </Badge>
        </Box>
        <Box flexDir="column">
          <Box p="16px">
            {/* <CardHeader>{description}</CardHeader> */}
            <Text noOfLines={2}>{description}</Text>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
export default Bug;

import React from "react";
import {
  Container,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  Box,
  Card,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stat,
  StatGroup,
} from "@chakra-ui/react";

function BugStats() {
  return (
    <Container color="white" mb="auto" p="0px">
      <StatGroup boxShadow="lg" p="10px 0px" mb="16px">
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <StatGroup boxShadow="lg" p="10px 0px" mb="16px">
        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Container>
  );
}
export default BugStats;

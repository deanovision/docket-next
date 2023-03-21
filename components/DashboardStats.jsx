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

function DashboardStats() {
  return (
    <Container mb="24px">
      <Card size="sm" padding="16px">
        {/* <Flex justifyContent="space-between">
          <Box>
            <Text align="center" fontWeight={500}>
              Unresolved
            </Text>
            <CircularProgress size="100px" value={40} color="green.400">
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box>
            <Text align="center" fontWeight={500}>
              In Progress
            </Text>
            <CircularProgress size="100px" value={40} color="blue.400">
              <CircularProgressLabel>70%</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box>
            <Text align="center" fontWeight={500}>
              On Hold
            </Text>
            <CircularProgress size="100px" value={40} color="red.400">
              <CircularProgressLabel>50%</CircularProgressLabel>
            </CircularProgress>
          </Box>
        </Flex> */}
        <StatGroup>
          <Stat>
            <Box display="flex" flexDir="column" mr="auto">
              <CircularProgress size="150px" value={40} color="green.400">
                <CircularProgressLabel>
                  <StatNumber>30%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23%
                  </StatHelpText>
                </CircularProgressLabel>
              </CircularProgress>
              <StatLabel align="center">Unresolved</StatLabel>
            </Box>
          </Stat>
          <Stat>
            <Box display="flex" flexDir="column" mr="auto">
              <CircularProgress size="150px" value={30} color="blue.400">
                <CircularProgressLabel>
                  <StatNumber>30%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    17%
                  </StatHelpText>
                </CircularProgressLabel>
              </CircularProgress>
              <StatLabel align="center">In Progress</StatLabel>
            </Box>
          </Stat>
          <Stat>
            <Box display="flex" flexDir="column" mr="auto">
              <CircularProgress size="150px" value={60} color="red.400">
                <CircularProgressLabel>
                  <StatNumber>60%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    6%
                  </StatHelpText>
                </CircularProgressLabel>
              </CircularProgress>
              <StatLabel align="center">Open</StatLabel>
            </Box>
          </Stat>
        </StatGroup>
      </Card>
    </Container>
  );
}
export default DashboardStats;

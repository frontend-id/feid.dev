import * as React from 'react';
import { NextPage } from 'next';
import { Box, Text, Heading, Link } from '@chakra-ui/core';

const IndexPage: NextPage = () => {
  return (
    <Box p="4">
      <Heading>Frontend Indonesia</Heading>
      <Text mb="4">⚠ This website is under construction</Text>
      <Text>
        In the meantime, come join our{' '}
        <Link color="teal.500" href="https://s.feid.dev/discord" isExternal>
          Discord
        </Link>
      </Text>
    </Box>
  );
};

export default IndexPage;

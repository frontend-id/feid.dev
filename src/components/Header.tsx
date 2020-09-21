import React from 'react';
import { Box, Link, Stack } from '@chakra-ui/core';
import Logo from './Logo';

export default function Header() {
  return (
    <Box as="header" display="flex" justifyContent="space-between" alignItems="center">
      <Logo size={48} />
      <Stack as="nav" direction="row">
        <Link href="https://github.com/frontend-id" isExternal>
          GitHub
        </Link>
        <Link href="https://twitter.com/feid_dev" isExternal>
          Twitter
        </Link>
      </Stack>
    </Box>
  );
}

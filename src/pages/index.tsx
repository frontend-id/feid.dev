import * as React from 'react';
import { NextPage } from 'next';
import { Box, Stack, Text, Link } from '@chakra-ui/core';
import AnimatedIntro from '../components/AnimatedIntro';
import Header from '../components/Header';
import ReactIcon from '~/icons/React';
import VueIcon from '~/icons/Vue';
import SvelteIcon from '~/icons/Svelte';
import AngularIcon from '~/icons/Angular';

const IndexPage: NextPage = () => {
  return (
    <Box
      height="100vh"
      justifyContent="space-between"
      margin="auto"
      maxW="4xl"
      display="flex"
      flexDirection="column"
      p={4}
    >
      <Header />
      <Box as="main">
        <AnimatedIntro />
        <Stack spacing={10} alignItems="center">
          <Text fontSize="2xl" verticalAlign="middle">
            {'Frontend Indonesia adalah sebuah komunitas teknologi untuk pengembang antar muka di '}
            {'Indonesia, dari pengguna HTML, CSS, dan JavaScript hingga rangka kerja seperti '}
            <InlineBox><ReactIcon size="2em" />React</InlineBox>{', '}
            <InlineBox><VueIcon size="1em" /> Vue</InlineBox>{', '}
            <InlineBox><SvelteIcon size="1em" /> Svelte</InlineBox>{' dan '}
            <InlineBox><AngularIcon size="1.2em" /> Angular</InlineBox>.
          </Text>
          <Text fontSize="2xl">
            Bergabung sekarang untuk diskusi dan tanya jawab seputar teknologi dan pengembangan web.
          </Text>
          <Box alignItems="center" justifyContent="center" paddingBottom={10}>
            <Link
              href="https://s.feid.dev/discord"
              isExternal
              display="inline-block"
              title="Frontend Indonesia Discord"
            >
              <Box bgColor="#7289DA" padding={3} borderRadius={6}>
                <Stack direction="row" alignItems="center">
                  <svg
                    width={24}
                    height={24}
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 245 240"
                  >
                    <path
                      fill="#ffffff"
                      d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                    />
                    <path
                      fill="#ffffff"
                      d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                    />
                  </svg>
                  <Text color="#ffffff" fontWeight="700" fontSize="lg">
                    Join Frontend Indonesia
                  </Text>
                </Stack>
              </Box>
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box as="footer" display="flex" flexDirection="row-reverse" paddingY={4}>
        <Text>Copyright &copy; {new Date().getFullYear()} Frontend Indonesia</Text>
      </Box>
    </Box>
  );
};

function InlineBox(props: React.ComponentProps<typeof Box>) {
  return <Box {...props} display="inline-block" />
}

export default IndexPage;

import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import {
   FaWindows,
   FaXbox,
   FaApple,
   FaPlaystation,
   FaLinux,
   FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
   platforms: Platform[];
}

const iconMapping: { [key: string]: IconType } = {
   pc: FaWindows,
   playstation: FaPlaystation,
   xbox: FaXbox,
   mac: FaApple,
   android: FaAndroid,
   ios: MdPhoneIphone,
   web: BsGlobe,
   nintendo: SiNintendo,
   linux: FaLinux,
};

function PlatformIconList({ platforms }: Props) {
   return (
      <HStack marginY={1}>
         {platforms.map((platform) => (
            <Icon
               key={platform.slug}
               as={iconMapping[platform.slug]}
               color='gray.500'
            />
         ))}
      </HStack>
   );
}

export default PlatformIconList;

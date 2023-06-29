import { Badge } from '@chakra-ui/react';

interface Props {
   score: number;
}

function CriticStore({ score }: Props) {
   return (
      <Badge
         fontSize='14px'
         paddingX={2}
         borderRadius={5}
         colorScheme={score > 90 ? 'green' : 'yellow'}
      >
         {score}
      </Badge>
   );
}

export default CriticStore;

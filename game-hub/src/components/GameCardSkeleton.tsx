import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton() {
   return (
      <Card width='400px'>
         <Skeleton height='300px' />
         <CardBody>
            <SkeletonText />
         </CardBody>
      </Card>
   );
}

export default GameCardSkeleton;

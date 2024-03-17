import { Container, Grid, SimpleGrid} from '@mantine/core';
import NextUICard from './NextUICard';
import { NextUICardTwo } from './NextUICard';
import { ThirdNextCard } from './NextUICard';
import '@mantine/core/styles.css';


export function FeatureGrid() {


  return (
    <Container my="md" className='Elemenets' >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <ThirdNextCard  />
        <Grid gutter="md">
          <Grid.Col>
          <NextUICard />
          </Grid.Col>
          <Grid.Col span={6}>
            <NextUICardTwo />
          </Grid.Col>
          <Grid.Col span={6}>
          <NextUICardTwo />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
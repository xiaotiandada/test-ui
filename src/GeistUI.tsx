import { Button, Grid, Text } from '@geist-ui/core'

export default function GeistUI() {
  return (
    <>
      <Grid.Container gap={1.5}>
        <Grid><Button auto type="secondary">Secondary</Button></Grid>
        <Grid><Button auto type="success">Success</Button></Grid>
        <Grid><Button auto type="warning">Warning</Button></Grid>
        <Grid><Button auto type="error">Error</Button></Grid>
        <Grid><Button auto type="abort">Abort</Button></Grid>
        <Grid><Button auto type="secondary-light">Secondary Light</Button></Grid>
        <Grid><Button auto type="success-light">Success Light</Button></Grid>
        <Grid><Button auto type="warning-light">Warning Light</Button></Grid>
        <Grid><Button auto type="error-light">Error Light</Button></Grid>
      </Grid.Container>
      <div>
        <Text h1>Home Page</Text>
        <Button>Hello World</Button>
      </div>
    </>
  )
}
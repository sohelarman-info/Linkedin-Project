import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../components/header/navbar";
import Timeline from "../../components/timelinepage/timeline";
import TimeLinePage from "../../components/timelinepage/timeline";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Container maxW="1320px">
        <div className="content-body">
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={8}>
              <TimeLinePage />
            </GridItem>
            <GridItem colSpan={4}>right</GridItem>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Profile;

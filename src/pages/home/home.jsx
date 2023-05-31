import React from "react";
import Navbar from "../../components/header/navbar/navbar";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import "./style.css";
import NewPost from "../../components/content/post";
import Sidebar from "../../components/sidebar";
import PostContent from "../../components/content/content";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container maxW="1320px">
        <div className="content-body">
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={8}>
              <NewPost />
              <PostContent />
            </GridItem>
            <GridItem colSpan={4}>
              <Sidebar />
            </GridItem>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;

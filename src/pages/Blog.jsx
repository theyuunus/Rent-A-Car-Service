import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import { useParams } from "react-router-dom";

const Blog = () => {
  // const params = useParams()

  // if(params.title){
  //   return (
  //     <React.Fragment>
  //       fd
  //     </React.Fragment>
  //   )
  // }
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            {/* <BlogList /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;

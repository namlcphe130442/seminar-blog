import React from "react"

import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import image from "../images/blog-index.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Post
      title="Fabbi JSC"
      time="11/11/111"
      image={image}
      content="The Content Delivery API (CDA), available at cdn.contentful.com, is a read-only API for delivering content from Contentful to apps, websites and other media. Content is delivered as JSON data, and images, videos and other media as files."
    />
    <Post
      title="Fabbi JSCd ddddd "
      time="11/11/111"
      image={image}
      content="The Content Delivery API (CDA), available at cdn.contentful.com, is a read-only API for delivering content from Contentful to apps, websites and other media. Content is delivered as JSON data, and images, videos and other media as files."
    />
    <Post
      title="Fabbi JSC"
      time="11/11/111"
      image={image}
      content="The Content Delivery API (CDA), available at cdn.contentful.com, is a read-only API for delivering content from Contentful to apps, websites and other media. Content is delivered as JSON data, and images, videos and other media as files."
    />
    <Post
      title="Fabbi JSCssss sssssss"
      time="11/11/111"
      image={image}
      content="The Content Delivery API (CDA), available at cdn.contentful.com, is a read-only API for delivering content from Contentful to apps, websites and other media. Content is delivered as JSON data, and images, videos and other media as files."
    />
    <Post
      title="Fabbi JSC"
      time="11/11/111"
      image={image}
      content="The Content Delivery API (CDA), available at cdn.contentful.com, is a read-only API for delivering content from Contentful to apps, websites and other media. Content is delivered as JSON data, and images, videos and other media as files."
    />
  </Layout>
)

export default IndexPage

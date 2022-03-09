import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Gatsby Ant Design Docs Boilerplate
      </p>
      <h2>Hi👋 I'm Dowha, a contents marketer who believes positive effects of internet technology. Have great passion in SaaS and Gender equality.
I love to be creative with Adobe Illustrator, HTML/CSS, Javascript, Gatsby.</h2>
      <p>
        You can find me on LinkedIn{' '}
        <a href="https://www.linkedin.com/in/kimdowha/">
          https://www.linkedin.com/in/kimdowha/
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://twitter.com/dowha_kim"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/dowha"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="https://blog.dowha.kim">Go to my Blog</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage

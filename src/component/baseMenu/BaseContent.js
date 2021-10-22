import { React } from 'react';
import { Layout } from 'antd';
import './BaseContent.css';

const { Header, Content } = Layout;

const BaseContent = ({ children }) => {
    return <Layout>
        <Header className="page-header" />
        <Content className="page-content">{children}</Content>   
    </Layout>
}

export default BaseContent;
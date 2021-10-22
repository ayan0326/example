import React from 'react';
import {Layout} from 'antd';
import BaseMenu from './component/baseMenu/BaseMenu';
import BaseContent from './component/baseMenu/BaseContent';

const RootContainer = ({ children }) => <Layout>
    <BaseMenu />
    <BaseContent>{children}</BaseContent>
</Layout>

export default RootContainer;
import React from "react";
import { connect } from "react-redux";
import Content from "./Content";
import Header from "./Header";
// import RightPanel from "./RightPanel";
import Sider from "./Sider";
import TagsView from "./TagsView";
import { Layout } from "antd";

const Main = (props) => {
  const { tagsView, sidebarCollapsed } = props;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        {tagsView ? <TagsView /> : null}
        <div style={{'marginBottom': '51px'}}>
          <Content />
        </div>
        {/* <RightPanel /> */}
        <Layout.Footer style={{textAlign:'center', 'position': 'fixed', 'width': sidebarCollapsed ? '100%' : '89%', bottom: '0', backgroundColor: '#fff'}}>
          App Manage Admin ©2021 Created by Ant Lyzh
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.user,
    ...state.settings,
  };
};
export default connect(mapStateToProps, {})(Main);

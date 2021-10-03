import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectionOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar />
        <Typography.title level={2} className="logo">
          <Link to="/">Home</Link>
        </Typography.title>
      </div>
    </div>
  );
};

export default Navbar;

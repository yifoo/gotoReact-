import styled from "styled-components";
import LogoPic from "../../static/logo.png";

const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

const Logo = styled.a.attrs({
  href: "/"
})`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${LogoPic});
  background-size: contain;
`;
const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.action {
    color: #ea6f5a;
  }
`;

const SearchWrapper = styled.div`
  float: left;
`;

const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  margin-top: 8px;
  margin-left: 20px;
  border-radius: 40px;
  background: #eee;
  font-size: 14px;
  border: 1px solid #eee;
  &::placeholder {
    color: #999;
  }
`;

const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58rpx;
`;
const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`;
export {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
};
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { colors } from '../../settings/index';

const AppHolder = styled.div`
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 16px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: ${palette('primary', 0)};
  }

  .ant-layout-sider-collapsed .anticon {
    font-size: 16px;
  }

  .ant-layout-sider-collapsed .nav-text {
    display: none;
  }

  .ant-layout {
    background: ${palette('grayscale', 4)};

    &.isoContentMainLayout {
      overflow: auto;
      overflow-x: hidden;
      @media only screen and (min-width: 768px) and (max-width: 1220px) {
        width: calc(100% - 80px);
        flex-shrink: 0;
      }

      @media only screen and (max-width: 767px) {
        width: 100%;
        flex-shrink: 0;
      }
      
      .ant-breadcrumb {
        &.fake {
          min-height: 22px;
          padding: 92px 20px 0px; 
          position: relative;
        }
      }
    }
  }

  .isoLayoutContent {
    width: 100%;
    padding: 35px;
    background-color: ${palette('background', 0)};
    border: 1px solid ${palette('border', 0)};
    height: 100%;
  }

  .ant-tabs.ant-tabs-card > .ant-tabs-bar {
    .ant-tabs-tab {
      padding: 0 60px 1px;
      color: ${colors.greyBlue};
    }

    .ant-tabs-tab-active {
      color: ${colors.darkGreyBlueTwo};
    }

  }

  .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab:not(.ant-tabs-tab-active) {
      background: ${colors.paleGrey};
      padding: 0 60px;
      border: none;
   }

  .isomorphicSidebar {
    background: ${palette('grayscale', 5)};

     .isoLogoWrapper {
       background: ${palette('grayscale', 5)};
       border-bottom: 1px solid rgba(0, 0, 0, 0.1);
     }

     .ant-menu-submenu {
        .ant-menu-item {
          border-color: rgba(0,0,0,0.3);
        }

        .ant-menu-item-selected {
          background-color: ${colors.paleGrey};
          border-left: 4px solid ${colors.softBlueTwo};
        }
     }

     .ant-menu-item{
       border-left: 4px solid ${colors.white};
     }

     .ant-menu-sub {
       .ant-menu-item {
         border-left: none;

         &:hover {
          border-left: none;
         }
       }
     }

     .ant-menu-item-selected {
       border-left: 4px solid ${palette('primary', 0)};
     }
  }

  .isomorphicLayout {
    width: calc(100% - 240px);
    flex-shrink: 0;
    overflow-x: hidden !important;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1220px) {
      width: calc(100% - 80px);
    }
  }

  .ant-layout-footer {
    font-size: 13px;
    @media (max-width: 767px) {
      padding: 10px 20px;
    }
  }

  .jjj-icon:before {
    content:url('../../assets/jitjatjo-logo.png')
  }

  .has-error {
    .inputLabel {
      color: ${colors.warmPink};
    }

    .inputNumberLabel {
      color: ${colors.warmPink};
    }

    .ant-form-explain {
      color: ${colors.warmPink};
      margin-top: 3px;
    }
  }
  
  .edit-icon {
    width: 20px;
    height: 30px;
    margin-right: 5px;
    margin-left: 5px;
    color: ${palette('linkIcon', 0)};
  }

  .applicant-record-button {
    margin: -1px 0;
    font-size: 16;
    font-weight: 900;
    padding: 0 20px;
  }

  @media screen and (max-width: 800px) {
    div.ant-tabs.ant-tabs-card > div.ant-tabs-bar div.ant-tabs-tab:not(.ant-tabs-tab-active) {
      padding: 0 30px;
    }
    div.ant-tabs.ant-tabs-card > div.ant-tabs-bar div.ant-tabs-tab {
      padding: 0 30px;
    }
  }
  @media screen and (max-width: 600px) {
    div.ant-tabs.ant-tabs-card > div.ant-tabs-bar div.ant-tabs-tab:not(.ant-tabs-tab-active) {
      padding: 0 10px;
    }
    div.ant-tabs.ant-tabs-card > div.ant-tabs-bar div.ant-tabs-tab {
      padding: 0 10px;
    }
    .edit-icon {
      margin: 0;
      width: 20px;
      height: 30px;
    }
  }
  .ant-btn {
    margin: 5px;
  }
`;

export default AppHolder;

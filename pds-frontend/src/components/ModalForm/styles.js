import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`

  .ant-row {
    display: block;
  }

  .ant-modal-content {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 12px 48px #00000008;
    border-radius: 12px!important;
  }

    .ant-modal-footer {
      button {
        background: #071D41;
        border: 1px solid #071D41;
        border-radius: 6px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
      }
      button:first-child {
        background: transparent!important;
      }
    }

    .ant-modal-header{
      border-radius: 12px 12px 0px 0px; ;
    }

    .ant-modal-mask {
      background: #646D82 0% 0% no-repeat padding-box;
    }
    input:disabled {
      color: #646d82;
    }
    textarea:disabled {
      color: #646d82;
    }

`;

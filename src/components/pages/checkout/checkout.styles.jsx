import styled from 'styled-components';

import StripeButton from '../../stripe-button/stripe-button.component';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const ChekoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`text-transform: capitalize;
width: 23%;

&:last-child {
  width: 8%;`;

export const CartTotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const StripeButtonContainer = styled(StripeButton)`
  margin-left: auto;
  margin-top: 50px;
`;

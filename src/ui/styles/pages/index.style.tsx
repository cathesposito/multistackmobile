import styled from "@emotion/native";

export const FormContainer = styled.View`
  padding: 0 16px;
`;

export const TextContainer = styled.Text`
  padding: 32px 0;
  text-align: center;
`;

export const ErrorText = styled(TextContainer)`
  color: ${({ theme }) => theme.colors.error};
`;

export const ResponseContainer = styled.View`
  padding: 16px 0 8x;
`;

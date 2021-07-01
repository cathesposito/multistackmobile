import styled, { css } from "@emotion/native";
import { AirbnbRating } from "react-native-ratings";
import AppTheme from "ui/themes/app-theme";
import { View } from "react-native";

export const UserInformationContainer = styled(View, {
  shouldForwardProp: (prop) => prop !== "darker",
})<{ darker: booLean }>`
  flex-flow: row;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme, darker }) =>
    theme.colors.grey[darker ? 100 : 50]};
`;

export const UserName = styled.Text`
  color: gray;
  font-weight: bold;
`;

export const UserDescription = styled.Text`
  color: gray;
`;

export const InformationContainer = styled.View`
  flex: 1;
  padding: 8px;
`;

export const RatingStyled = styled(AirbnbRating)``;

RatingStyled.defaultProps = {
  isDisabled: true,
  showRating: false,
  size: 10,
  count: 5,
  selectedColor: AppTheme.colors.warning,
  starContainerStyle: css`
    width: 100%;
    justify-content: flex-start;
  `,
};

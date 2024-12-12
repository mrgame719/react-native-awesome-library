import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { styles } from './styles';

interface RowProps {
  children?: React.ReactNode | React.ReactNode[];
  backgroundColor?: string;
  style?: ViewStyle | ViewStyle[];
}

export const Row = ({ children, backgroundColor, style }: RowProps) => {
  return (
    <View style={[styles.row, { backgroundColor }, style]}>{children}</View>
  );
};

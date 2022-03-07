import React, {useState, useEffect, useCallback} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  testID: string;
  level?: number;
  children: string;
  center?: boolean;
  verticalSpacer?: boolean;
  horizontalSpacer?: boolean;
  spacer?: boolean;
  style?: StyleProp<TextStyle>;
}

const Typography = (props: Props) => {
  const {testID, level, children, style, center, spacer, verticalSpacer, horizontalSpacer} = props;
  const [defaultStyle, setDefaultStyle] = useState<StyleProp<TextStyle>[]>([]);

  const handlerTypographyStyle = useCallback((): void => {
    const composeStyles = [];
    if (center) {
      composeStyles.push(styles.center);
    }
    if (verticalSpacer) {
      composeStyles.push(styles.verticalSpacer);
    }
    if (horizontalSpacer) {
      composeStyles.push(styles.horizontalSpacer);
    }
    if (spacer) {
      composeStyles.push(styles.spacer);
    }
    switch (level) {
      case 1:
        setDefaultStyle([...composeStyles, styles.level1]);
        break;
      case 2:
        setDefaultStyle([...composeStyles, styles.level2]);
        break;
      case 3:
        setDefaultStyle([...composeStyles, styles.level3]);
        break;
      default:
        setDefaultStyle([...composeStyles, styles.level1]);
        break;
    }
  }, [level, center, spacer, verticalSpacer, horizontalSpacer]);

  useEffect(() => {
    handlerTypographyStyle();
  }, [handlerTypographyStyle]);

  return (
    <Text testID={testID} style={[...(defaultStyle && defaultStyle), style && style]}>
      {children}
    </Text>
  );
};

export default Typography;

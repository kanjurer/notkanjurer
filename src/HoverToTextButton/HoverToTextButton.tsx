import './HoverToTextButton.css';
import { Button, ChakraProps } from '@chakra-ui/react';
import { useState } from 'react';

export default function HoverToTextButton({
  text,
  icon,
  ...rest
}: HoverToTextButtonProps): JSX.Element {
  let [html, setHtml] = useState<string>('');
  const onMouseEnter = () => {
    setHtml(text);
  };
  const onMouseLeave = () => {
    setHtml('');
  };
  return (
    <>
      <Button
        {...rest}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className="hoverToTextBtn"
      >
        {icon}
        {html}
      </Button>
    </>
  );
}

interface HoverToTextButtonProps extends ChakraProps {
  text: string;
  icon: any;
  colorScheme?: string;
}

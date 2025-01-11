import * as icons from './icons/index';

interface IconProps {
  name: string;
  classes?: string;
}

export function Icon(props: IconProps) {
  // @ts-ignore
  const IconComponent = icons[props.name]<Icons>;
  return <IconComponent classes={props.classes} />;
}
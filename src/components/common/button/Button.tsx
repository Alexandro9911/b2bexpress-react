import './button.sass';
import React from "react";

type TProps = {
  href?: string,
  onClickHandler?:  (e: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode,
  classNames?: string,
  disabled?: boolean
}

export default function Button(props: TProps) {

  const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    if(props.onClickHandler){
      props.onClickHandler(e);

    }
  }

  if(props.href) {
    return (
      <a target="_blank" href={props.href} className={props.classNames}>
        {props.children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={props.classNames} disabled={props.disabled}>
      {props.children}
    </button>
  )
}
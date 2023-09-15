export const Button = (props: any) => {
  if (props.logo) {
    return (
      <button
        className={props.className ? "Button " + props.className : "Button"}
        {...props}
      >
        {props.logo} {props.children}
      </button>
    );
  }

  return (
    <button
      className={props.className ? "Button " + props.className : "Button"}
      {...props}
    >
      {props.children}
    </button>
  );
};
